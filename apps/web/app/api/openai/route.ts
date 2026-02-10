import OpenAI from "openai";
import { NextResponse } from "next/server";

/**
 * Runtime:
 * - nodejs is required for the OpenAI SDK
 * - NOT edge
 */
export const runtime = "nodejs";

/**
 * Force dynamic rendering (API route)
 */
export const dynamic = "force-dynamic";

/**
 * OpenAI client
 * Make sure OPENAI_API_KEY is set in:
 * - .env.local (local)
 * - Vercel → Project Settings → Environment Variables
 */
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * POST /api/openai
 * Body: { prompt: string }
 */
export async function POST(req: Request) {
  try {
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
