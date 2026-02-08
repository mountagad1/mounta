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
      : "Mounta – AI Life & Goal Assistant",
    description: isFr
      ? "Transformez vos objectifs en actions quotidiennes avec l’IA."
      : "Turn goals into daily actions with an AI-powered life assistant.",
  };
}

export default function LocaleLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
