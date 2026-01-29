"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type NavbarProps = {
  locale: string;
};

export default function Navbar({ locale }: NavbarProps) {
  const pathname = usePathname();
  const { isSignedIn } = useUser();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  const navLinks = [
    {
      label: "Features",
      href: `/${locale}#features`,
      auth: false,
    },
    {
      label: "Pricing",
      href: `/${locale}/pricing`,
      auth: false,
    },
    {
      label: "Dashboard",
      href: `/${locale}/dashboard`,
      auth: true,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="text-xl font-bold tracking-tight"
        >
          Mounta
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.auth && !isSignedIn) return null;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${
                  isActive(link.href)
                    ? "text-sky-600"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          {!isSignedIn && (
            <>
              <Link
                href="/sign-in"
                className="text-sm font-medium text-gray-600 hover:text-black"
              >
                Sign in
              </Link>

              <Link
                href="/sign-up"
                className="px-4 py-2 rounded-lg bg-sky-500 text-white text-sm font-medium hover:bg-sky-600 transition"
              >
                Get started
              </Link>
            </>
          )}

          {isSignedIn && (
            <>
              <Link
                href={`/${locale}/pricing`}
                className="px-4 py-2 rounded-lg bg-sky-500 text-white text-sm font-medium hover:bg-sky-600 transition"
              >
                Upgrade
              </Link>

              <UserButton afterSignOutUrl={`/${locale}`} />
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => {
              if (link.auth && !isSignedIn) return null;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-gray-700"
                >
                  {link.label}
                </Link>
              );
            })}

            {!isSignedIn && (
              <>
                <Link
                  href="/sign-in"
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-gray-700"
                >
                  Sign in
                </Link>

                <Link
                  href="/sign-up"
                  onClick={() => setOpen(false)}
                  className="mt-2 px-4 py-2 rounded-lg bg-sky-500 text-white text-sm font-medium text-center"
                >
                  Get started
                </Link>
              </>
            )}

            {isSignedIn && (
              <>
                <Link
                  href={`/${locale}/pricing`}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded-lg bg-sky-500 text-white text-sm font-medium text-center"
                >
                  Upgrade
                </Link>

                <UserButton afterSignOutUrl={`/${locale}`} />
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
