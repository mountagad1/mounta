import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

/**
 * Runtime: nodejs (required for Vercel Postgres)
 */
export const runtime = "nodejs";

/**
 * POST /api/waitlist
 * Body: { email: string }
 */
export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    await sql`
      INSERT INTO waitlist (email)
      VALUES (${email})
      ON CONFLICT DO NOTHING
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
