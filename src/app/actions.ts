"use server";

import { isUserPremium, initDatabase, setOTP, verifyOTP, clearOTP, addPremiumUser, incrementOTPAttempts, resetOTPAttempts, getUser } from "@/lib/db";
import { cookies } from "next/headers";
import { Resend } from "resend";
import { Polar } from "@polar-sh/sdk";
import { SignJWT, jwtVerify } from "jose";
import crypto from "crypto";

const resend = new Resend(process.env.RESEND_API_KEY);
const polar = new Polar({ accessToken: process.env.POLAR_ACCESS_TOKEN });

/**
 * actions.ts
 * 
 * Server Actions for secure premium verification and data management.
 */

if (!process.env.JWT_SECRET) {
  throw new Error("CRITICAL: JWT_SECRET environment variable is missing.");
}
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

async function signSessionToken(email: string) {
  return await new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10y")
    .sign(JWT_SECRET);
}

async function verifySessionToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload.email as string;
  } catch (e) {
    return null;
  }
}

/**
 * Checks if the current session is premium.
 * Strictly reads the secure 'premium_session' JWT cookie.
 */
export async function checkPremiumStatus(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get("premium_session")?.value;
  
  if (!token) return false;
  
  const email = await verifySessionToken(token);
  if (!email) return false;
  
  return await isUserPremium(email);
}

/**
 * Initiates the passwordless OTP flow by generating a 6-digit code and sending it via Resend.
 * Includes anti-enumeration protection (returns success even if email is not found).
 */
export async function sendOTPAction(email: string) {
  if (!email) return { success: false, error: "Email is required" };

  const user = await getUser(email);
  if (!user) {
    // Return fake success to prevent malicious actors from scraping our DB for valid emails
    return { success: true };
  }

  // 1-minute cooldown check
  if (user.otp_generated_at) {
    const lastGenerated = new Date(user.otp_generated_at).getTime();
    const now = Date.now();
    const diff = (now - lastGenerated) / 1000;
    if (diff < 60) {
      return { success: false, error: "Please wait 60 seconds before requesting a new code." };
    }
  }

  // Generate secure 6-digit code using crypto.randomInt
  const code = crypto.randomInt(100000, 999999).toString();
  // Hash the code before storing
  const hashedCode = crypto.createHash('sha256').update(code).digest('hex');
  
  // Expiry set to 15 minutes from now
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

  await setOTP(email, hashedCode, expiresAt);

  try {
    await resend.emails.send({
      from: "Template Registry Support <support@templateregistry.com>",
      to: email,
      subject: "Your Restore Access Code - Template Registry",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Restore Your Access</h2>
          <p>You recently requested to restore your lifetime access to the Template Registry on a new device.</p>
          <p>Your one-time password is:</p>
          <h1 style="letter-spacing: 5px; color: #4F46E5;">${code}</h1>
          <p style="color: #666; font-size: 12px;">This code will expire in 15 minutes. If you did not request this, please ignore this email.</p>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to send OTP email:", error);
    return { success: false, error: "Failed to send email. Please try again later." };
  }
}

/**
 * Verifies the 6-digit OTP code.
 * Upon success, it clears the code to prevent reuse and sets a 10-year HttpOnly cookie.
 */
export async function verifyOTPAction(email: string, code: string) {
  if (!email || !code) return { success: false, error: "Email and code are required." };

  const hashedCode = crypto.createHash('sha256').update(code).digest('hex');
  const isValid = await verifyOTP(email, hashedCode);
  
  if (!isValid) {
    await incrementOTPAttempts(email);
    return { success: false, error: "Invalid or expired code." };
  }

  // Clear OTP and reset attempts on success
  await clearOTP(email);
  await resetOTPAttempts(email);

  const token = await signSessionToken(email);

  const cookieStore = await cookies();
  cookieStore.set("premium_session", token, {
    maxAge: 60 * 60 * 24 * 365 * 10, // 10 years
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax"
  });

  return { success: true };
}

/**
 * Verifies a Polar checkout session.
 * If succeeded, it adds the user to the premium_users database (as a failsafe to webhooks)
 * and issues the secure HttpOnly premium_session cookie.
 */
export async function verifyPolarSession(sessionId: string) {
  if (!sessionId) return { success: false, error: "Session ID is required." };

  try {
    const checkout = await polar.checkouts.get({ id: sessionId });
    
    const isCorrectProduct = checkout.productId === process.env.POLAR_PRODUCT_ID;
    const isSucceeded = checkout.status === "succeeded";

    if (isCorrectProduct && isSucceeded) {
      const customerEmail = checkout.customerEmail || (checkout as any).customer?.email;
      
      if (!customerEmail) {
        return { success: false, error: "Could not retrieve email from checkout." };
      }

      // Failsafe: Add to DB immediately in case webhook is delayed
      await addPremiumUser(customerEmail, checkout.id);

      const token = await signSessionToken(customerEmail);

      // Drop secure session cookie
      const cookieStore = await cookies();
      cookieStore.set("premium_session", token, {
        maxAge: 60 * 60 * 24 * 365 * 10, // 10 years
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "lax"
      });

      return { success: true, email: customerEmail };
    } else {
      console.warn(`⚠️ Invalid session verification: product=${checkout.productId}, status=${checkout.status}`);
      return { success: false, error: "Checkout not completed or invalid product." };
    }
  } catch (error) {
    console.error("Polar session verification failed:", error);
    return { success: false, error: "Failed to verify session." };
  }
}

/**
 * Helper to ensure the database table is ready.
 * Can be triggered from a hidden admin panel or during initial deployment.
 */
export async function setupDatabase() {
  await initDatabase();
}
