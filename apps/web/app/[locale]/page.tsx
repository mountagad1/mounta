// app/[locale]/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "mounta.io — AI Life & Goal Manager",
  description:
    "A proactive AI Life & Goal Manager that turns your goals into daily strategic decisions.",
};

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Don’t manage tasks.
        <span className="block text-blue-500">Manage your life.</span>
      </h1>

      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
        mounta.io is a proactive AI Life & Goal Manager that transforms your
        goals into daily strategic decisions.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          href={`/${locale}/pricing`}
          className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          View pricing
        </Link>

        <Link
          href={`/${locale}/demo`}
          className="px-8 py-4 rounded-xl border font-semibold hover:bg-gray-50 transition"
        >
          See demo
        </Link>
      </div>
    </section>
  );
}