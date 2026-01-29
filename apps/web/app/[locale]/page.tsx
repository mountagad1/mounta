import Link from "next/link";
import { getMessages } from "@/lib/i18n";

export default function Home({
  params,
}: {
  params: { locale: string };
}) {
  const t = getMessages(params.locale);
  const locale = params.locale;

  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="py-28 text-center max-w-6xl mx-auto px-6">
        <h1 className="text-6xl font-bold mb-6">
          {t.hero_title}
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          {t.hero_subtitle}
        </p>

        <div className="flex justify-center gap-4">
          <Link href={`/${locale}/pricing`} className="btn-primary">
            {t.cta_secondary}
          </Link>
          <Link href={`/${locale}/demo`} className="btn-secondary">
            Demo
          </Link>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-gray-50 py-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          {t.problem_title}
        </h2>
        <ul className="text-lg text-gray-600 space-y-2">
          <li>❌ {t.problem_1}</li>
          <li>❌ {t.problem_2}</li>
          <li>❌ {t.problem_3}</li>
        </ul>
      </section>

      {/* FEATURES */}
      <section className="py-28 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {[
          t.feature_1,
          t.feature_2,
          t.feature_3,
          t.feature_4,
          t.feature_5,
        ].map((f) => (
          <div key={f} className="p-8 border rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold">{f}</h3>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-32 text-center bg-white">
        <h2 className="text-4xl font-bold mb-6">
          {t.cta_final}
        </h2>
        <Link
          href={`/${locale}/pricing`}
          className="btn-primary text-lg px-10 py-4"
        >
          {t.cta_primary}
        </Link>
      </section>
    </main>
  );
}
