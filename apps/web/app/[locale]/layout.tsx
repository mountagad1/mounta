import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import ClerkClientProvider from "@/components/providers/ClerkClientProvider";
import Navbar from "@/components/layout/Navbar";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const locales = ["fr", "en", "es", "it", "ar", "de"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "fr";

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

  if (!locales.includes(locale)) notFound();

  const messages = (
    await import(`../../messages/${locale}.json`)
  ).default;

  const isRTL = locale === "ar";

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkClientProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Navbar locale={locale} />
            {children}
          </NextIntlClientProvider>
        </ClerkClientProvider>
      </body>
    </html>
  );
}
