import { NextResponse } from "next/server";
import Stripe from "stripe";
import { headers } from "next/headers";
import { clerkClient } from "@clerk/nextjs/server";

/**
 * Stripe client
 * (ne PAS fixer apiVersion)
 */
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

/**
 * Webhook secret
 */
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

/**
 * Map Stripe priceId → internal plan
 */
function mapPriceIdToPlan(priceId: string) {
  if (priceId.includes("starter")) return "starter";
  if (priceId.includes("pro")) return "pro";
  if (priceId.includes("elite")) return "elite";
  return "free";
}

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing Stripe signature" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  /**
   * Verify webhook signature
   */
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      webhookSecret
    );
  } catch (error) {
    console.error("Webhook signature verification failed:", error);
    return NextResponse.json(
      { error: "Invalid signature" },
      { status: 400 }
    );
  }

  /**
   * Stripe → Clerk client
   */
  const client = await clerkClient();

  /**
   * ✅ UPGRADE: checkout completed
   */
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const userId = session.metadata?.userId;
    const subscriptionId = session.subscription as string | null;

    if (!userId || !subscriptionId) {
      return NextResponse.json({ received: true });
    }

    const subscription = await stripe.subscriptions.retrieve(
      subscriptionId,
      { expand: ["items.data.price"] }
    );

    const priceId =
      subscription.items.data[0]?.price.id;

    if (!priceId) {
      return NextResponse.json({ received: true });
    }

    const plan = mapPriceIdToPlan(priceId);

    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        plan,
        stripeSubscriptionId: subscriptionId,
      },
    });
  }

  /**
   * ✅ DOWNGRADE: subscription deleted
   */
  if (event.type === "customer.subscription.deleted") {
    const subscription = event.data.object as Stripe.Subscription;

    const userId = subscription.metadata?.userId;
    if (!userId) {
      return NextResponse.json({ received: true });
    }

    await client.users.updateUserMetadata(userId, {
      publicMetadata: {
        plan: "free",
        stripeSubscriptionId: null,
      },
    });
  }

  return NextResponse.json({ received: true });
}
