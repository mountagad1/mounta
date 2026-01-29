import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "../globals.css";

/* ======================
   Fonts (performance)
====================== */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* ======================
   i18n locales (TYPED)
====================== */
const locales = ["fr", "en", "es", "it", "ar", "de"] as const;
type Locale = (typeof locales)[number];

const defaultLocale: Locale = "fr";

/* ======================
   SEO content (typed)
====================== */
const seoContent: Record<
  Locale,
  { title: string; description: string }
> = {
  fr: {
    title: "Mounta – Assistant IA Objectifs & Vie",
    description:
      "Mounta est un assistant IA proactif pour la planification stratégique, le suivi d’objectifs et le journaling intelligent.",
  },
  en: {
    title: "Mounta – AI Assistant for Goals & Life",
    description:
      "Mounta is a proactive AI assistant for strategic planning, goal tracking, and intelligent journaling.",
  },
  es: {
    title: "Mounta – Asistente IA de Metas y Vida",
    description:
      "Mounta es un asistente de IA proactivo para la planificación estratégica, el seguimiento de objetivos y el journaling inteligente.",
  },
  it: {
    title: "Mounta – Assistente IA per Obiettivi e Vita",
    description:
      "Mounta è un assistente IA proattivo per la pianificazione strategica, il monitoraggio degli obiettivi e il journaling intelligente.",
  },
  ar: {
    title: "ماونتا – مساعد ذكاء اصطناعي للأهداف والحياة",
    description:
      "ماونتا هو مساعد ذكي استباقي للتخطيط الاستراتيجي، تتبع الأهداف، والتدوين الذكي.",
  },
  de: {
    title: "Mounta – KI-Assistent für Ziele & Leben",
    description:
      "Mounta ist ein proaktiver KI-Assistent für strategische Planung, Zielverfolgung und intelligentes Journaling.",
  },
};

/* ======================
   Metadata (SEO SSR)
====================== */
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : defaultLocale;

  const seo = seoContent[locale];

  return {
    metadataBase: new URL("https://mounta.io"),

    title: {
      default: seo.title,
      template: "%s | Mounta",
    },

    description: seo.description,

    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
        es: "/es",
        it: "/it",
        ar: "/ar",
        de: "/de",
      },
    },

    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://mounta.io/${locale}`,
      siteName: "Mounta",
      locale,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* ======================
   Root Layout
====================== */
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(params.locale as Locale)) {
    notFound();
  }

  const locale = params.locale as Locale;

  const messages = (
    await import(`../../messages/${locale}.json`)
  ).default;

  const isRTL = locale === "ar";

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
