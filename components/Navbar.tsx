"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(12,10,9,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold transition-transform group-hover:scale-110"
            style={{ background: "var(--accent)", color: "#0c0a09" }}
          >
            M
          </div>
          <span
            className="font-display font-semibold text-lg tracking-tight"
            style={{ color: "var(--text)" }}
          >
            mounta
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#how-it-works"
            className="text-sm transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            How it works
          </Link>
          <Link
            href="/pricing"
            className="text-sm transition-colors"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            Pricing
          </Link>
          <Link href="/pricing" className="btn-primary text-sm px-5 py-2">
            Join waitlist
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{
              background: "var(--text-muted)",
              transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "none",
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{
              background: "var(--text-muted)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{
              background: "var(--text-muted)",
              transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(12,10,9,0.97)", borderBottom: "1px solid var(--border)" }}
        >
          <Link href="/#how-it-works" className="text-sm py-2" style={{ color: "var(--text-muted)" }} onClick={() => setMenuOpen(false)}>
            How it works
          </Link>
          <Link href="/pricing" className="text-sm py-2" style={{ color: "var(--text-muted)" }} onClick={() => setMenuOpen(false)}>
            Pricing
          </Link>
          <Link href="/pricing" className="btn-primary text-sm w-full justify-center" onClick={() => setMenuOpen(false)}>
            Join waitlist
          </Link>
        </div>
      )}
    </nav>
  );
}
