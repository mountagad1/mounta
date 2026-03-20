"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import WaitlistForm from "@/components/WaitlistForm";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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
          ? "rgba(255, 255, 255, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.06)" : "none",
      }}
    >
      {openModal && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
    <div className="bg-black p-6 rounded-xl w-full max-w-md">
      
      <button
        onClick={() => setOpenModal(false)}
        className="mb-4 text-sm text-gray-400"
      >
        Close
      </button>

      <h2 className="text-lg mb-4">Join the waitlist</h2>

      <WaitlistForm size="large" />

    </div>
  </div>
)}
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
  <Image
    src="/logo.png"
    alt="Mounta logo"
    width={78}
    height={78}
    className="rounded-lg transition-transform group-hover:scale-110"
  />

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
          style={{ background: "#fefefef7", borderBottom: "1px solid var(--border)" }}
        >
          <Link href="/#how-it-works" className="text-sm py-2" style={{ color: "var(--text-muted)" }} onClick={() => setMenuOpen(false)}>
            How it works
          </Link>
          <Link href="/pricing" className="text-sm py-2" style={{ color: "var(--text-muted)" }} onClick={() => setMenuOpen(false)}>
            Pricing
          </Link>
          <button onClick={() => setOpenModal(true)} className="btn-primary">
  Join waitlist
</button>
        </div>
      )}
    </nav>
  );
}
