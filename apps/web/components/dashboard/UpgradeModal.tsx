"use client";

import PricingSection from "@/components/pricing/PricingSection";

type Props = {
  open: boolean;
  locale: "en" | "fr";
  onCloseAction: () => void;
};

export default function UpgradeModal({
  open,
  locale,
  onCloseAction,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-10 max-w-5xl w-full relative">
        <button
          onClick={onCloseAction}
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-8">
          Upgrade your plan
        </h2>

        <PricingSection locale={locale} />
      </div>
    </div>
  );
}
