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
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(255, 255, 255, 0.75)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled 
            ? "1px solid var(--border)" 
            : "1px solid transparent",
          boxShadow: scrolled ? "var(--shadow-md)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative overflow-hidden rounded-xl transition-transform group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Mounta logo"
                width={52}
                height={52}
                className="rounded-xl"
                style={{ 
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid rgba(255,255,255,0.5)"
                }}
              />
            </div>
            <span
              className="font-display font-bold text-xl tracking-tight transition-colors"
              style={{ color: "var(--text)" }}
            >
              Mounta
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#how-it-works"
              className="text-sm font-semibold transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--text-muted)" }}
            >
              How it works
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-semibold transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--text-muted)" }}
            >
              Pricing
            </Link>
            <button 
              onClick={() => setOpenModal(true)}
              className="btn-primary text-sm px-6 py-2.5"
            >
              Join waitlist
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors hover:bg-white/50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className="block w-6 h-0.5 transition-all duration-200 rounded-full"
              style={{
                background: "var(--text)",
                transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-200 rounded-full"
              style={{
                background: "var(--text-muted)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-200 rounded-full"
              style={{
                background: "var(--text-muted)",
                transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t animate-slide-up"
            style={{ 
              background: "rgba(255,255,255,0.98)", 
              borderColor: "var(--border)",
              backdropFilter: "blur(20px)"
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              <Link 
                href="/#how-it-works" 
                className="text-base font-semibold py-2 transition-colors hover:text-[var(--accent)]" 
                style={{ color: "var(--text)" }} 
                onClick={() => setMenuOpen(false)}
              >
                How it works
              </Link>
              <Link 
                href="/pricing" 
                className="text-base font-semibold py-2 transition-colors hover:text-[var(--accent)]" 
                style={{ color: "var(--text)" }} 
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </Link>
              <button 
                onClick={() => {
                  setOpenModal(true);
                  setMenuOpen(false);
                }} 
                className="btn-primary w-full py-3"
              >
                Join waitlist
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Waitlist modal */}
      {openModal && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4 animate-fade-in"
          onClick={() => setOpenModal(false)}
        >
          <div 
            className="card-elevated w-full max-w-md p-8 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
            style={{ 
              borderRadius: "var(--radius-2xl)",
              background: "rgba(255,255,255,0.98)"
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 
                className="font-display text-2xl font-bold" 
                style={{ color: "var(--text)" }}
              >
                Join the waitlist
              </h2>
              <button
                onClick={() => setOpenModal(false)}
                className="text-2xl leading-none p-1 rounded-lg transition-colors hover:bg-white"
                style={{ color: "var(--text-subtle)" }}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <p 
              className="text-sm mb-6 font-medium" 
              style={{ color: "var(--text-muted)" }}
            >
              Be the first to know when Mounta launches. Get early access and exclusive updates.
            </p>

            <WaitlistForm size="large" />
          </div>
        </div>
      )}
    </>
  );
}
