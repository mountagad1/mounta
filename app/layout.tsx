import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mounta — Turn goals into action",
  description:
    "Mounta is your AI execution partner. We help you move from intention to results — one realistic action at a time. Start free today.",
  manifest: "/manifest.json",
  
  // Icons & Favicon
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon-64.ico", sizes: "64x64", type: "image/x-icon" },
    ],
    apple: "/apple-touch-icon-180.png",
  },
  
  // Apple Web App
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Mounta",
  },
  
  // Open Graph
  openGraph: {
    title: "Mounta — Turn goals into action",
    description: "Your AI execution partner. Move from intention to results — one realistic action at a time.",
    type: "website",
    siteName: "Mounta",
    locale: "en_US",
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Mounta — Turn goals into action",
    description: "Your AI execution partner. Move from intention to results — one realistic action at a time.",
  },
  
  // Additional meta
  keywords: [
    "AI execution assistant",
    "goal tracking",
    "productivity app",
    "action planning",
    "task management",
    "habit building",
    "execution over motivation"
  ],
  authors: [{ name: "Mounta Team" }],
  creator: "Mounta",
  publisher: "Mounta",
  
  // Verification (add your actual verification codes)
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* PWA Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Mounta" />
        <meta name="application-name" content="Mounta" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Fonts preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="safe-top safe-bottom antialiased">
        {children}
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered:', registration);
                    })
                    .catch(function(error) {
                      console.log('SW registration failed:', error);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
