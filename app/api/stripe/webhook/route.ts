import { NextResponse } from "next/server";
import Stripe from "stripe";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: Request) {
  try {
    // Read the raw body once
    const body = await request.text();
    const signature = (await headers()).get("stripe-signature");

    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: unknown) {
      console.log("Error in constructEvent", err);
      return NextResponse.json(
        { error: `Webhook Error: ${(err as Error).message}` },
        { status: 400 }
      );
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      // console.log("session", session);
      const customerId = session.customer as string;
      const subscriptionId = session.subscription as string;
      const userId = session.metadata?.user_id; // Get user_id from metadata

      if (!userId) {
        return NextResponse.json(
          { error: "Missing user_id in metadata" },
          { status: 400 }
        );
      }

      const subscription = await stripe.subscriptions.retrieve(subscriptionId);
      const itemId = subscription.items.data[0].id;

      // Update Supabase
      const supabase = await createClient(); // No need to await here
      const { error } = await supabase
        .from("API_KEY")
        .update({
          customer_id: customerId,
          item_id: itemId,
        })
        .eq("user_id", userId);

      if (error) {
        console.log("Supabase update error:", error);
        return NextResponse.json(
          { error: "Failed to update API key" },
          { status: 500 }
        );
      }

      console.log(`Updated user ${userId} with customer ${customerId}`);
    }

    return NextResponse.json({ received: true });
  } catch (err: unknown) {
    console.error("Webhook processing error:", err);
    return NextResponse.json(
      { error: `Internal server error: ${(err as Error).message}` },
      { status: 500 }
    );
  }
}
