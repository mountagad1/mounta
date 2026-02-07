import OpenAI from "openai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: prompt
  });

  return NextResponse.json({
    output: response.output_text
  });
}
import OpenAI from "openai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: prompt
  });

  return NextResponse.json({
    output: response.output_text
  });
}

