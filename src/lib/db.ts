import { neon } from '@neondatabase/serverless';

/**
 * lib/db.ts
 * 
 * Neon Serverless Postgres integration for premium user management.
 */

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in environment variables.');
}

const sql = neon(process.env.DATABASE_URL);

/**
 * Initialize the database table for premium users.
 * Should be called once or during a migration step.
 */
export async function initDatabase() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS premium_users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        polar_order_id VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;
    console.log('✅ Database initialized: premium_users table ready.');
  } catch (error) {
    console.error('❌ Failed to initialize database:', error);
    throw error;
  }
}

/**
 * Check if a user is premium by their email.
 */
export async function isUserPremium(email: string): Promise<boolean> {
  if (!email) return false;
  
  try {
    const result = await sql`SELECT id FROM premium_users WHERE email = ${email.toLowerCase()}`;
    return result.length > 0;
  } catch (error) {
    console.error('❌ Error checking premium status:', error);
    return false;
  }
}

/**
 * Add a new premium user to the database.
 */
export async function addPremiumUser(email: string, polarOrderId: string) {
  try {
    await sql`
      INSERT INTO premium_users (email, polar_order_id) VALUES (${email.toLowerCase()}, ${polarOrderId}) ON CONFLICT (email) DO NOTHING
    `;
    console.log(`💎 Added premium user: ${email}`);
  } catch (error) {
    console.error('❌ Error adding premium user:', error);
    throw error;
  }
}
