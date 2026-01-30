import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Placeholder Stripe response (safe for build)
    return NextResponse.json({
      success: true,
      message: "Stripe endpoint ready",
      plan: body?.plan ?? null,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
