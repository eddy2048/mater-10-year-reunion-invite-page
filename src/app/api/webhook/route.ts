import { NextRequest, NextResponse } from "next/server";
import { getStripeClient } from "@/lib/stripe";
import Stripe from "stripe";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    );
  }

  if (!webhookSecret) {
    console.error("Stripe webhook secret is not configured.");
    return NextResponse.json(
      { error: "Webhook endpoint is not configured." },
      { status: 500 }
    );
  }

  let event: Stripe.Event;
  let stripe: Stripe;

  try {
    stripe = getStripeClient();
  } catch (err) {
    console.error("Stripe secret key is not configured:", err);
    return NextResponse.json(
      { error: "Payment provider is not configured." },
      { status: 500 }
    );
  }

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Webhook signature verification failed" },
      { status: 400 }
    );
  }

  // Stripe tracks payment status natively via the dashboard.
  // Log events here for observability if needed.
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    console.log(
      `Payment completed: ${session.metadata?.type ?? "unknown"} - ${session.id}`
    );
  }

  return NextResponse.json({ received: true });
}
