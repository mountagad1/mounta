import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

/**
 * i18n config
 */
const locales = ["fr", "en", "es", "it", "ar", "de"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "fr";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  /**
   * 1️⃣ Ignore static files & API
   */
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  /**
   * 2️⃣ Locale handling
   */
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}`)
  );

  if (!pathnameHasLocale) {
    const acceptLanguage = request.headers.get("accept-language");
    const detected =
      acceptLanguage?.split(",")[0]?.split("-")[0] ?? defaultLocale;

    const locale: Locale = locales.includes(detected as Locale)
      ? (detected as Locale)
      : defaultLocale;

    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    );
  }

  /**
   * 3️⃣ Clerk auth (CORRECT middleware API)
   */
  const { userId, sessionClaims } = getAuth(request);

  /**
   * 4️⃣ Pro-only routes (localized)
   */
  if (pathname.includes("/dashboard/pro")) {
    if (!userId) {
      return NextResponse.redirect(
        new URL("/sign-in", request.url)
      );
    }

    const plan =
  (sessionClaims?.publicMetadata as { plan?: string })?.plan;

    if (plan !== "pro" && plan !== "elite") {
      return NextResponse.redirect(
        new URL("/pricing", request.url)
      );
    }
  }

  return NextResponse.next();
}

/**
 * Middleware matcher
 */
export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
