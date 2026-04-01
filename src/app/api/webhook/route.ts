import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/db";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json(
      { error: "Webhook signature verification failed" },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata = session.metadata;

    if (metadata?.type === "ticket") {
      await prisma.ticketPurchase.update({
        where: { stripeSessionId: session.id },
        data: { status: "completed" },
      });
    } else if (metadata?.type === "donation") {
      await prisma.donation.update({
        where: { stripeSessionId: session.id },
        data: { status: "completed" },
      });
    }
  }

  if (event.type === "checkout.session.expired") {
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata = session.metadata;

    if (metadata?.type === "ticket") {
      await prisma.ticketPurchase.update({
        where: { stripeSessionId: session.id },
        data: { status: "failed" },
      });
    } else if (metadata?.type === "donation") {
      await prisma.donation.update({
        where: { stripeSessionId: session.id },
        data: { status: "failed" },
      });
    }
  }

  return NextResponse.json({ received: true });
}
