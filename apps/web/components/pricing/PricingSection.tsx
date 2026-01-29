"use client";

import { useState } from "react";
import { PRICING_PLANS } from "./pricing.config";
import { PRICING_I18N } from "./pricing.i18n";

type Props = {
  locale: keyof typeof PRICING_I18N;
};

export default function PricingSection({ locale }: Props) {
  const t = PRICING_I18N[locale] ?? PRICING_I18N.en;
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  const getPrice = (monthly: number) =>
    billing === "monthly"
      ? monthly
      : Math.round(monthly * 12 * 0.9);

  const checkout = async (priceId: string) => {
    const res = await fetch("/api/stripe/checkout", {
      method: "POST",
      body: JSON.stringify({ priceId }),
    });

    const { url } = await res.json();
    window.location.href = url;
  };

  return (
    <>
      {/* Toggle */}
      <div className="flex justify-center mb-16">
        <div className="flex bg-gray-100 p-1 rounded-full">
          {(["monthly", "annual"] as const).map((type) => (
            <button
              key={type}
              onClick={() => setBilling(type)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                billing === type
                  ? "bg-white shadow"
                  : "text-gray-500"
              }`}
            >
              {type === "monthly" ? t.monthly : t.annual}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {PRICING_PLANS.map((plan) => {
          const priceId =
            billing === "monthly"
              ? plan.stripe.monthly
              : plan.stripe.annual;

          return (
            <div
              key={plan.key}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.highlighted
                  ? "border-sky-500 shadow-lg scale-105"
                  : "border-gray-200"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 right-4 bg-sky-500 text-white text-xs px-3 py-1 rounded-full">
                  {t.popular}
                </span>
              )}

              <h3 className="text-xl font-semibold mb-2">
                {plan.name}
              </h3>

              <p className="text-gray-500 mb-6">
                {billing === "monthly"
                  ? t.billedMonthly
                  : t.billedAnnual}
              </p>

              <div className="text-4xl font-bold mb-6">
                {getPrice(plan.monthly)}€
                <span className="text-base text-gray-500">
                  /{billing === "monthly" ? "mo" : "yr"}
                </span>
              </div>

              <ul className="mb-8 space-y-2 text-sm text-gray-600">
                {plan.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>

              <button
                onClick={() => checkout(priceId)}
                className={`mt-auto py-3 rounded-xl font-medium transition ${
                  plan.highlighted
                    ? "bg-sky-500 text-white hover:bg-sky-600"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {t.cta}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
