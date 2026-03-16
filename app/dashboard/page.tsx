"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import {
  calculateConsistencyScore,
  adaptPlan,
  ACTION_ICONS,
  formatDuration,
  type DailyAction,
} from "@/lib/mounta-engine";

// Mock data for MVP demo
const MOCK_GOAL = {
  id: "demo-1",
  title: "Launch YouTube channel",
  description: "Build a presence around productivity and tech topics",
  status: "active" as const,
  plan: {
    clarity: "Create and consistently publish YouTube content to build an audience.",
    estimatedWeeks: 6,
    milestones: [
      { id: "m1", title: "Foundation", description: "Research and define niche", weekNumber: 1 },
      { id: "m2", title: "First Videos", description: "Script, record and edit", weekNumber: 3 },
      { id: "m3", title: "Publish", description: "Go live and iterate", weekNumber: 5 },
    ],
  },
  completedDays: 3,
  totalDays: 14,
};

const MOCK_ACTIONS: DailyAction[] = [
  { day: 1, action: "Research 5 top channels in your niche", milestone: "m1", durationMinutes: 30, type: "research" },
  { day: 2, action: "Write your channel positioning statement", milestone: "m1", durationMinutes: 25, type: "create" },
  { day: 3, action: "List 20 potential video topics", milestone: "m1", durationMinutes: 20, type: "create" },
  { day: 4, action: "Choose your first 3 video topics", milestone: "m1", durationMinutes: 15, type: "review" },
  { day: 5, action: "Write the script for video #1", milestone: "m2", durationMinutes: 45, type: "create" },
];

