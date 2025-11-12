import { NextResponse } from "next/server";
import ExcelJS from "exceljs";
import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

export const runtime = "nodejs";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;


const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req) {
  try {
    const formData = await req.json();

    const fileName = `contacts.xlsx`;
    const bucket = 'rrbuilder-contacts';

    // Create a fresh workbook with the new contact
    let workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Contacts");
    worksheet.addRow(["Name", "Phone", "Project", "Message", "Date"]);
    
    worksheet.addRow([
      formData.name,
      formData.phone,
      formData.project,
      formData.message,
      new Date().toLocaleString(),
    ]);

    const buffer = await workbook.xlsx.writeBuffer();

    // Send notification email
    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT) || 465,
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"RR Builder Contact Form" <${process.env.EMAIL_USERNAME}>`,
      to: "4al21is032@gmail.com",
      subject: "Great News! A Potential Client Just Reached Out",
      html: `
        <p>Hello,</p>
        <p>You've just received a new contact inquiry!</p>
        <table border="0" cellpadding="5" cellspacing="0">
          <tr><td><strong>Name:</strong></td><td>${formData.name}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${formData.phone}</td></tr>
          <tr><td><strong>Project:</strong></td><td>${formData.project}</td></tr>
          <tr><td><strong>Message:</strong></td><td>${formData.message}</td></tr>
          <tr><td><strong>Date:</strong></td><td>${new Date().toLocaleString()}</td></tr>
        </table>
        <p>Best regards,<br>RR Builder</p>
      `,
    });

    // Upload file to Supabase Storage (overwrites previous with upsert: true)
    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(fileName, buffer, {
        contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        upsert: true,
      });

    if (uploadError) {
      console.error("Upload error:", uploadError);
      throw uploadError;
    }

    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("\nERROR in submitForm:", {
      message: error?.message,
      code: error?.code,
      status: error?.status,
    });
    return NextResponse.json(
      { error: error?.message || "Failed to save form data." },
      { status: 500 }
    );
  }
}
