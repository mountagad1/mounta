import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { locales } from "../lib/i18n";

export default async function RootPage() {
  const headersList = await headers();
  const accept = headersList.get("accept-language") || "en";

  const lang = accept.split(",")[0].split("-")[0];
  const locale = locales.includes(lang as any) ? lang : "en";

  redirect(`/${locale}`);
}
