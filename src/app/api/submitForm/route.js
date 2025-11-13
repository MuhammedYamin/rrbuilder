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
    // read form payload
    const formData = await req.json();

    const fileName = process.env.CONTACTS_FILE_NAME || "contacts.xlsx";
    const bucket = process.env.CONTACTS_BUCKET || "rrbuilder-contacts";

    // create workbook instance
    const workbook = new ExcelJS.Workbook();

    // Try to download existing file from Supabase Storage.
    // If it exists, load it so we can append a row. If not (404), create a new workbook with headers.
    let existingFile = null;
    try {
      const { data, error } = await supabase.storage.from(bucket).download(fileName);
      if (error && error.status && error.status !== 404) {
        // permission/other error — rethrow so caller can see it
        throw error;
      }
      existingFile = data || null;
    } catch (downloadErr) {
      // If download threw an error that isn't a plain 404, rethrow.
      // (supabase client sometimes returns StorageUnknownError wrapped)
      if (downloadErr?.status && downloadErr.status !== 404) throw downloadErr;
      existingFile = null;
    }

    if (existingFile) {
      // load workbook from downloaded file buffer
      const arr = await existingFile.arrayBuffer();
      await workbook.xlsx.load(Buffer.from(arr));
    } else {
      // new workbook with header row
      const ws = workbook.addWorksheet("Contacts");
      ws.addRow(["Name", "Phone", "Project", "Message", "Date"]);
    }

    // append new row
    const worksheet = workbook.getWorksheet("Contacts") || workbook.worksheets[0];
    worksheet.addRow([
      formData.name || "",
      formData.phone || "",
      formData.project || "",
      formData.message || "",
      new Date().toLocaleString(),
    ]);

    // write workbook to an in-memory buffer
    const buffer = await workbook.xlsx.writeBuffer();

    // ensure Node Buffer is used for upload
    const uploadBody = Buffer.isBuffer(buffer) ? buffer : Buffer.from(buffer);
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

    // upload (upsert = overwrite existing file; creates file if it doesn't exist)
    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(fileName, uploadBody, {
        contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        upsert: true,
      });

    if (uploadError) {
      console.error("Supabase upload error:", uploadError);
      throw uploadError;
    }

    return NextResponse.json({ message: "Form submitted and saved." }, { status: 200 });
  } catch (error) {
    console.error("Error saving form data:", error);
    return NextResponse.json({ error: "Failed to save form data." }, { status: 500 });
  }
}