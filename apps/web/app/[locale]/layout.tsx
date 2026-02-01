// app/[locale]/layout.tsx
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const LOCALES = ["fr", "en", "de", "es", "it", "ar"] as const;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default function LocaleLayout(props: any) {
  const { children, params } = props;

  const locale: string =
    typeof params?.locale === "string"
      ? params.locale
      : params && typeof params.then === "function"
      ? undefined
      : undefined;

  if (!locale || !LOCALES.includes(locale as any)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className="min-h-screen flex flex-col">
        <Header locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}