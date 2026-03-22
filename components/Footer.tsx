import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com/mounta" },
  { label: "LinkedIn", href: "https://linkedin.com/company/mounta" },
];

export default function Footer() {
  return (
    <footer
      className="border-t py-16 px-6"
      style={{ 
        borderColor: "rgba(255,255,255,0.5)", 
        background: "rgba(255,255,255,0.4)",
        backdropFilter: "blur(20px)"
      }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          
          {/* Logo and tagline */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Mounta logo"
                width={56}
                height={56}
                className="rounded-xl transition-transform group-hover:scale-105"
                style={{ 
                  boxShadow: "var(--shadow-sm)",
                  border: "1px solid rgba(255,255,255,0.6)"
                }}
              />
              <span 
                className="font-display text-xl font-bold" 
                style={{ color: "var(--text)" }}
              >
                Mounta
              </span>
            </Link>
            <p 
              className="text-sm font-semibold text-center md:text-left" 
              style={{ color: "var(--text-muted)" }}
            >
              Execution over motivation.
            </p>
          </div>

          {/* Navigation links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold transition-colors hover:underline hover:text-[var(--accent)]"
                style={{ color: "var(--text-muted)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <a
            href="mailto:hello@mounta.io"
            className="text-sm font-bold transition-colors hover:underline"
            style={{ color: "var(--accent)" }}
          >
            hello@mounta.io
          </a>
        </div>

        {/* Divider */}
        <div 
          className="h-px mb-8" 
          style={{ background: "var(--border)" }}
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p 
            className="text-xs font-medium text-center md:text-left" 
            style={{ color: "var(--text-subtle)" }}
          >
            © 2025 Mounta. All rights reserved.
          </p>
          
          {/* Social links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold transition-colors hover:underline hover:text-[var(--accent)]"
                style={{ color: "var(--text-muted)" }}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
