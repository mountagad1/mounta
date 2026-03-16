import { NextRequest, NextResponse } from "next/server";
import { GOAL_DECOMPOSITION_PROMPT } from "@/lib/mounta-engine";

export async function POST(req: NextRequest) {
  try {
    const { goal } = await req.json();
    if (!goal) return NextResponse.json({ error: "Goal required" }, { status: 400 });

    const apiKey = process.env.OPENAI_API_KEY || process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      // Return mock plan for demo
      return NextResponse.json({ plan: getMockPlan(goal) });
    }

    let plan;

    if (process.env.ANTHROPIC_API_KEY) {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: "claude-3-5-haiku-20241022",
          max_tokens: 2000,
          system: GOAL_DECOMPOSITION_PROMPT,
          messages: [{ role: "user", content: `My goal: ${goal}` }],
        }),
      });
      const data = await res.json();
      const text = data.content[0].text;
      plan = JSON.parse(text.replace(/```json|```/g, "").trim());
    } else if (process.env.OPENAI_API_KEY) {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: GOAL_DECOMPOSITION_PROMPT },
            { role: "user", content: `My goal: ${goal}` },
          ],
          response_format: { type: "json_object" },
        }),
      });
      const data = await res.json();
      plan = JSON.parse(data.choices[0].message.content);
    }

    return NextResponse.json({ plan });
  } catch (err) {
    console.error("Plan error:", err);
    return NextResponse.json({ error: "Failed to generate plan" }, { status: 500 });
  }
}

function getMockPlan(goal: string) {
  return {
    goal,
    clarity: "A focused 6-week execution plan to achieve your goal step by step.",
    milestones: [
      { id: "m1", title: "Foundation", description: "Research and define your direction", weekNumber: 1, steps: ["Research the landscape", "Define your unique angle", "Set clear success metrics"] },
      { id: "m2", title: "Build", description: "Create your first tangible output", weekNumber: 3, steps: ["Draft your first version", "Gather feedback", "Iterate and improve"] },
      { id: "m3", title: "Launch", description: "Share with the world", weekNumber: 5, steps: ["Publish and distribute", "Measure results", "Plan next iteration"] },
    ],
    dailyActions: Array.from({ length: 14 }, (_, i) => ({
      day: i + 1,
      action: `Day ${i + 1}: Action for your goal`,
      milestone: i < 4 ? "m1" : i < 10 ? "m2" : "m3",
      durationMinutes: 30,
      type: ["research", "create", "review", "practice"][i % 4],
    })),
    estimatedWeeks: 6,
  };
}
