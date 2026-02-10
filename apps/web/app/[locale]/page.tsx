"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

/* Animations */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Landing() {
  const params = useParams<{ locale: string }>();
  const locale = params?.locale ?? "en";

  return (
    <main className="min-h-screen bg-white text-foreground">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <Image
              src="/mounta-logo.png"
              alt="Mounta logo"
              width={36}
              height={36}
              priority
            />
            <span className="font-semibold text-lg">Mounta</span>
          </Link>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home">Home</a>
            <a href="#how">How it works</a>
            <a href="#pricing">Pricing</a>
            <a href="#blog">Blog</a>
          </nav>

          <Link href={`/${locale}/auth/sign-in`} className="btn-primary">
            Sign in
          </Link>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="bg-gradient-to-br from-blue-soft via-sky-300 to-primary"
      >
        <div className="mx-auto max-w-7xl px-6 py-40 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-extrabold text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight"
          >
            Turn <span className="text-primary">goals</span> into daily action
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-10 max-w-3xl mx-auto text-2xl md:text-3xl leading-relaxed text-gray-800"
          >
            Mounta is your AI-powered life assistant that helps you clarify goals,
            build realistic plans, and stay consistent without burning out.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-16 flex justify-center gap-6"
          >
            <a href="#pricing" className="btn-primary text-lg px-10 py-4">
              Start free
            </a>
            <a href="#how" className="btn-secondary text-lg px-10 py-4">
              How it works
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how" className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold"
          >
            A simple system that keeps you consistent
          </motion.h2>

          <div className="mt-24 grid md:grid-cols-3 gap-12">
            <Step
              title="Clarify your goal"
              text="Turn vague ambitions into a clear direction you actually understand."
            />
            <Step
              title="Get a daily plan"
              text="Mounta transforms your goal into small, realistic daily actions."
            />
            <Step
              title="Adapt as you progress"
              text="Your plan evolves with you, based on feedback and momentum."
            />
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section
        id="pricing"
        className="py-32 bg-gradient-to-br from-blue-50 via-sky-50 to-white"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold"
          >
            Simple pricing that grows with you
          </motion.h2>

          <p className="mt-6 text-xl text-gray-600">
            Start free. Upgrade only when Mounta becomes essential.
          </p>

          <div className="mt-24 grid md:grid-cols-3 gap-10">
            <Plan title="Free" price="$0" />
            <Plan title="Pro" price="$12 / month" highlight />
            <Plan title="Lifetime" price="$99" />
          </div>
        </div>
      </section>

      {/* ================= BLOG ================= */}
      <section id="blog" className="py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold"
          >
            Insights on focus & consistency
          </motion.h2>

          <div className="mt-24 grid md:grid-cols-3 gap-10">
            <BlogCard title="Why motivation isn’t enough" />
            <BlogCard title="The power of daily progress" />
            <BlogCard title="How AI improves consistency" />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t py-12">
        <div className="mx-auto max-w-7xl px-6 flex justify-between text-sm text-gray-600">
          <span>© {new Date().getFullYear()} Mounta</span>
          <div className="flex gap-6">
            <a href="#pricing">Pricing</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function Step({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        rounded-3xl
        bg-gradient-to-br from-sky-200 via-sky-100 to-white
        p-10
        shadow-lg
        border border-sky-200
      "
    >
      <h3 className="text-2xl font-extrabold text-gray-900">
        {title}
      </h3>
      <p className="mt-4 text-lg font-semibold text-gray-700">
        {text}
      </p>
    </motion.div>
  );
}

function Plan({
  title,
  price,
  highlight,
}: {
  title: string;
  price: string;
  highlight?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl bg-white/70 backdrop-blur p-8 shadow-md border border-black/10 ${
        highlight ? "border-primary shadow-xl scale-[1.02]" : ""
      }`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-4 text-4xl font-bold">{price}</p>

      <button className="mt-8 rounded-lg border border-black/10 px-4 py-2 text-sm font-medium bg-white/60 hover:bg-white/80 transition">
        Choose plan
      </button>
    </motion.div>
  );
}

function BlogCard({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl bg-white/60 backdrop-blur p-6 shadow-sm border border-black/10"
    >
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-3 text-sm text-gray-600">
        Practical insights to help you stay focused and consistent.
      </p>
    </motion.div>
  );
}
