import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import otpStore from "@/app/utils/otpStore";

export async function POST(req) {
  try {
    const { email, otp } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email not provided" },
        { status: 400 },
      );
    }

    const storedData = otpStore.get(email);

    if (!storedData) {
      return NextResponse.json(
        { error: "OTP Expired or Not Found" },
        { status: 403 },
      );
    }

    const { OTP, expiresAt } = storedData;

    if (Date.now() > expiresAt) {
      otpStore.delete(email);
      return NextResponse.json(
        { error: "OTP has expired. Please request a new one." },
        { status: 403 },
      );
    }

    if (String(otp) !== String(OTP)) {
      return NextResponse.json({ error: "Invalid OTP" }, { status: 403 });
    }

    otpStore.delete(email);

    const filePath = path.join(process.cwd(), "private", "contacts.xlsx");

    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "File Not Found" }, { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        "Content-Disposition": "attachment; filename=contacts.xlsx",
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });
  } catch (error) {
    console.error("Download Error:", error);
    return NextResponse.json(
      { error: "Error processing request" },
      { status: 500 },
    );
  }
}
