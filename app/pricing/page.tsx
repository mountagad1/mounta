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
      <main className="pt-28 pb-20 px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs tracking-widest uppercase mb-3 font-medium" style={{ color: "var(--accent)" }}>
            Pricing
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4" style={{ color: "var(--text)" }}>
            Simple, honest pricing
          </h1>
          <p className="text-base" style={{ color: "var(--text-muted)" }}>
            Start free. Upgrade when you're ready to go deeper.
          </p>

          {/* Billing toggle */}
          <div
            className="inline-flex items-center gap-1 p-1 rounded-xl mt-8"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
          >
            {(["monthly", "annual"] as const).map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{
                  background: billing === b ? "var(--accent)" : "transparent",
                  color: billing === b ? "#0c0a09" : "var(--text-muted)",
                }}
              >
                {b === "monthly" ? "Monthly" : "Annual"}
                {b === "annual" && (
                  <span
                    className="ml-2 text-xs px-1.5 py-0.5 rounded-md font-semibold"
                    style={{
                      background: billing === "annual" ? "rgba(0,0,0,0.2)" : "var(--accent-dim)",
                      color: billing === "annual" ? "#0c0a09" : "var(--accent)",
                    }}
                  >
                    -10%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Plans grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRICING_PLANS.map((plan) => {
            const price = plan.price[billing];
            const isLifetime = plan.id === "lifetime";

            return (
              <div
                key={plan.id}
                className="card flex flex-col p-6 relative transition-all duration-300"
                style={{
                  borderColor: plan.highlighted ? "rgba(251,191,36,0.4)" : "var(--border)",
                  background: plan.highlighted ? "var(--accent-glow)" : "var(--bg-card)",
                  transform: plan.highlighted ? "scale(1.02)" : "scale(1)",
                }}
              >
                {plan.highlighted && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: "var(--accent)", color: "#0c0a09" }}
                  >
                    Most popular
                  </div>
                )}

                <div className="mb-6">
                  <p
                    className="text-xs font-semibold tracking-widest uppercase mb-3"
                    style={{ color: plan.highlighted ? "var(--accent)" : "var(--text-muted)" }}
                  >
                    {plan.name}
                  </p>
                  <div className="flex items-end gap-1 mb-2">
                    {price === 0 ? (
                      <span className="font-display text-4xl font-semibold" style={{ color: "var(--text)" }}>
                        Free
                      </span>
                    ) : isLifetime ? (
                      <>
                        <span className="font-display text-4xl font-semibold" style={{ color: "var(--text)" }}>
                          ${price}
                        </span>
                        <span className="text-sm mb-1.5" style={{ color: "var(--text-muted)" }}>
                          once
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="font-display text-4xl font-semibold" style={{ color: "var(--text)" }}>
                          ${price.toFixed(0)}
                        </span>
                        <span className="text-sm mb-1.5" style={{ color: "var(--text-muted)" }}>
                          /mo
                        </span>
                      </>
                    )}
                  </div>
                  {billing === "annual" && !isLifetime && price > 0 && (
                    <p className="text-xs" style={{ color: "var(--text-subtle)" }}>
                      Billed ${(price * 12).toFixed(0)}/year
                    </p>
                  )}
                  <p className="text-sm mt-3" style={{ color: "var(--text-muted)" }}>
                    {plan.description}
                  </p>
                </div>

                <ul className="flex-1 space-y-3 mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <span
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: plan.highlighted ? "var(--accent)" : "var(--green)" }}
                      >
                        ✓
                      </span>
                      <span style={{ color: "var(--text-muted)" }}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full py-3 rounded-xl text-sm font-medium transition-all duration-200"
                  style={
                    plan.highlighted
                      ? { background: "var(--accent)", color: "#0c0a09" }
                      : {
                          background: "var(--bg-elevated)",
                          color: "var(--text)",
                          border: "1px solid var(--border)",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (!plan.highlighted) {
                      e.currentTarget.style.borderColor = "var(--border-strong)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.highlighted) {
                      e.currentTarget.style.borderColor = "var(--border)";
                    }
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* FAQ teaser */}
        <div className="max-w-xl mx-auto mt-20 text-center">
          <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>
            All plans include a 14-day trial. No credit card required.
          </p>
          <p className="text-xs" style={{ color: "var(--text-subtle)" }}>
            Questions? Contact us at{" "}
            <a href="mailto:hello@mounta.io" style={{ color: "var(--accent)" }}>
              hello@mounta.io
            </a>
          </p>
        </div>

        {/* Waitlist CTA */}
        <div className="max-w-xl mx-auto mt-24 text-center">
          <div
            className="card p-8"
            style={{ borderColor: "rgba(251,191,36,0.15)", background: "var(--accent-glow)" }}
          >
            <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: "var(--text)" }}>
              Launching soon
            </h3>
            <p className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
              Secure your spot on the waitlist and get notified when Mounta opens.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
