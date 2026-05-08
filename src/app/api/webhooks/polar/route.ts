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

  // 1. MUST read as raw text for signature verification
  const body = await request.text();
  
  // 2. Extract standard Svix/Polar webhook headers
  const webhookHeaders = {
    'webhook-id': request.headers.get('webhook-id') ?? '',
    'webhook-timestamp': request.headers.get('webhook-timestamp') ?? '',
    'webhook-signature': request.headers.get('webhook-signature') ?? '',
  };

  if (!webhookHeaders['webhook-signature']) {
    return new NextResponse('Missing signature header', { status: 401 });
  }

  const secret = process.env.POLAR_WEBHOOK_SECRET;
  if (!secret) {
    console.error('❌ POLAR_WEBHOOK_SECRET is not defined');
    return new NextResponse('Configuration error', { status: 500 });
  }

  try {
    // 3. Verify Webhook Signature strictly using mapped headers
    const event = validateEvent(body, webhookHeaders, secret);

    console.log(`🔔 Received Polar Webhook: ${event.type}`);

    // 4. Handle relevant events
    if (event.type === 'order.created') {
      const order = event.data as any;
      const customerEmail = order.customer_email || order.customer?.email || order.user_email;
      const orderId = order.id;

      if (customerEmail) {
        console.log(`🚀 Granting Pro access to: ${customerEmail}`);
        await addPremiumUser(customerEmail, orderId);
      }
    }

    if (event.type === 'subscription.created') {
      const sub = event.data as any;
      const customerEmail = sub.customer_email || sub.customer?.email || sub.user_email;
      if (customerEmail) {
        await addPremiumUser(customerEmail, sub.id);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('❌ Webhook verification failed:', error.message || error);
    return new NextResponse(`Invalid signature: ${error.message || 'Verification Failed'}`, { status: 401 });
  }
}
