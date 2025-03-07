import { NextResponse } from "next/server";
import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-02-24.acacia",
});

interface PaymentIntentRequest {
  amount: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export async function POST(request: Request) {
  try {
    const body: PaymentIntentRequest = await request.json();
    const { amount, firstName, lastName, email, phone } = body;

    // Create a PaymentIntent with the donation amount and customer information
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      receipt_email: email,
      metadata: {
        firstName,
        lastName,
        phone: phone || "",
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return NextResponse.json(
      { error: "Error creating payment intent" },
      { status: 500 }
    );
  }
}
