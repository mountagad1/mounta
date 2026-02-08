import type { ReactNode } from "react";

export const metadata = {
  title: "Mounta",
  description: "Your AI-powered goal & life assistant",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
