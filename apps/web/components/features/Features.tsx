import FeatureCard from "@/components/features/FeatureCard";
import {
  Sparkles,
  Target,
  Zap,
  BarChart3,
  Lock,
} from "lucide-react";

/**
 * Centralized feature definition
 * (easy to reorder / A-B test / localize later)
 */
const FEATURES = [
  {
    key: "ai",
    title: "AI Coaching",
    description:
      "Get personalized insights and guidance powered by AI to stay consistent.",
    icon: <Sparkles size={28} />,
    pro: true,
  },
  {
    key: "goals",
    title: "Goal Tracking",
    description:
      "Track progress, stay motivated, and achieve your goals step by step.",
    icon: <Target size={28} />,
    pro: false,
  },
  {
    key: "automation",
    title: "Automation",
    description:
      "Automate routines so you can focus on what really matters.",
    icon: <Zap size={28} />,
    pro: true,
  },
  {
    key: "analytics",
    title: "Advanced Analytics",
    description:
      "Understand patterns and optimize your habits with deep insights.",
    icon: <BarChart3 size={28} />,
    pro: true,
  },
];

type FeaturesProps = {
  /**
   * Optional:
   * - "all" → show everything
   * - "free" → hide pro-only features
   * - "locked" → show pro features as locked (dashboard UX)
   */
  variant?: "all" | "free" | "locked";
};

export default function Features({
  variant = "all",
}: FeaturesProps) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {FEATURES.filter((f) => {
        if (variant === "free") return !f.pro;
        return true;
      }).map((feature) => {
        const isLocked =
          variant === "locked" && feature.pro;

        return (
          <FeatureCard
            key={feature.key}
            title={feature.title}
            description={feature.description}
            icon={isLocked ? <Lock size={28} /> : feature.icon}
            highlight={feature.pro}
          />
        );
      })}
    </div>
  );
}