export default function DashboardPage() {
  const [completedActions, setCompletedActions] = useState<number[]>([1, 2, 3]);
  const [goalInput, setGoalInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [energyLevel, setEnergyLevel] = useState<"low" | "medium" | "high">("medium");

  const todayAction = MOCK_ACTIONS[MOCK_GOAL.completedDays]; // day 4 (0-indexed)
  const progress = Math.round((completedActions.length / MOCK_ACTIONS.length) * 100);

  const consistencyScore = calculateConsistencyScore({
    plannedActions: MOCK_ACTIONS.length,
    completedActions: completedActions.length,
    streakDays: 3,
    lastActiveDate: new Date().toISOString(),
  });

  const adapted = adaptPlan(0, MOCK_ACTIONS.slice(MOCK_GOAL.completedDays));

  const handleGeneratePlan = async () => {
    if (!goalInput.trim()) return;
    setIsGenerating(true);
    try {
      const res = await fetch("/api/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal: goalInput }),
      });
      const data = await res.json();
      console.log("Generated plan:", data.plan);
      alert(`Plan generated! Check console for full output.\n\nGoal: ${data.plan?.goal}\nWeeks: ${data.plan?.estimatedWeeks}\nMilestones: ${data.plan?.milestones?.length}`);
    } catch (err) {
      alert("Failed to generate plan. Check your API key configuration.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs uppercase tracking-wider mb-1 font-medium" style={{ color: "var(--text-muted)" }}>
                Dashboard
              </p>
              <h1 className="font-display text-2xl font-semibold" style={{ color: "var(--text)" }}>
                Good morning ✦
              </h1>
            </div>
            <div
              className="text-xs px-3 py-1.5 rounded-full font-medium"
              style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
            >
              Demo mode
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { label: "Consistency", value: `${consistencyScore}%`, color: "var(--green)" },
              { label: "Streak", value: "3 days", color: "var(--accent)" },
              { label: "Actions done", value: `${completedActions.length}/${MOCK_ACTIONS.length}`, color: "var(--text)" },
            ].map((stat, i) => (
              <div key={i} className="card p-4 text-center">
                <p className="font-display text-2xl font-semibold" style={{ color: stat.color }}>
                  {stat.value}
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Active Goal Card */}
            <div className="card p-6">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide mb-1" style={{ color: "var(--text-muted)" }}>
                    Active Goal
                  </p>
                  <h2 className="font-display text-lg font-semibold" style={{ color: "var(--text)" }}>
                    {MOCK_GOAL.title}
                  </h2>
                </div>
                <span
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ background: "rgba(134,239,172,0.1)", color: "var(--green)" }}
                >
                  Active
                </span>
              </div>

              <p className="text-sm mb-5" style={{ color: "var(--text-muted)" }}>
                {MOCK_GOAL.plan.clarity}
              </p>

              {/* Progress bar */}
              <div className="mb-5">
                <div className="flex justify-between text-xs mb-2" style={{ color: "var(--text-muted)" }}>
                  <span>Progress</span>
                  <span style={{ color: "var(--accent)" }}>{progress}%</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${progress}%`, background: "linear-gradient(90deg, #f59e0b, #fbbf24)" }}
                  />
                </div>
              </div>

              {/* Milestones */}
              <div className="space-y-2">
                {MOCK_GOAL.plan.milestones.map((m, i) => (
                  <div key={m.id} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                      style={{
                        background: i === 0 ? "var(--accent)" : "var(--bg-elevated)",
                        color: i === 0 ? "#0c0a09" : "var(--text-subtle)",
                        border: i === 0 ? "none" : "1px solid var(--border)",
                      }}
                    >
                      {i === 0 ? "✓" : i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium" style={{ color: i === 0 ? "var(--text)" : "var(--text-muted)" }}>
                        {m.title}
                      </p>
                    </div>
                    <span className="text-xs" style={{ color: "var(--text-subtle)" }}>
                      Wk {m.weekNumber}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Today's Action */}
            <div className="card p-6">
              <p className="text-xs font-medium uppercase tracking-wide mb-4" style={{ color: "var(--text-muted)" }}>
                Today's Focus
              </p>

              {/* Energy selector */}
              <div className="flex gap-2 mb-5">
                {(["low", "medium", "high"] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setEnergyLevel(level)}
                    className="flex-1 py-2 rounded-lg text-xs font-medium capitalize transition-all"
                    style={{
                      background: energyLevel === level ? "var(--accent-dim)" : "var(--bg-elevated)",
                      color: energyLevel === level ? "var(--accent)" : "var(--text-muted)",
                      border: `1px solid ${energyLevel === level ? "rgba(251,191,36,0.3)" : "var(--border)"}`,
                    }}
                  >
                    {level === "low" ? "😴" : level === "medium" ? "⚡" : "🔥"} {level}
                  </button>
                ))}
              </div>

              <div
                className="rounded-xl p-4 mb-4"
                style={{ background: "var(--accent-glow)", border: "1px solid rgba(251,191,36,0.15)" }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span>{ACTION_ICONS[todayAction.type]}</span>
                  <p className="text-xs font-medium" style={{ color: "var(--accent)" }}>
                    {todayAction.type.toUpperCase()} · {formatDuration(todayAction.durationMinutes)}
                  </p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
                  {todayAction.action}
                </p>
              </div>

              <button
                onClick={() =>
                  setCompletedActions((prev) =>
                    prev.includes(todayAction.day)
                      ? prev.filter((d) => d !== todayAction.day)
                      : [...prev, todayAction.day]
                  )
                }
                className="w-full py-3 rounded-xl text-sm font-medium transition-all"
                style={
                  completedActions.includes(todayAction.day)
                    ? { background: "rgba(134,239,172,0.1)", color: "var(--green)", border: "1px solid rgba(134,239,172,0.2)" }
                    : { background: "var(--accent)", color: "#0c0a09" }
                }
              >
                {completedActions.includes(todayAction.day) ? "✓ Completed!" : "Mark as done →"}
              </button>

              {/* Adaptation message */}
              <div
                className="mt-4 p-3 rounded-lg text-xs"
                style={{ background: "var(--bg-elevated)", color: "var(--text-muted)" }}
              >
                <span style={{ color: "var(--text-subtle)" }}>Mounta says: </span>
                {adapted.encouragement}
              </div>
            </div>
          </div>

          {/* AI Plan Generator */}
          <div className="card p-6 mt-6">
            <p className="text-xs font-medium uppercase tracking-wide mb-2" style={{ color: "var(--text-muted)" }}>
              AI Plan Generator
            </p>
            <h3 className="font-display text-lg font-semibold mb-4" style={{ color: "var(--text)" }}>
              Generate a plan for a new goal
            </h3>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder='e.g. "Launch a Shopify store selling vintage prints"'
                value={goalInput}
                onChange={(e) => setGoalInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleGeneratePlan()}
                className="flex-1 px-4 py-3 text-sm"
              />
              <button
                onClick={handleGeneratePlan}
                disabled={isGenerating || !goalInput.trim()}
                className="btn-primary whitespace-nowrap"
                style={{ opacity: isGenerating || !goalInput.trim() ? 0.5 : 1 }}
              >
                {isGenerating ? "Generating..." : "Generate →"}
              </button>
            </div>
            <p className="text-xs mt-2" style={{ color: "var(--text-subtle)" }}>
              Requires ANTHROPIC_API_KEY or OPENAI_API_KEY in environment variables.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
