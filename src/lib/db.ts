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

// Runtime validation for critical environment variables
if (process.env.NODE_ENV === 'production') {
  const requiredEnvs = ['DATABASE_URL', 'POLAR_WEBHOOK_SECRET', 'JWT_SECRET', 'RESEND_API_KEY'];
  requiredEnvs.forEach(env => {
    if (!process.env[env]) {
      throw new Error(`CRITICAL: Environment variable ${env} is missing.`);
    }
  });
}

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
    await sql`ALTER TABLE premium_users ADD COLUMN IF NOT EXISTS otp_code VARCHAR(128);`; // Increased length for hash
    await sql`ALTER TABLE premium_users ADD COLUMN IF NOT EXISTS otp_expires_at TIMESTAMP WITH TIME ZONE;`;
    await sql`ALTER TABLE premium_users ADD COLUMN IF NOT EXISTS otp_attempts INT DEFAULT 0;`;
    await sql`ALTER TABLE premium_users ADD COLUMN IF NOT EXISTS otp_last_attempt TIMESTAMP WITH TIME ZONE;`;
    await sql`ALTER TABLE premium_users ADD COLUMN IF NOT EXISTS otp_generated_at TIMESTAMP WITH TIME ZONE;`;
    console.log('✅ Database initialized: premium_users table ready.');
  } catch (error) {
    console.error('❌ Failed to initialize database:', error);
    throw error;
  }
}

/**
 * Check if a user is premium by their email.
 */
export async function getUser(email: string) {
  if (!email) return null;
  try {
    const sql = getDb();
    const result = await sql`SELECT * FROM premium_users WHERE email = ${email.toLowerCase()}`;
    return result[0] || null;
  } catch (error) {
    console.error('❌ Error fetching user:', error);
    return null;
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

/**
 * Set an OTP code for a user.
 */
export async function setOTP(email: string, hashedCode: string, expiresAt: Date) {
  try {
    const sql = getDb();
    await sql`
      UPDATE premium_users 
      SET otp_code = ${hashedCode}, 
          otp_expires_at = ${expiresAt.toISOString()},
          otp_generated_at = NOW(),
          otp_attempts = 0
      WHERE email = ${email.toLowerCase()}
    `;
  } catch (error) {
    console.error('❌ Error setting OTP:', error);
    throw error;
  }
}

/**
 * Verify an OTP code for a user.
 * Returns true if the code matches and has not expired.
 */
export async function verifyOTP(email: string, hashedCode: string): Promise<boolean> {
  try {
    const sql = getDb();
    const result = await sql`
      SELECT id FROM premium_users 
      WHERE email = ${email.toLowerCase()} 
        AND otp_code = ${hashedCode} 
        AND otp_expires_at > NOW()
        AND otp_attempts < 5
    `;
    return result.length > 0;
  } catch (error) {
    console.error('❌ Error verifying OTP:', error);
    return false;
  }
}

/**
 * Increment OTP attempts for a user.
 */
export async function incrementOTPAttempts(email: string) {
  try {
    const sql = getDb();
    await sql`
      UPDATE premium_users 
      SET otp_attempts = otp_attempts + 1, otp_last_attempt = NOW() 
      WHERE email = ${email.toLowerCase()}
    `;
  } catch (error) {
    console.error('❌ Error incrementing OTP attempts:', error);
  }
}

/**
 * Reset OTP attempts for a user.
 */
export async function resetOTPAttempts(email: string) {
  try {
    const sql = getDb();
    await sql`
      UPDATE premium_users 
      SET otp_attempts = 0, otp_last_attempt = NULL 
      WHERE email = ${email.toLowerCase()}
    `;
  } catch (error) {
    console.error('❌ Error resetting OTP attempts:', error);
  }
}

/**
 * Clear the OTP code for a user to prevent reuse.
 */
export async function clearOTP(email: string) {
  try {
    const sql = getDb();
    await sql`
      UPDATE premium_users 
      SET otp_code = NULL, otp_expires_at = NULL 
      WHERE email = ${email.toLowerCase()}
    `;
  } catch (error) {
    console.error('❌ Error clearing OTP:', error);
  }
}
