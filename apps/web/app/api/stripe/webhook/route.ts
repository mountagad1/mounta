import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const body = await req.text();

  const headersList = await headers();
  const signature = headersList.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 }
    );
  }

  // Placeholder webhook handling (safe for build)
  return NextResponse.json({ received: true });
}
