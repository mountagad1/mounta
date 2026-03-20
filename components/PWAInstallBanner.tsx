"use client";
import { useState, useEffect } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("pwa-banner-dismissed");
    if (dismissed) return;

    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const standalone = window.matchMedia("(display-mode: standalone)").matches;
    if (standalone) return;

    if (ios) {
      setIsIOS(true);
      setTimeout(() => setShowBanner(true), 3000);
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setTimeout(() => setShowBanner(true), 3000);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") setShowBanner(false);
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    setIsDismissed(true);
    localStorage.setItem("pwa-banner-dismissed", "1");
  };

  if (!showBanner || isDismissed) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-50 rounded-2xl p-4 flex items-start gap-3 shadow-2xl animate-slide-up"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-strong)",
        maxWidth: "400px",
        margin: "0 auto",
        marginBottom: "calc(env(safe-area-inset-bottom, 0px) + 16px)",
      }}
    >
          <img
  src="/logo.png"
  alt="Mounta logo"
  className="w-8 h-8 rounded-md object-contain"
/>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
          Add Mounta to home screen
        </p>
        <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
          {isIOS
            ? 'Tap the share icon, then "Add to Home Screen"'
            : "Install for the full app experience"}
        </p>
        {!isIOS && (
          <button
            onClick={handleInstall}
            className="mt-2 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
            style={{ background: "var(--accent)", color: "#0c0a09" }}
          >
            Install app
          </button>
        )}
      </div>
      <button
        onClick={handleDismiss}
        className="text-lg leading-none flex-shrink-0 p-1"
        style={{ color: "var(--text-subtle)" }}
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  );
}
