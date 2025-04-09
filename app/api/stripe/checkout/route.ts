import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const SITE_URL = process.env.SITE_URL!;

export async function POST(request: Request) {
  const body = await request.json();
  const user_id = body.user_id;
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
        },
      ],
      metadata: {
        user_id: user_id,
      },
      success_url: `${SITE_URL}dashboard`,
      cancel_url: `${SITE_URL}error`,
    });
    return NextResponse.json({
      sessionId: session.id,
      paymentUrl: session.url,
    });
  } catch (error:unknown) {
    console.log("error", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
