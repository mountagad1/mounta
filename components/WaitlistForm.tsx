"use client";
import { useState } from "react";

interface WaitlistFormProps {
  size?: "default" | "large";
}

export default function WaitlistForm({ size = "default" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're on the list!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Connection error. Please check your internet and try again.");
    }
  };

  // Success state
  if (status === "success") {
    return (
      <div
        className="flex items-center gap-4 px-6 py-5 rounded-xl animate-slide-up"
        style={{ 
          background: "var(--success-bg)", 
          border: "2px solid var(--success)" 
        }}
      >
        <div 
          className="flex items-center justify-center w-10 h-10 rounded-full flex-shrink-0"
          style={{ background: "var(--success)", color: "#ffffff" }}
        >
          <span className="text-xl font-bold">✓</span>
        </div>
        <div className="flex-1">
          <p 
            className="text-base font-bold mb-1" 
            style={{ color: "var(--success)" }}
          >
            You're on the list!
          </p>
          <p 
            className="text-sm font-medium" 
            style={{ color: "var(--text-muted)" }}
          >
            {message || "We'll notify you when Mounta launches."}
          </p>
        </div>
      </div>
    );
  }

  // Error display
  const errorDisplay = status === "error" && (
    <p 
      className="text-xs font-semibold mt-2" 
      style={{ color: "var(--error)" }}
    >
      {message}
    </p>
  );

  return (
    <div>
      <form 
        onSubmit={handleSubmit} 
        className={`flex gap-3 ${
          size === "large" 
            ? "flex-col sm:flex-row" 
            : "flex-col sm:flex-row"
        }`}
      >
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "loading"}
          className={`flex-1 ${
            size === "large" 
              ? "px-5 py-4 text-base" 
              : "px-4 py-3 text-sm"
          } font-medium transition-all`}
          style={{ 
            minWidth: 0,
            opacity: status === "loading" ? 0.6 : 1,
            cursor: status === "loading" ? "not-allowed" : "text"
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className={`btn-primary whitespace-nowrap font-bold ${
            size === "large" 
              ? "py-4 text-base px-8" 
              : "py-3 text-sm px-6"
          }`}
          style={{ 
            opacity: status === "loading" ? 0.7 : 1,
            cursor: status === "loading" ? "not-allowed" : "pointer"
          }}
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <svg 
                className="animate-spin w-4 h-4" 
                viewBox="0 0 24 24" 
                fill="none"
                aria-hidden="true"
              >
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" 
                />
              </svg>
              Joining...
            </span>
          ) : (
            "Join waitlist →"
          )}
        </button>
      </form>
      
      {/* Error message */}
      {errorDisplay}
    </div>
  );
}
