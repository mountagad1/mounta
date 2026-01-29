export type PlanKey = "starter" | "pro" | "elite";

export const PRICING_PLANS: {
  key: PlanKey;
  name: string;
  monthly: number;
  highlighted?: boolean;
  stripe: {
    monthly: string;
    annual: string;
  };
  features: string[];
}[] = [
  {
    key: "starter",
    name: "Starter",
    monthly: 9,
    stripe: {
      monthly: "price_starter_monthly",
      annual: "price_starter_annual",
    },
    features: ["Goal tracking", "Basic journal"],
  },
  {
    key: "pro",
    name: "Pro",
    monthly: 19,
    highlighted: true,
    stripe: {
      monthly: "price_pro_monthly",
      annual: "price_pro_annual",
    },
    features: ["AI coaching", "Insights", "Automation"],
  },
  {
    key: "elite",
    name: "Elite",
    monthly: 39,
    stripe: {
      monthly: "price_elite_monthly",
      annual: "price_elite_annual",
    },
    features: ["Everything in Pro", "Priority support", "Advanced analytics"],
  },
];
