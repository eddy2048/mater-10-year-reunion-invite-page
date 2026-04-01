import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { amount, email, name } = body;

    if (!amount || amount < 100) {
      return NextResponse.json(
        { error: "Minimum donation is $1.00" },
        { status: 400 }
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      ...(email ? { customer_email: email } : {}),
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Donation — Mater 2016 Reunion",
              description: "Thank you for supporting the reunion!",
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      metadata: {
        type: "donation",
        donorName: name || "Anonymous",
        donorEmail: email || "",
      },
      success_url: `${baseUrl}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/donate`,
    });

    // Record the pending donation
    await prisma.donation.create({
      data: {
        email: email || null,
        name: name || null,
        amount,
        method: "stripe",
        stripeSessionId: session.id,
        status: "pending",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Donation checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create donation session." },
      { status: 500 }
    );
  }
}
