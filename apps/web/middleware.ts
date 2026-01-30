import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "fr", "de", "es", "it", "ar"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore internal paths
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Already localized
  const hasLocale = locales.some(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get("accept-language") || "";
  const detectedLocale =
    acceptLanguage.split(",")[0]?.split("-")[0]?.toLowerCase() ||
    defaultLocale;

  const locale = locales.includes(detectedLocale)
    ? detectedLocale
    : defaultLocale;

  return NextResponse.redirect(
    new URL(`/${locale}`, request.url)
  );
}

export const config = {
  matcher: ["/"],
};
