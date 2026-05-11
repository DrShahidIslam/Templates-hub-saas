import { validateEvent } from '@polar-sh/sdk/webhooks';
import { NextResponse } from 'next/server';
import { addPremiumUser } from '@/lib/db';

/**
 * api/webhooks/polar/route.ts
 * 
 * Secure webhook endpoint for Polar.sh events.
 * Handles 'order.created' to grant lifetime access.
 */

export async function POST(request: Request) {
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

    // 4. Handle relevant events with strict validation
    if (event.type === 'order.created') {
      const order = event.data as any;
      
      const isCorrectProduct = order.product_id === process.env.POLAR_PRODUCT_ID;
      const isPaid = order.status === 'paid';
      const isUSD = order.currency === 'usd';

      if (isCorrectProduct && isPaid && isUSD) {
        const customerEmail = order.customer_email || order.customer?.email || order.user_email;
        if (customerEmail) {
          console.log(`🚀 Granting Pro access to: ${customerEmail}`);
          await addPremiumUser(customerEmail, order.id);
        }
      } else {
        console.warn(`⚠️ Invalid order payload received: product=${order.product_id}, status=${order.status}, currency=${order.currency}`);
      }
    }

    if (event.type === 'subscription.created') {
      const sub = event.data as any;
      
      const isCorrectProduct = sub.product_id === process.env.POLAR_PRODUCT_ID;
      const isUSD = sub.currency === 'usd';
      // For subscriptions, status might be 'active'
      const isActive = sub.status === 'active';

      if (isCorrectProduct && isUSD && isActive) {
        const customerEmail = sub.customer_email || sub.customer?.email || sub.user_email;
        if (customerEmail) {
          await addPremiumUser(customerEmail, sub.id);
        }
      }
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('❌ Webhook verification failed:', error.message || error);
    return new NextResponse(`Invalid signature: ${error.message || 'Verification Failed'}`, { status: 401 });
  }
}
