import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import otpStore from "@/app/utils/otpstore";

export const runtime = "nodejs"; // ensure Node runtime so process.env works and Supabase client can be used

const supabaseUrl = "https://fqvnthjeclpjuvbhfrfn.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; 
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req) {
  try {
    const { email, otp } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email not provided" }, { status: 400 });
    }

    const storedData = await otpStore.get(email);

    if (!storedData) {
      return NextResponse.json({ error: "OTP Expired or Not Found" }, { status: 403 });
    }

    const { OTP, expiresAt } = storedData;

    if (Date.now() > expiresAt) {
      await otpStore.delete(email);
      return NextResponse.json({ error: "OTP has expired. Please request a new one." }, { status: 403 });
    }

    if (String(otp) !== String(OTP)) {
      return NextResponse.json({ error: "Invalid OTP" }, { status: 403 });
    }

    // OTP validated — remove stored OTP
    otpStore.delete(email);

    // Download file directly from Supabase Storage 
    const fileName = "contacts.xlsx";
    const bucket = "rrbuilder-contacts"; // ensure this bucket exists and service role key has access

    const { data, error } = await supabase.storage.from(bucket).download(fileName);

    if (error) {
      if (error.status === 404) {
        return NextResponse.json({ error: "File Not Found" }, { status: 404 });
      }
      console.error("Supabase download error:", error);
      return NextResponse.json({ error: "Failed to download file" }, { status: 500 });
    }

    // Convert downloaded data to a Buffer and return as attachment
    const arrayBuffer = await data.arrayBuffer();
    const fileBuffer = Buffer.from(arrayBuffer);

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        "Content-Disposition": 'attachment; filename="contacts.xlsx"',
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });
  } catch (error) {
    console.error("Download Error:", error);
    return NextResponse.json({ error: "Error processing request" }, { status: 500 });
  }
}
