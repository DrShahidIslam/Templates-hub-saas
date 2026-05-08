"use server";

import { isUserPremium, initDatabase } from "@/lib/db";

/**
 * actions.ts
 * 
 * Server Actions for secure premium verification and data management.
 */

/**
 * Checks if an email exists in the premium_users database.
 */
export async function checkPremiumStatus(email: string): Promise<boolean> {
  if (!email) return false;
  return await isUserPremium(email);
}

/**
 * Helper to ensure the database table is ready.
 * Can be triggered from a hidden admin panel or during initial deployment.
 */
export async function setupDatabase() {
  await initDatabase();
}
