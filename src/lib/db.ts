import { neon } from '@neondatabase/serverless';

/**
 * lib/db.ts
 * 
 * Neon Serverless Postgres integration for premium user management.
 */

// Lazy initialization to prevent Next.js static build crashes
const getDb = () => {
  if (!process.env.DATABASE_URL) {
    if (process.env.NODE_ENV === 'production') {
      console.warn('DATABASE_URL is not defined. Database operations will fail.');
    }
    // Return a dummy client that throws during execution, not during module load
    return Object.assign(() => { throw new Error('DATABASE_URL is not defined.'); }, {
      transaction: () => { throw new Error('DATABASE_URL is not defined.'); }
    }) as any;
  }
  return neon(process.env.DATABASE_URL);
};

/**
 * Initialize the database table for premium users.
 * Should be called once or during a migration step.
 */
export async function initDatabase() {
  try {
    const sql = getDb();
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
    const sql = getDb();
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
    const sql = getDb();
    await sql`
      INSERT INTO premium_users (email, polar_order_id) VALUES (${email.toLowerCase()}, ${polarOrderId}) ON CONFLICT (email) DO NOTHING
    `;
    console.log(`💎 Added premium user: ${email}`);
  } catch (error) {
    console.error('❌ Error adding premium user:', error);
    throw error;
  }
}
