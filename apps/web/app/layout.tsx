import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4">mounta.io</div>
    </nav>
  );
}

export const metadata: Metadata = {
  title: "mounta.io – AI Life & Goal Manager",
  description:
    "A proactive AI Life & Goal Manager that turns goals into daily strategic decisions.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900 bg-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
