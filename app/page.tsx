import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";
import PWAInstallBanner from "@/components/PWAInstallBanner";
import StaircaseAnimation from "@/components/StaircaseAnimation";
import Link from "next/link";

const BLOG_POSTS = [
  { 
    tag: "Mindset", 
    title: "Why motivation isn't enough", 
    excerpt: "Motivation gets you started. Systems keep you going. Here's why the shift matters.", 
    readTime: "4 min",
    href: "/blog/motivation-vs-systems"
  },
  { 
    tag: "Progress", 
    title: "The power of daily progress", 
    excerpt: "Small consistent actions compound into extraordinary outcomes over time.", 
    readTime: "5 min",
    href: "/blog/daily-progress"
  },
  { 
    tag: "AI & Execution", 
    title: "How AI improves execution", 
    excerpt: "AI doesn't replace your drive — it removes friction and keeps you accountable.", 
    readTime: "6 min",
    href: "/blog/ai-execution"
  },
];

const STEPS = [
  { 
    number: "01", 
    icon: "◎", 
    title: "Clarify your goal", 
    desc: "Transform vague ambitions into a clear, structured direction with defined milestones and measurable outcomes." 
  },
  { 
    number: "02", 
    icon: "⟶", 
    title: "Build your path", 
    desc: "AI converts your goal into a realistic execution plan — milestones, steps, and daily actions tailored to your pace." 
  },
  { 
    number: "03", 
    icon: "↺", 
    title: "Adapt and progress", 
    desc: "Plans evolve automatically based on your consistency, energy, and feedback. No burnout, just sustainable momentum." 
  },
];

