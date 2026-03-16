import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";
import PWAInstallBanner from "@/components/PWAInstallBanner";
import StaircaseAnimation from "@/components/StaircaseAnimation";
import Link from "next/link";

const BLOG_POSTS = [
  { tag: "Mindset", title: "Why motivation isn't enough", excerpt: "Motivation gets you started. Systems keep you going. Here's why the shift matters.", readTime: "4 min" },
  { tag: "Progress", title: "The power of daily progress", excerpt: "Small consistent actions compound into extraordinary outcomes over time.", readTime: "5 min" },
  { tag: "AI & Execution", title: "How AI improves execution", excerpt: "AI doesn't replace your drive — it removes friction and keeps you accountable.", readTime: "6 min" },
];

const STEPS = [
  { number: "01", icon: "◎", title: "Clarify your goal", desc: "Mounta helps you turn vague ambitions into a clear, structured direction with defined milestones." },
  { number: "02", icon: "⟶", title: "Build your path", desc: "The AI converts your goal into a realistic execution plan — milestones, steps, and daily actions." },
  { number: "03", icon: "↺", title: "Adapt and progress", desc: "Plans evolve automatically based on your consistency, energy, and feedback. No burnout." },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ background: "linear-gradient(175deg,#5bb8f5 0%,#89cff0 18%,#b8e0f7 38%,#d6eefa 55%,#e8f6fd 72%,#f0f9ff 100%)", minHeight: "100vh" }}>

        {/* ── HERO ── */}
        <section className="relative flex flex-col justify-center pt-28 pb-20 px-6 overflow-hidden text-center">
          <div className="relative max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8"
              style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.9)", color: "#1e3a5f", backdropFilter: "blur(8px)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#2563eb" }} />
              AI Execution Assistant — Coming Soon
            </div>

            <h1 className="font-display font-semibold leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: "clamp(44px,7vw,76px)", color: "white", textShadow: "0 2px 20px rgba(12,35,64,0.18)" }}>
              Turn goals<br /><em className="not-italic italic">into action.</em>
            </h1>

            <p className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10" style={{ color: "#0c2340" }}>
              Mounta is an AI execution assistant that helps you move from intention to results — one realistic action at a time.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
              <Link href="/pricing" className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-medium text-base text-white transition-all"
                style={{ background: "#2563eb", boxShadow: "0 4px 18px rgba(37,99,235,0.36)" }}>
                Start Free →
              </Link>
              <a href="#how-it-works" className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-medium text-base transition-all"
                style={{ background: "#eff6ff", color: "#1e40af", border: "1.5px solid #bfdbfe" }}>
                How it works ↓
              </a>
            </div>

            <div className="flex items-center gap-3 justify-center">
              <div className="flex -space-x-2">
                {[["F","#dbeafe","#1e3a5f"],["A","#dcfce7","#14532d"],["J","#ede9fe","#3b0764"],["M","#fce7f3","#831843"],["S","#e0f2fe","#0c4a6e"]].map(([l,bg,c],i) => (
                  <div key={i} className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
                    style={{ border: "2.5px solid white", background: bg as string, color: c as string, marginLeft: i === 0 ? 0 : -7 }}>
                    {l}
                  </div>
                ))}
              </div>
              <p className="text-sm" style={{ color: "#1e4976" }}>
                <strong style={{ color: "#0c2340" }}>347 people</strong> already on the waitlist
              </p>
            </div>

            {/* Floating card */}
            <div className="mt-20 mx-auto animate-float" style={{ maxWidth: "420px" }}>
              <div className="p-5 md:p-6" style={{ background: "rgba(255,255,255,0.62)", border: "1px solid rgba(255,255,255,0.9)", borderRadius: "20px", backdropFilter: "blur(16px)", boxShadow: "0 8px 32px rgba(12,35,64,0.1)" }}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "#3a6a96" }}>ACTIVE GOAL</p>
                    <p className="text-sm font-semibold" style={{ color: "#0c2340" }}>Launch YouTube channel</p>
                  </div>
                  <div className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: "#dbeafe", color: "#2563eb" }}>Day 3</div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1.5" style={{ color: "#3a6a96" }}>
                    <span>Progress</span><span className="font-semibold" style={{ color: "#2563eb" }}>38%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "#dbeafe" }}>
                    <div className="h-full rounded-full" style={{ width: "38%", background: "linear-gradient(90deg,#1e40af,#2563eb)" }} />
                  </div>
                </div>
                <div className="rounded-xl p-3.5" style={{ background: "#eff6ff", border: "1px solid #bfdbfe" }}>
                  <p className="text-xs font-semibold mb-1" style={{ color: "#2563eb" }}>✦ TODAY'S ACTION</p>
                  <p className="text-sm mb-3" style={{ color: "#0c2340" }}>Research 3 successful channels in your niche and note their posting frequency</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs" style={{ color: "#3a6a96" }}>~25 min · research</span>
                    <button className="text-xs px-3 py-1.5 rounded-lg font-medium text-white"
                      style={{ background: "#2563eb", boxShadow: "0 2px 8px rgba(37,99,235,0.28)" }}>
                      Mark done →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS + STAIRCASE ── */}
        <section id="how-it-works" className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-xs tracking-widest uppercase mb-3 font-semibold" style={{ color: "#2563eb" }}>Process</p>
              <h2 className="font-display font-semibold mb-4" style={{ fontSize: "clamp(28px,4vw,42px)", color: "white", textShadow: "0 2px 14px rgba(12,35,64,0.14)" }}>
                Three steps to execution
              </h2>
              <p className="text-base max-w-md mx-auto" style={{ color: "#0c2340" }}>
                From vague idea to daily momentum — Mounta turns your goals into reality.
              </p>
            </div>

            <StaircaseAnimation />

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {STEPS.map((s, i) => (
                <div key={i} className="p-7 transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.54)", border: "1px solid rgba(255,255,255,0.84)", borderRadius: "18px", backdropFilter: "blur(12px)", boxShadow: "0 4px 16px rgba(12,35,64,0.06)" }}>
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-3xl font-mono font-light" style={{ color: "#bfdbfe" }}>{s.number}</span>
                    <span className="text-2xl" style={{ color: "#2563eb" }}>{s.icon}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "#0c2340" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#1e4976" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PHILOSOPHY ── */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="p-10 md:p-14 text-center" style={{ background: "#1e3a8a", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "20px", boxShadow: "0 8px 40px rgba(30,58,138,0.3)" }}>
              <p className="font-display font-semibold italic mb-4 text-white" style={{ fontSize: "clamp(22px,4vw,38px)" }}>
                "Execution over motivation."
              </p>
              <p className="text-base" style={{ color: "rgba(255,255,255,0.6)" }}>
                Mounta doesn't wait for you to feel inspired. It keeps you moving regardless.
              </p>
            </div>
          </div>
        </section>

        {/* ── WAITLIST ── */}
        <section id="waitlist" className="py-24 px-6">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-xs tracking-widest uppercase mb-3 font-semibold" style={{ color: "#2563eb" }}>Early access</p>
            <h2 className="font-display font-semibold mb-4" style={{ fontSize: "clamp(28px,4vw,38px)", color: "white", textShadow: "0 2px 14px rgba(12,35,64,0.14)" }}>
              Join the waitlist
            </h2>
            <p className="text-base mb-8" style={{ color: "#0c2340" }}>
              Be the first to access Mounta when we launch. No spam, ever.
            </p>
            <WaitlistForm size="large" />
            <p className="text-xs mt-4" style={{ color: "#3a6a96" }}>
              Already 347+ people waiting · Free tier available at launch
            </p>
          </div>
        </section>

        {/* ── BLOG ── */}
        <section className="py-24 px-6" style={{ borderTop: "1px solid rgba(255,255,255,0.4)" }}>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-xs tracking-widest uppercase mb-2 font-semibold" style={{ color: "#2563eb" }}>Insights</p>
                <h2 className="font-display font-semibold" style={{ fontSize: "clamp(22px,3vw,30px)", color: "white", textShadow: "0 2px 10px rgba(12,35,64,0.12)" }}>
                  Execution thinking
                </h2>
              </div>
              <Link href="#" className="text-sm hidden md:block font-medium" style={{ color: "#2563eb" }}>All articles →</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {BLOG_POSTS.map((post, i) => (
                <div key={i} className="p-6 cursor-pointer transition-all duration-200"
                  style={{ background: "rgba(255,255,255,0.54)", border: "1px solid rgba(255,255,255,0.84)", borderRadius: "18px", backdropFilter: "blur(12px)", boxShadow: "0 4px 14px rgba(12,35,64,0.06)" }}>
                  <div className="text-xs font-medium px-2.5 py-1 rounded-full inline-block mb-5" style={{ background: "#dbeafe", color: "#2563eb" }}>
                    {post.tag}
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-3" style={{ color: "#0c2340" }}>{post.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#1e4976" }}>{post.excerpt}</p>
                  <p className="text-xs" style={{ color: "#3a6a96" }}>{post.readTime} read</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <PWAInstallBanner />
    </>
  );
}
