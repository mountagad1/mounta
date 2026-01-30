"use client";

export type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  plan: string;
  highlighted?: boolean;
};

export default function PricingCard({
  name,
  price,
  description,
  plan,
  highlighted = false,
}: PricingCardProps) {
  async function handleCheckout() {
    const res = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan }),
    });

    const data = await res.json();
    if (data?.url) {
      window.location.href = data.url;
    }
  }

  return (
    <div
      className={`rounded-2xl border p-8 text-center shadow-sm transition ${
        highlighted
          ? "border-blue-500 scale-105 shadow-lg"
          : "border-gray-200"
      }`}
    >
      <h3 className="text-2xl font-bold mb-2">{name}</h3>

      <p className="text-gray-600 mb-6">{description}</p>

      <div className="text-4xl font-bold mb-8">
        {price}
        <span className="text-base font-normal text-gray-500"> / month</span>
      </div>

      <button onClick={handleCheckout} className="btn-primary w-full">
        Get started
      </button>
    </div>
  );
}
