"use server";

import { isUserPremium, initDatabase, setOTP, verifyOTP, clearOTP } from "@/lib/db";
import { cookies } from "next/headers";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * actions.ts
 * 
 * Server Actions for secure premium verification and data management.
 */

/**
 * Checks if an email exists in the premium_users database.
 * If no email is provided, it attempts to read the secure 'premium_session' cookie.
 */
export async function checkPremiumStatus(email?: string): Promise<boolean> {
  const cookieStore = await cookies();
  const sessionEmail = cookieStore.get("premium_session")?.value;
  
  const emailToCheck = email || sessionEmail;
  if (!emailToCheck) return false;
  
  return await isUserPremium(emailToCheck);
}

/**
 * Initiates the passwordless OTP flow by generating a 6-digit code and sending it via Resend.
 * Includes anti-enumeration protection (returns success even if email is not found).
 */
export async function sendOTPAction(email: string) {
  if (!email) return { success: false, error: "Email is required" };

  const isPremium = await isUserPremium(email);
  if (!isPremium) {
    // Return fake success to prevent malicious actors from scraping our DB for valid emails
    return { success: true };
  }

  // Generate secure 6-digit code
  const code = Math.floor(100000 + Math.random() * 900000).toString();
  // Expiry set to 15 minutes from now
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

  await setOTP(email, code, expiresAt);

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

  const isValid = await verifyOTP(email, code);
  
  if (!isValid) {
    return { success: false, error: "Invalid or expired code." };
  }

  // Clear OTP to prevent replay attacks
  await clearOTP(email);

  const cookieStore = await cookies();
  cookieStore.set("premium_session", email, {
    maxAge: 60 * 60 * 24 * 365 * 10, // 10 years
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax"
  });

  return { success: true };
}

/**
 * Helper to ensure the database table is ready.
 * Can be triggered from a hidden admin panel or during initial deployment.
 */
export async function setupDatabase() {
  await initDatabase();
}
