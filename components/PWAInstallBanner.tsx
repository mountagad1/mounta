"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

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
    // Check if user already dismissed
    const dismissed = localStorage.getItem("pwa-banner-dismissed");
    if (dismissed) return;

    // Check if already installed
    const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const standalone = window.matchMedia("(display-mode: standalone)").matches;
    if (standalone) return;

    // iOS handling
    if (ios) {
      setIsIOS(true);
      setTimeout(() => setShowBanner(true), 4000);
      return;
    }

    // Android/Chrome handling
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setTimeout(() => setShowBanner(true), 4000);
    };
    
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setShowBanner(false);
        localStorage.setItem("pwa-banner-dismissed", "1");
      }
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
      className="fixed bottom-6 left-4 right-4 z-50 animate-slide-up"
      style={{
        maxWidth: "420px",
        margin: "0 auto",
        marginBottom: "calc(env(safe-area-inset-bottom, 0px) + 24px)",
      }}
    >
      <div 
        className="card-elevated p-5 flex items-start gap-4"
        style={{ 
          borderRadius: "var(--radius-xl)",
          background: "rgba(255,255,255,0.98)",
          boxShadow: "0 12px 48px rgba(12,35,64,0.2)"
        }}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Mounta logo"
            width={48}
            height={48}
            className="rounded-xl"
            style={{ 
              boxShadow: "var(--shadow-sm)",
              border: "1px solid rgba(255,255,255,0.6)"
            }}
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <p 
            className="text-sm font-bold mb-1" 
            style={{ color: "var(--text)" }}
          >
            Add Mounta to your home screen
          </p>
          <p 
            className="text-xs font-medium mb-3" 
            style={{ color: "var(--text-muted)" }}
          >
            {isIOS
              ? 'Tap the share icon, then "Add to Home Screen"'
              : "Install the app for quick access and offline support"}
          </p>
          
          {/* Install button (Android/Chrome only) */}
          {!isIOS && (
            <button
              onClick={handleInstall}
              className="btn-primary text-xs px-4 py-2"
            >
              Install app
            </button>
          )}
        </div>

        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          className="text-2xl leading-none flex-shrink-0 p-1 rounded-lg transition-colors hover:bg-white/80"
          style={{ color: "var(--text-subtle)" }}
          aria-label="Dismiss"
        >
          ×
        </button>
      </div>
    </div>
  );
}
