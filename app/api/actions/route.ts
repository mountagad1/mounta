import { NextRequest, NextResponse } from "next/server";
import { DAILY_ACTION_PROMPT } from "@/lib/mounta-engine";

export async function POST(req: NextRequest) {
  try {
    const { goalTitle, completedDays = 0, energyLevel = "medium", minutesAvailable = 30 } = await req.json();

    const apiKey = process.env.ANTHROPIC_API_KEY || process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        action: {
          action: "Review your goal and write down 3 things you can do this week",
          durationMinutes: 20,
          type: "review",
          why: "Clarity drives execution",
        },
      });
    }

    const prompt = DAILY_ACTION_PROMPT(goalTitle, completedDays, energyLevel, minutesAvailable);

    let action;
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
          max_tokens: 300,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = await res.json();
      action = JSON.parse(data.content[0].text.replace(/```json|```/g, "").trim());
    }

    return NextResponse.json({ action });
  } catch (err) {
    return NextResponse.json({ error: "Failed to generate action" }, { status: 500 });
  }
}
