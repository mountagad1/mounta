import OpenAI from "openai";
import { NextResponse } from "next/server";

/**
 * Required for OpenAI SDK
 */
export const runtime = "nodejs";

/**
 * Force dynamic execution
 */
export const dynamic = "force-dynamic";

/**
 * POST /api/openai
 * Body: { prompt: string }
 */
export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY is not set" },
        { status: 500 }
      );
    }

    // ✅ Create client INSIDE request
    const openai = new OpenAI({ apiKey });

    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const response = await openai.responses.create({
      model: "gpt-4.1-mini",
      input: prompt,
    });

    return NextResponse.json({
      output: response.output_text,
    });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
