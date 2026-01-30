import { NextResponse } from "next/server";

export async function POST() {
  // 🚨 Build-safe guard
  if (!process.env.CLERK_SECRET_KEY) {
    return NextResponse.json(
      { error: "Auth service not configured" },
      { status: 501 }
    );
  }

  // Lazy import Clerk
  const { auth } = await import("@clerk/nextjs/server");

  // ✅ auth() IS ASYNC in Clerk v5
  const session = await auth();
  const userId = session.userId ?? null;

  return NextResponse.json({
    success: true,
    userId,
  });
}
