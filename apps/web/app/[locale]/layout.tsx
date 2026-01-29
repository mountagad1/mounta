import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";
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
   i18n locales
====================== */
const locales = ["fr", "es", "it", "ar", "de"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "fr";

/* ======================
   SEO dynamique (SSR)
====================== */
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : defaultLocale;

  const seoContent: Record<
    Locale,
    { title: string; description: string }
  > = {
    fr: {
      title: "Mounta – Assistant IA Objectifs & Vie",
      description:
        "Mounta est un assistant IA proactif pour la planification stratégique, le suivi d’objectifs et le journaling intelligent.",
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

  return {
    metadataBase: new URL("https://mounta.io"),

    title: {
      default: seoContent[locale].title,
      template: "%s | Mounta",
    },

    description: seoContent[locale].description,

    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        es: "/es",
        it: "/it",
        ar: "/ar",
        de: "/de",
      },
    },

    openGraph: {
      title: seoContent[locale].title,
      description: seoContent[locale].description,
      url: `https://mounta.io/${locale}`,
      siteName: "Mounta",
      locale,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: seoContent[locale].title,
      description: seoContent[locale].description,
    },

    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
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
  const locale: Locale = locales.includes(params.locale as Locale)
    ? (params.locale as Locale)
    : defaultLocale;

  if (!locales.includes(locale)) {
    notFound();
  }

  // Chargement lazy des traductions (SSR safe)
  const messages = (
    await import(`../../messages/${locale}.json`)
  ).default;

  const isRTL = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
