import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t py-12 px-6"
      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
            style={{ background: "var(--accent)", color: "#0c0a09" }}
          >
            M
          </div>
          <span className="font-display text-sm" style={{ color: "var(--text-muted)" }}>
            mounta.io
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm" style={{ color: "var(--text-subtle)" }}>
          <Link href="/pricing" className="hover:text-stone-300 transition-colors">
            Pricing
          </Link>
          <Link href="/privacy" className="hover:text-stone-300 transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-stone-300 transition-colors">
            Terms
          </Link>
        </div>

        <p className="text-xs" style={{ color: "var(--text-subtle)" }}>
          © 2025 Mounta. Execution over motivation.
        </p>
      </div>
    </footer>
  );
}
