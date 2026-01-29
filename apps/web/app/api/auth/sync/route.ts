import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { clerkClient } from "@clerk/nextjs/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ ok: false });
  }

  const client = await clerkClient();

  const user = await client.users.getUser(userId);
  const subscriptionId = user.publicMetadata?.stripeSubscriptionId;

  if (!subscriptionId) {
    return NextResponse.json({ ok: true });
  }

  const subscription = await stripe.subscriptions.retrieve(
    subscriptionId as string
  );

  const active =
    subscription.status === "active" ||
    subscription.status === "trialing";

  if (!active) {
    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        plan: "free",
      },
    });
  }

  return NextResponse.json({ ok: true });
}