"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LANGS = ["fr", "en", "de", "es", "it", "ar"];

export function Header({ locale }: { locale: string }) {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b">
      <Link href={`/${locale}`} className="font-bold text-xl">
        mounta
      </Link>

      <nav className="flex gap-4 items-center">
        <Link href={`/${locale}/pricing`}>Pricing</Link>
        <Link href={`/${locale}/demo`}>Demo</Link>

        <select
          onChange={(e) => {
            const newLocale = e.target.value;
            const rest = pathname.split("/").slice(2).join("/");
            window.location.href = `/${newLocale}/${rest}`;
          }}
          defaultValue={locale}
          className="border rounded px-2 py-1"
        >
          {LANGS.map((l) => (
            <option key={l} value={l}>
              {l.toUpperCase()}
            </option>
          ))}
        </select>
      </nav>
    </header>
  );
}
