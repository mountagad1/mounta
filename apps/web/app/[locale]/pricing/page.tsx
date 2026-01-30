import PricingCard from "../../../components/pricing/PricingCard";
import { getMessages } from "../../../lib/i18n";

export const metadata = {
  title: "Pricing – mounta.io",
  description: "Simple and transparent pricing plans for mounta.io",
};

export default function PricingPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const t = getMessages(locale);

  return (
    <main className="max-w-6xl mx-auto px-6 py-28 text-gray-900">
      {/* HEADER */}
      <header className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {t.pricing_title}
        </h1>
        <p className="text-lg text-gray-600">
          Choose the plan that fits your ambition.
        </p>
      </header>

      {/* PRICING GRID */}
      <section className="grid md:grid-cols-3 gap-10">
        <PricingCard
          name={t.starter}
          price="9€"
          description="Simple goals & daily clarity"
          plan="starter"
        />

        <PricingCard
          name={t.pro}
          price="19€"
          description="Creators, freelancers & focus builders"
          plan="pro"
          highlighted
        />

        <PricingCard
          name={t.elite}
          price="39€"
          description="Entrepreneurs & high-impact leaders"
          plan="elite"
        />
      </section>

      {/* FOOTER CTA */}
      <section className="text-center mt-32">
        <h2 className="text-3xl font-bold mb-6">
          {t.cta_final}
        </h2>
        <a
          href={`/${locale}`}
          className="btn-secondary inline-block"
        >
          Back to home
        </a>
      </section>
    </main>
  );
}
