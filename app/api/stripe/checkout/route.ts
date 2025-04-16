import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const SITE_URL = process.env.SITE_URL!;

export async function POST(request: Request) {
  const body = await request.json();
  const user_id = body.user_id;
  const credits = body.credits;
  try {
    let customerId: Stripe.Customer | string = '';
    
      const newCustomer = await stripe.customers.create();
      customerId = newCustomer.id;
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price: credits === 2500 ? process.env.STRIPE_PRICE_ID_60 : credits === 1000 ? process.env.STRIPE_PRICE_ID_20 : process.env.STRIPE_PRICE_ID_2,
          quantity: 1,
        },
      ],
      metadata: {
        user_id: user_id,
        credits: credits,
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
