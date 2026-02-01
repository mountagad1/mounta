import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["fr", "en", "de", "es", "it", "ar"];
const DEFAULT_LOCALE = "en";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Ignore next internal paths
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // If already has locale, continue
  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  // Detect browser language
  const acceptLang = req.headers.get("accept-language");
  const browserLang = acceptLang?.split(",")[0].split("-")[0];

  const locale = LOCALES.includes(browserLang || "")
    ? browserLang!
    : DEFAULT_LOCALE;

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
