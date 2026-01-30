import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // 🚨 Build-safe guard
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Stripe is not configured" },
      { status: 501 }
    );
  }

  // Lazy import (build-safe)
  const Stripe = (await import("stripe")).default;

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const { plan } = await req.json();

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        price: "price_placeholder",
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing`,
  });

  return NextResponse.json({ url: session.url });
}
