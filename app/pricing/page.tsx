"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";
import { PRICING_PLANS } from "@/lib/types";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <>
      <Navbar />
      <main 
        className="pt-32 pb-24 px-6 min-h-screen"
        style={{ background: "var(--sky-gradient)" }}
      >
        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* HEADER */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p 
            className="text-xs tracking-widest uppercase mb-3 font-bold" 
            style={{ color: "var(--accent)" }}
          >
            PRICING
          </p>
          <h1 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow" 
            style={{ color: "#ffffff" }}
          >
            Simple, transparent pricing
          </h1>
          <p 
            className="text-lg font-medium" 
            style={{ color: "#0c2340" }}
          >
            Start free. Scale up when you're ready to unlock advanced execution tools.
          </p>

          {/* Billing toggle */}
          <div
            className="inline-flex items-center gap-1.5 p-1.5 rounded-xl mt-10"
            style={{ 
              background: "rgba(255,255,255,0.85)", 
              border: "2px solid rgba(255,255,255,0.95)",
              backdropFilter: "blur(12px)",
              boxShadow: "var(--shadow-md)"
            }}
          >
            {(["monthly", "annual"] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className="px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 relative"
                style={{
                  background: billing === b ? "var(--accent)" : "transparent",
                  color: billing === b ? "#ffffff" : "var(--text-muted)",
                }}
              >
                {b === "monthly" ? "Monthly" : "Annual"}
                {b === "annual" && (
                  <span
                    className="ml-2 text-xs px-2 py-0.5 rounded-md font-bold"
                    style={{
                      background: billing === "annual" ? "rgba(255,255,255,0.25)" : "var(--accent-glow)",
                      color: billing === "annual" ? "#ffffff" : "var(--accent)",
                    }}
                  >
                    Save 20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* PRICING CARDS */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {PRICING_PLANS.map((plan) => {
            const price = plan.price[billing];
            const isLifetime = plan.id === "lifetime";
            const isHighlighted = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={`card-glass flex flex-col p-7 relative transition-all duration-300 ${
                  isHighlighted ? "card-hover" : ""
                }`}
                style={{
                  borderRadius: "var(--radius-xl)",
                  borderColor: isHighlighted ? "var(--accent)" : "rgba(255,255,255,0.6)",
                  borderWidth: isHighlighted ? "2px" : "1px",
                  background: isHighlighted 
                    ? "rgba(255,255,255,0.95)" 
                    : "rgba(255,255,255,0.75)",
                  transform: isHighlighted ? "scale(1.03)" : "scale(1)",
                  boxShadow: isHighlighted 
                    ? "0 12px 40px rgba(37,99,235,0.2)" 
                    : "var(--shadow-md)",
                }}
              >
                {/* Popular badge */}
                {isHighlighted && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full"
                    style={{ 
                      background: "var(--accent)", 
                      color: "#ffffff",
                      boxShadow: "0 4px 12px var(--accent-glow)"
                    }}
                  >
                    Most popular
                  </div>
                )}

                {/* Plan details */}
                <div className="mb-6">
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-3"
                    style={{ 
                      color: isHighlighted ? "var(--accent)" : "var(--text-muted)" 
                    }}
                  >
                    {plan.name}
                  </p>

                  {/* Price display */}
                  <div className="flex items-end gap-1.5 mb-2">
                    {price === 0 ? (
                      <span 
                        className="font-display text-5xl font-bold" 
                        style={{ color: "var(--text)" }}
                      >
                        Free
                      </span>
                    ) : isLifetime ? (
                      <>
                        <span 
                          className="font-display text-5xl font-bold" 
                          style={{ color: "var(--text)" }}
                        >
                          ${price}
                        </span>
                        <span 
                          className="text-sm mb-2 font-semibold" 
                          style={{ color: "var(--text-muted)" }}
                        >
                          once
                        </span>
                      </>
                    ) : (
                      <>
                        <span 
                          className="font-display text-5xl font-bold" 
                          style={{ color: "var(--text)" }}
                        >
                          ${price}
                        </span>
                        <span 
                          className="text-sm mb-2 font-semibold" 
                          style={{ color: "var(--text-muted)" }}
                        >
                          /mo
                        </span>
                      </>
                    )}
                  </div>

                  {/* Annual billing note */}
                  {billing === "annual" && !isLifetime && price > 0 && (
                    <p 
                      className="text-xs font-medium" 
                      style={{ color: "var(--text-subtle)" }}
                    >
                      Billed ${(price * 12).toFixed(0)}/year
                    </p>
                  )}

                  {/* Description */}
                  <p 
                    className="text-sm mt-4 font-medium leading-relaxed" 
                    style={{ color: "var(--text-muted)" }}
                  >
                    {plan.description}
                  </p>
                </div>

                {/* Features list */}
                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feat, i) => (
                    <li 
                      key={i} 
                      className="flex items-start gap-3 text-sm font-medium"
                    >
                      <span
                        className="mt-0.5 flex-shrink-0 font-bold text-base"
                        style={{ 
                          color: isHighlighted ? "var(--accent)" : "var(--success)" 
                        }}
                      >
                        ✓
                      </span>
                      <span style={{ color: "var(--text-muted)" }}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <button
                  className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                    isHighlighted ? "btn-primary" : ""
                  }`}
                  style={
                    isHighlighted
                      ? {}
                      : {
                          background: "rgba(255,255,255,0.9)",
                          color: "var(--accent)",
                          border: "2px solid var(--border-accent)",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (!isHighlighted) {
                      e.currentTarget.style.background = "#ffffff";
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = "var(--shadow-md)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isHighlighted) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.9)";
                      e.currentTarget.style.borderColor = "var(--border-accent)";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* FAQ TEASER */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-2xl mx-auto text-center mb-24">
          <div 
            className="card-glass p-6 rounded-xl"
            style={{ 
              background: "rgba(255,255,255,0.85)",
              borderRadius: "var(--radius-xl)"
            }}
          >
            <p 
              className="text-sm font-semibold mb-2" 
              style={{ color: "var(--text)" }}
            >
              All plans include a <strong style={{ color: "var(--accent)" }}>14-day free trial</strong>. 
              No credit card required.
            </p>
            <p 
              className="text-sm font-medium" 
              style={{ color: "var(--text-subtle)" }}
            >
              Questions? Contact us at{" "}
              <a 
                href="mailto:hello@mounta.io" 
                className="font-bold hover:underline"
                style={{ color: "var(--accent)" }}
              >
                hello@mounta.io
              </a>
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* WAITLIST CTA */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <div className="max-w-xl mx-auto">
          <div
            className="card-elevated p-10 md:p-12 text-center"
            style={{ 
              borderRadius: "var(--radius-2xl)",
              background: "rgba(255,255,255,0.95)"
            }}
          >
            <h3 
              className="font-display text-3xl font-bold mb-3" 
              style={{ color: "var(--text)" }}
            >
              Launching soon
            </h3>
            <p 
              className="text-base mb-8 font-medium" 
              style={{ color: "var(--text-muted)" }}
            >
              Secure your spot on the waitlist and get early access when Mounta opens.
            </p>
            <WaitlistForm size="large" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
