import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/db";
import { getTicketPrice } from "@/lib/ticket-price";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, quantity } = body;

    if (!email || !name) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    if (quantity !== 1 && quantity !== 2) {
      return NextResponse.json(
        { error: "You can purchase 1 or 2 tickets." },
        { status: 400 }
      );
    }

    const priceInCents = await getTicketPrice();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Mater 2016 Reunion Ticket",
              description: `${quantity} ticket(s) for the Class of 2016 reunion on June 6, 2026`,
            },
            unit_amount: priceInCents,
          },
          quantity,
        },
      ],
      metadata: {
        type: "ticket",
        buyerName: name,
        buyerEmail: email,
        quantity: String(quantity),
      },
      success_url: `${baseUrl}/tickets/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/tickets/canceled`,
    });

    // Record the pending purchase
    await prisma.ticketPurchase.create({
      data: {
        email,
        name,
        quantity,
        totalAmount: priceInCents * quantity,
        stripeSessionId: session.id,
        status: "pending",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session." },
      { status: 500 }
    );
  }
}
