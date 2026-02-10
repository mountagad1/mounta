import type { ReactNode } from "react";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const isFr = params.locale === "fr";

  return {
    title: isFr
      ? "Mounta – Assistant de vie IA"
      : "Mounta – AI Goal & Life Assistant",
    description: isFr
      ? "Transformez vos objectifs en actions quotidiennes."
      : "Turn goals into daily actions with AI.",
  };
}

export default function LocaleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="min-h-screen">{children}</div>;
}
