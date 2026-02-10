"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Landing() {
  const params = useParams<{ locale: string }>();
  const locale = params?.locale ?? "en";

  return (
    <main className="min-h-screen bg-white text-gray-900">
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
            <a href="#how">How it works</a>
            <a href="#blog">Blog</a>
            <Link href={`/${locale}/pricing`}>Pricing</Link>
          </nav>

          <Link href={`/${locale}/auth/sign-in`} className="btn-primary">
            Sign in
          </Link>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-blue-soft via-sky-300 to-primary">
        <div className="mx-auto max-w-7xl px-6 py-40 text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="font-extrabold text-6xl md:text-7xl lg:text-8xl tracking-tight"
          >
            Turn <span className="text-primary">goals</span> into daily action
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="mt-10 max-w-3xl mx-auto text-2xl md:text-3xl text-gray-800"
          >
            Mounta is an AI execution assistant that helps you move from intention
            to results — one realistic action at a time.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="mt-16 flex justify-center gap-6"
          >
            <Link
              href={`/${locale}/pricing`}
              className="btn-primary text-lg px-10 py-4"
            >
              Start free
            </Link>

            <a
              href="#how"
              className="btn-secondary text-lg px-10 py-4"
            >
              How it works
            </a>
          </motion.div>

          <WaitlistForm />

          <p className="mt-4 text-sm text-gray-700">
            Early users get priority access and launch pricing.
          </p>
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
            A system designed for real life
          </motion.h2>

          <div className="mt-24 grid md:grid-cols-3 gap-12">
            <Step
              title="Clarify your goal"
              text="Turn vague ambitions into a direction you actually understand."
            />
            <Step
              title="Plan your actions"
              text="Mounta builds realistic daily actions based on your energy and time."
            />
            <Step
              title="Adapt automatically"
              text="Your plan evolves as you progress — without guilt or pressure."
            />
          </div>
        </div>
      </section>

      {/* ================= BLOG ================= */}
      <section id="blog" className="py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold"
          >
            Insights on execution & consistency
          </motion.h2>

          <div className="mt-24 grid md:grid-cols-3 gap-10">
            <BlogCard title="Why motivation isn’t enough" />
            <BlogCard title="The power of daily progress" />
            <BlogCard title="How AI improves execution" />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t py-12">
        <div className="mx-auto max-w-7xl px-6 flex justify-between text-sm text-gray-600">
          <span>© {new Date().getFullYear()} Mounta</span>
          <div className="flex gap-6">
            <Link href={`/${locale}/pricing`}>Pricing</Link>
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
      className="rounded-3xl bg-gradient-to-br from-sky-200 via-sky-100 to-white p-10 shadow-lg border border-sky-200"
    >
      <h3 className="text-2xl font-extrabold">{title}</h3>
      <p className="mt-4 text-lg text-gray-700">{text}</p>
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
      className="rounded-2xl bg-white p-6 shadow-sm border border-black/10"
    >
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-3 text-sm text-gray-600">
        Practical insights to help you execute consistently.
      </p>
    </motion.div>
  );
}

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");

    await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({ email }),
    });

    setState("done");
  }

  return (
    <form onSubmit={submit} className="mt-12 flex justify-center gap-3">
      <input
        required
        type="email"
        placeholder="you@email.com"
        className="border rounded-xl px-5 py-3 w-72"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-primary text-white px-6 py-3 rounded-xl font-semibold"
        disabled={state === "loading"}
      >
        {state === "done" ? "You're in!" : "Join waitlist"}
      </button>
    </form>
  );
}