const SOCIAL_PROOF = [
  { initial: "F", bg: "#dbeafe", color: "#1e3a5f", name: "Francesca" },
  { initial: "A", bg: "#dcfce7", color: "#14532d", name: "Alex" },
  { initial: "J", bg: "#ede9fe", color: "#3b0764", name: "Jordan" },
  { initial: "M", bg: "#fce7f3", color: "#831843", name: "Maria" },
  { initial: "S", bg: "#e0f2fe", color: "#0c4a6e", name: "Sam" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ background: "var(--sky-gradient)" }}>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* HERO SECTION */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="relative flex flex-col justify-center pt-32 pb-24 px-6 overflow-hidden">
          <div className="relative max-w-5xl mx-auto text-center">
            
            {/* Status badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 animate-fade-in"
              style={{ 
                background: "rgba(255,255,255,0.85)", 
                border: "1px solid rgba(255,255,255,0.95)", 
                color: "var(--accent)",
                backdropFilter: "blur(12px)",
                boxShadow: "var(--shadow-md)"
              }}
            >
              <span 
                className="w-2 h-2 rounded-full animate-pulse" 
                style={{ background: "var(--accent)" }} 
              />
              AI Execution Assistant — Coming Soon
            </div>

            {/* Hero headline */}
            <h1 
              className="font-display font-bold leading-[1.05] tracking-tight mb-6 text-shadow"
              style={{ 
                fontSize: "clamp(48px,7.5vw,84px)", 
                color: "#ffffff",
                textShadow: "0 4px 24px rgba(12,35,64,0.2)"
              }}
            >
              Turn goals into
              <br />
              <span className="italic font-medium" style={{ color: "#ffffff" }}>
                real action.
              </span>
            </h1>

            {/* Value proposition */}
            <p 
              className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10" 
              style={{ color: "#0c2340", fontWeight: 500 }}
            >
              Mounta is your AI execution partner. We help you move from intention to results — 
              <strong className="font-semibold" style={{ color: "var(--accent)" }}> one realistic action at a time.</strong>
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Link 
                href="/pricing" 
                className="btn-primary text-base sm:text-lg px-8 py-4"
              >
                Start for free →
              </Link>
              <a 
                href="#how-it-works" 
                className="btn-secondary text-base sm:text-lg px-8 py-4"
              >
                See how it works ↓
              </a>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center animate-slide-up">
              <div className="flex -space-x-3">
                {SOCIAL_PROOF.map((person, i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-transform hover:scale-110"
                    style={{ 
                      border: "3px solid white", 
                      background: person.bg, 
                      color: person.color,
                      boxShadow: "var(--shadow-sm)"
                    }}
                    title={person.name}
                  >
                    {person.initial}
                  </div>
                ))}
              </div>
              <p className="text-base font-medium" style={{ color: "#1e4976" }}>
                <strong className="font-bold" style={{ color: "#0c2340" }}>347 people</strong> already on the waitlist
              </p>
            </div>

            {/* Floating progress card */}
            <div className="mt-24 mx-auto max-w-md animate-float">
              <div 
                className="card-elevated p-6 md:p-7"
                style={{ 
                  borderRadius: "var(--radius-2xl)",
                  boxShadow: "0 12px 48px rgba(12,35,64,0.15)"
                }}
              >
                {/* Card header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p 
                      className="text-xs font-bold uppercase tracking-wider mb-1" 
                      style={{ color: "var(--text-subtle)" }}
                    >
                      ACTIVE GOAL
                    </p>
                    <p 
                      className="text-base font-bold" 
                      style={{ color: "var(--text)" }}
                    >
                      Launch YouTube channel
                    </p>
                  </div>
                  <div 
                    className="text-xs px-3 py-1.5 rounded-full font-semibold" 
                    style={{ 
                      background: "var(--accent-glow)", 
                      color: "var(--accent)",
                      border: "1px solid var(--border-accent)"
                    }}
                  >
                    Day 3
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs mb-2 font-semibold" style={{ color: "var(--text-muted)" }}>
                    <span>Progress</span>
                    <span style={{ color: "var(--accent)" }}>38%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: "38%" }} />
                  </div>
                </div>

                {/* Today's action */}
                <div 
                  className="rounded-xl p-4" 
                  style={{ 
                    background: "var(--accent-glow)", 
                    border: "1px solid var(--border-accent)" 
                  }}
                >
                  <p 
                    className="text-xs font-bold mb-2 flex items-center gap-1.5" 
                    style={{ color: "var(--accent)" }}
                  >
                    <span className="text-sm">✦</span>
                    TODAY'S ACTION
                  </p>
                  <p 
                    className="text-sm font-medium mb-4 leading-relaxed" 
                    style={{ color: "var(--text)" }}
                  >
                    Research 3 successful channels in your niche and note their posting frequency
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                      ~25 min · research
                    </span>
                    <button 
                      className="text-xs px-4 py-2 rounded-lg font-semibold text-white transition-all hover:scale-105"
                      style={{ 
                        background: "var(--accent)",
                        boxShadow: "0 4px 12px var(--accent-glow)"
                      }}
                    >
                      Mark done →
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* HOW IT WORKS + STAIRCASE */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section id="how-it-works" className="section-padding">
          <div className="max-w-6xl mx-auto">
            
            {/* Section header */}
            <div className="text-center mb-16">
              <p 
                className="text-xs tracking-widest uppercase mb-3 font-bold" 
                style={{ color: "var(--accent)" }}
              >
                PROCESS
              </p>
              <h2 
                className="font-display font-bold mb-4 text-shadow" 
                style={{ 
                  fontSize: "clamp(32px,5vw,48px)", 
                  color: "#ffffff"
                }}
              >
                Three steps to execution
              </h2>
              <p 
                className="text-lg max-w-2xl mx-auto font-medium" 
                style={{ color: "#0c2340" }}
              >
                From vague idea to daily momentum — Mounta turns your goals into reality.
              </p>
            </div>

            {/* Staircase animation */}
            <div className="mb-12">
              <StaircaseAnimation />
            </div>

            {/* Step cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {STEPS.map((step, i) => (
                <div 
                  key={i} 
                  className="card-glass p-8 card-hover group"
                  style={{ borderRadius: "var(--radius-xl)" }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <span 
                      className="text-4xl font-mono font-light transition-colors" 
                      style={{ color: "var(--accent-glow)" }}
                    >
                      {step.number}
                    </span>
                    <span 
                      className="text-3xl transition-transform group-hover:scale-110" 
                      style={{ color: "var(--accent)" }}
                    >
                      {step.icon}
                    </span>
                  </div>
                  <h3 
                    className="font-display text-xl font-bold mb-3" 
                    style={{ color: "var(--text)" }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed font-medium" 
                    style={{ color: "var(--text-muted)" }}
                  >
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* PHILOSOPHY SECTION */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div 
              className="card-elevated p-12 md:p-16 text-center"
              style={{ 
                background: "var(--accent)",
                borderRadius: "var(--radius-2xl)",
                boxShadow: "0 12px 48px rgba(37,99,235,0.35)"
              }}
            >
              <p 
                className="font-display font-bold italic mb-5" 
                style={{ 
                  fontSize: "clamp(26px,4.5vw,42px)",
                  color: "#ffffff",
                  lineHeight: 1.3
                }}
              >
                "Execution over motivation."
              </p>
              <p 
                className="text-lg font-medium max-w-lg mx-auto" 
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Mounta doesn't wait for you to feel inspired. It keeps you moving regardless.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* WAITLIST SECTION */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section id="waitlist" className="section-padding">
          <div className="max-w-xl mx-auto">
            <div 
              className="card-elevated p-10 md:p-12 text-center"
              style={{ 
                borderRadius: "var(--radius-2xl)",
                background: "rgba(255,255,255,0.95)"
              }}
            >
              <p 
                className="text-xs tracking-widest uppercase mb-3 font-bold" 
                style={{ color: "var(--accent)" }}
              >
                EARLY ACCESS
              </p>
              <h2 
                className="font-display font-bold mb-4" 
                style={{ 
                  fontSize: "clamp(28px,4vw,38px)", 
                  color: "var(--text)"
                }}
              >
                Join the waitlist
              </h2>
              <p 
                className="text-base mb-8 font-medium" 
                style={{ color: "var(--text-muted)" }}
              >
                Be the first to access Mounta when we launch. No spam, ever.
              </p>
              <WaitlistForm size="large" />
              <p 
                className="text-xs mt-5 font-medium" 
                style={{ color: "var(--text-subtle)" }}
              >
                Already 347+ people waiting · Free tier available at launch
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* BLOG SECTION */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <section 
          className="section-padding" 
          style={{ borderTop: "1px solid rgba(255,255,255,0.5)" }}
        >
          <div className="max-w-6xl mx-auto">
            
            {/* Section header */}
            <div className="flex items-end justify-between mb-12">
              <div>
                <p 
                  className="text-xs tracking-widest uppercase mb-2 font-bold" 
                  style={{ color: "var(--accent)" }}
                >
                  INSIGHTS
                </p>
                <h2 
                  className="font-display font-bold text-shadow" 
                  style={{ 
                    fontSize: "clamp(24px,3.5vw,36px)", 
                    color: "#ffffff"
                  }}
                >
                  Execution thinking
                </h2>
              </div>
              <Link 
                href="/blog" 
                className="hidden md:block text-sm font-bold hover:underline transition-colors" 
                style={{ color: "var(--accent)" }}
              >
                All articles →
              </Link>
            </div>

            {/* Blog cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {BLOG_POSTS.map((post, i) => (
                <Link 
                  key={i}
                  href={post.href}
                  className="card-glass p-7 card-hover group block"
                  style={{ borderRadius: "var(--radius-xl)" }}
                >
                  <div 
                    className="badge badge-accent mb-5"
                  >
                    {post.tag}
                  </div>
                  <h3 
                    className="font-display text-lg font-bold mb-3 group-hover:text-[var(--accent)] transition-colors" 
                    style={{ color: "var(--text)" }}
                  >
                    {post.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed mb-4 font-medium" 
                    style={{ color: "var(--text-muted)" }}
                  >
                    {post.excerpt}
                  </p>
                  <p 
                    className="text-xs font-semibold" 
                    style={{ color: "var(--text-subtle)" }}
                  >
                    {post.readTime} read
                  </p>
                </Link>
              ))}
            </div>

            {/* Mobile "All articles" link */}
            <div className="md:hidden text-center mt-8">
              <Link 
                href="/blog" 
                className="text-sm font-bold hover:underline transition-colors" 
                style={{ color: "var(--accent)" }}
              >
                All articles →
              </Link>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
      <PWAInstallBanner />
    </>
  );
}
