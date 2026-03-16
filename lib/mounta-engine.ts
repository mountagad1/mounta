// lib/mounta-engine.ts
// Core AI execution engine for Mounta

export interface GoalPlan {
  goal: string;
  clarity: string;
  milestones: Milestone[];
  dailyActions: DailyAction[];
  estimatedWeeks: number;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  weekNumber: number;
  steps: string[];
}

export interface DailyAction {
  day: number;
  action: string;
  milestone: string;
  durationMinutes: number;
  type: "research" | "create" | "review" | "practice" | "connect";
}

export interface ConsistencyData {
  plannedActions: number;
  completedActions: number;
  streakDays: number;
  lastActiveDate: string;
}

export interface AdaptedPlan {
  message: string;
  adjustedActions: DailyAction[];
  encouragement: string;
}

// System prompt for goal decomposition
export const GOAL_DECOMPOSITION_PROMPT = `You are an execution strategist and calm AI partner.

Your job is to convert a user's goal into a structured, realistic execution plan.

Rules:
- Focus on realism. 1-2 actions per day maximum.
- No overwhelming plans. Progress > perfection.
- Each action should take 15-45 minutes.
- Think in milestones of 1-2 weeks each.
- Tone: calm, supportive, focused.

Return ONLY valid JSON in this exact structure:
{
  "goal": "cleaned up goal title",
  "clarity": "one sentence explaining the goal simply",
  "milestones": [
    {
      "id": "m1",
      "title": "Milestone title",
      "description": "what this achieves",
      "weekNumber": 1,
      "steps": ["step 1", "step 2", "step 3"]
    }
  ],
  "dailyActions": [
    {
      "day": 1,
      "action": "Specific action to take today",
      "milestone": "m1",
      "durationMinutes": 30,
      "type": "research"
    }
  ],
  "estimatedWeeks": 6
}`;

// Daily action generator prompt
export const DAILY_ACTION_PROMPT = (
  goal: string,
  completedDays: number,
  energyLevel: "low" | "medium" | "high",
  minutesAvailable: number
) => `You are a proactive AI execution partner.

Goal: ${goal}
Days completed: ${completedDays}
Energy level today: ${energyLevel}
Time available: ${minutesAvailable} minutes

Generate exactly ONE meaningful daily action that:
- Matches the energy level (low = easy, review task; high = creative/challenging)
- Fits within the time available
- Builds on previous progress
- Feels achievable and specific

Return ONLY JSON:
{
  "action": "specific action",
  "durationMinutes": 25,
  "type": "create",
  "why": "short reason this matters today"
}`;

// Consistency score calculator
export function calculateConsistencyScore(data: ConsistencyData): number {
  if (data.plannedActions === 0) return 0;
  const baseScore = (data.completedActions / data.plannedActions) * 100;
  const streakBonus = Math.min(data.streakDays * 2, 20);
  return Math.min(Math.round(baseScore + streakBonus), 100);
}

// Adaptive planning when user misses days
export function adaptPlan(
  missedDays: number,
  remainingActions: DailyAction[]
): AdaptedPlan {
  let message = "";
  let encouragement = "";
  let adjustedActions = [...remainingActions];

  if (missedDays === 0) {
    return {
      message: "You're on track. Keep going.",
      adjustedActions,
      encouragement: "Consistency is your superpower.",
    };
  }

  if (missedDays <= 2) {
    message = "You missed a couple days. That's okay.";
    encouragement = "Start fresh today. One action is all it takes.";
    // Reduce next 3 days to single lightweight actions
    adjustedActions = adjustedActions.map((a, i) =>
      i < 3 ? { ...a, durationMinutes: Math.min(a.durationMinutes, 20) } : a
    );
  } else if (missedDays <= 7) {
    message = "You've been away for a week.";
    encouragement = "The goal is still yours. Let's recalibrate.";
    // Simplify next week
    adjustedActions = adjustedActions
      .slice(0, 7)
      .map((a) => ({ ...a, durationMinutes: 15 }));
  } else {
    message = "It's been a while. Let's restart with intention.";
    encouragement = "Progress isn't lost. Momentum just needs restarting.";
    // Reset to first 5 actions, simplified
    adjustedActions = adjustedActions
      .slice(0, 5)
      .map((a) => ({ ...a, durationMinutes: 15 }));
  }

  return { message, adjustedActions, encouragement };
}

// Action type icons
export const ACTION_ICONS: Record<DailyAction["type"], string> = {
  research: "🔍",
  create: "✍️",
  review: "👁",
  practice: "🔁",
  connect: "🤝",
};

// Format duration
export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}
