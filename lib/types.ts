// lib/types.ts

export interface Goal {
  id: string;
  user_id: string;
  title: string;
  description: string;
  status: "active" | "paused" | "completed" | "archived";
  plan?: GoalPlanDB;
  created_at: string;
  updated_at: string;
}

export interface GoalPlanDB {
  milestones: Array<{
    id: string;
    title: string;
    description: string;
    weekNumber: number;
    steps: string[];
  }>;
  dailyActions: Array<{
    day: number;
    action: string;
    milestone: string;
    durationMinutes: number;
    type: string;
  }>;
  estimatedWeeks: number;
  clarity: string;
}

export interface DailyActionDB {
  id: string;
  goal_id: string;
  user_id: string;
  action: string;
  day_number: number;
  completed: boolean;
  completed_at?: string;
  created_at: string;
}

export interface WaitlistEntry {
  id: string;
  email: string;
  created_at: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: { monthly: number; annual: number };
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    description: "Start executing on one goal.",
    features: [
      "1 active goal",
      "AI plan generation",
      "Daily action suggestions",
      "7-day history",
      "Email reminders",
    ],
    highlighted: false,
    cta: "Join waitlist",
  },
  {
    id: "focus",
    name: "Focus",
    price: { monthly: 12, annual: 10.8 },
    description: "For people serious about one domain.",
    features: [
      "Up to 3 active goals",
      "Adaptive replanning",
      "Consistency tracking",
      "30-day history",
      "Priority support",
      "Progress reports",
    ],
    highlighted: false,
    cta: "Join waitlist",
  },
  {
    id: "pro",
    name: "Pro",
    price: { monthly: 24, annual: 21.6 },
    description: "Full execution OS for ambitious people.",
    features: [
      "Unlimited goals",
      "Proactive AI nudges",
      "Energy-based scheduling",
      "Unlimited history",
      "Calendar integration",
      "Custom milestones",
      "API access",
    ],
    highlighted: true,
    cta: "Join waitlist",
  },
  {
    id: "lifetime",
    name: "Lifetime",
    price: { monthly: 299, annual: 299 },
    description: "One payment, forever yours.",
    features: [
      "Everything in Pro",
      "Lifetime updates",
      "Early access to features",
      "Founding member badge",
    ],
    highlighted: false,
    cta: "Join waitlist",
  },
];
