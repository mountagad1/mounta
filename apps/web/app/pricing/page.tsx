import PricingSection from "@/components/pricing/PricingSection";
import FeatureTable from "@/components/pricing/FeatureTable";

type PageProps = {
  params: {
    locale: string;
  };
};

export default function PricingPage({ params }: PageProps) {
  const locale = params.locale as "en" | "fr";

  return (
    <main className="py-24 max-w-6xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Pricing
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Simple and transparent pricing
      </p>

      <PricingSection locale={locale} />
      <FeatureTable />
    </main>
  );
}
