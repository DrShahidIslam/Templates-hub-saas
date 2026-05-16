import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email, source = "Template Registry Soft Gate" } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // 1. Insert into Vercel Postgres
    // NOTE: Ensure you have created the leads table in your Vercel Postgres database:
    // CREATE TABLE leads ( id SERIAL PRIMARY KEY, email VARCHAR(255) UNIQUE NOT NULL, source VARCHAR(255), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP );
    try {
      await sql`
        INSERT INTO leads (email, source)
        VALUES (${email}, ${source})
        ON CONFLICT (email) DO NOTHING
      `;
    } catch (dbError) {
      console.error("Vercel Postgres Error:", dbError);
    }

    // 2. Add to Resend Audience
    try {
      if (process.env.RESEND_API_KEY) {
        // Fetch Audiences dynamically to get the ID
        const audiences = await resend.audiences.list();
        const audienceId = audiences.data?.data?.[0]?.id;

        if (audienceId) {
          await resend.contacts.create({
            email,
            audienceId,
          });
        } else {
          console.error("Resend Error: No audience found to add contact to.");
        }
      } else {
         console.warn("Resend API Key missing. Skipping email insertion.");
      }
    } catch (resendError) {
      console.error("Resend API Error:", resendError);
    }

    // Always return 200 OK to the frontend so the user can download their PDF
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Leads API Error:", error);
    // Return 200 even on top-level errors so as not to block PDF download
    return NextResponse.json({ success: true }, { status: 200 });
  }
}
