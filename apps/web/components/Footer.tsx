import Link from "next/link";

export function Footer({ locale }: { locale: string }) {
  return (
    <footer className="border-t py-8 text-center text-sm text-gray-500">
      <div className="flex justify-center gap-6 mb-4">
        <Link href={`/${locale}/legal/terms`}>Terms</Link>
        <Link href={`/${locale}/legal/privacy`}>Privacy</Link>
        <Link href={`/${locale}/legal/notice`}>Legal</Link>
      </div>
      <p>© {new Date().getFullYear()} mounta.io</p>
    </footer>
  );
}
