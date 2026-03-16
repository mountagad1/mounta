"use client";
import { useState } from "react";

export default function WaitlistForm({ size = "default" }: { size?: "default" | "large" }) {
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
        setMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setMessage("Connection error. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div
        className="flex items-center gap-3 px-5 py-4 rounded-xl"
        style={{ background: "rgba(134,239,172,0.08)", border: "1px solid rgba(134,239,172,0.2)" }}
      >
        <span className="text-xl">✓</span>
        <div>
          <p className="text-sm font-medium" style={{ color: "var(--green)" }}>
            You're on the list
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
            {message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${size === "large" ? "flex-col sm:flex-row" : "flex-col sm:flex-row"}`}>
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={`flex-1 px-4 ${size === "large" ? "py-4 text-base" : "py-3 text-sm"}`}
        style={{ minWidth: 0 }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={`btn-primary whitespace-nowrap ${size === "large" ? "py-4 text-base px-8" : ""}`}
        style={{ opacity: status === "loading" ? 0.7 : 1 }}
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Joining...
          </span>
        ) : (
          "Join waitlist →"
        )}
      </button>
      {status === "error" && (
        <p className="text-xs sm:hidden mt-1" style={{ color: "var(--red)" }}>
          {message}
        </p>
      )}
    </form>
  );
}
