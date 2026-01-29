"use client";

import { useState } from "react";
import PricingCard from "@/components/PricingCard";

const PLANS = [
  {
    name: "Starter",
    monthly: 9,
    plan: "starter",
  },
  {
    name: "Pro",
    monthly: 19,
    plan: "pro",
    highlighted: true,
  },
  {
    name: "Elite",
    monthly: 39,
    plan: "elite",
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  const getPrice = (monthly: number) => {
    if (billing === "monthly") return monthly;
    return Math.round(monthly * 12 * 0.9); // 10% discount
  };

  return (
    <main className="py-24 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Simple pricing
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Save 10% with annual billing
      </p>

      {/* Billing toggle */}
      <div className="flex justify-center mb-16">
        <div className="flex items-center bg-gray-100 rounded-full p-1">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              billing === "monthly"
                ? "bg-white shadow"
                : "text-gray-500"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setBilling("annual")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              billing === "annual"
                ? "bg-white shadow"
                : "text-gray-500"
            }`}
          >
            Annual (-10%)
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {PLANS.map((plan) => (
          <PricingCard
            key={plan.plan}
            name={plan.name}
            price={`${getPrice(plan.monthly)}€`}
            billing={billing}
            plan={plan.plan}
            highlighted={plan.highlighted}
          />
        ))}
      </div>
    </main>
  );
}
