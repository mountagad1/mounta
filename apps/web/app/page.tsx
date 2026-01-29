import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { locales } from "@/lib/i18n";

export default function RootPage() {
  const acceptLanguage = headers().get("accept-language") || "en";
  const browserLang = acceptLanguage.split(",")[0].split("-")[0];

  const locale = locales.includes(browserLang as any)
    ? browserLang
    : "en";

  redirect(`/${locale}`);
}
