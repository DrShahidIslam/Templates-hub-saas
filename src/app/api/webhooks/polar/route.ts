import { validateEvent } from '@polar-sh/sdk/webhooks';
import { NextResponse } from 'next/server';
import { addPremiumUser, initDatabase } from '@/lib/db';

/**
 * api/webhooks/polar/route.ts
 * 
 * Secure webhook endpoint for Polar.sh events.
 * Handles 'order.created' to grant lifetime access.
 */

export async function POST(request: Request) {
  // Ensure DB is ready
  await initDatabase();

  const body = await request.text();
  const signature = request.headers.get('polar-webhook-signature');

  if (!signature) {
    return new NextResponse('Missing signature', { status: 401 });
  }

  const secret = process.env.POLAR_WEBHOOK_SECRET;
  if (!secret) {
    console.error('❌ POLAR_WEBHOOK_SECRET is not defined');
    return new NextResponse('Configuration error', { status: 500 });
  }

  try {
    // 1. Verify Webhook Signature
    const headers = Object.fromEntries(request.headers.entries());
    const event = validateEvent(body, headers, secret);

    console.log(`🔔 Received Polar Webhook: ${event.type}`);

    // 2. Handle relevant events
    // Polar sends 'order.created' for one-time purchases and initial subscription orders
    if (event.type === 'order.created') {
      const order = event.data as any;
      const customerEmail = order.customer_email || order.customer?.email || order.user_email;
      const orderId = order.id;

      if (customerEmail) {
        console.log(`🚀 Granting Pro access to: ${customerEmail}`);
        await addPremiumUser(customerEmail, orderId);
      }
    }

    // Optional: Handle subscription.created if using recurring billing
    if (event.type === 'subscription.created') {
      const sub = event.data as any;
      const customerEmail = sub.customer_email || sub.customer?.email || sub.user_email;
      if (customerEmail) {
        await addPremiumUser(customerEmail, sub.id);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('❌ Webhook verification failed:', error);
    return new NextResponse('Invalid signature', { status: 401 });
  }
}
