import { NextResponse } from "next/server";
import ExcelJS from "exceljs";
import nodemailer from "nodemailer";
import { createClient } from '@supabase/supabase-js';

export const runtime = "nodejs"; // ensure Node runtime so process.env and nodemailer/ExcelJS work

const supabaseUrl = 'https://fqvnthjeclpjuvbhfrfn.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY; 
const supabase = createClient(supabaseUrl, supabaseKey);


export async function POST(req) {
  try {
    const formData = await req.json(); 

    const fileName = `contacts.xlsx`;
    const bucket = 'rrbuilder-contacts';

    // Try to download existing file from Supabase Storage
    let workbook = new ExcelJS.Workbook();
    const { data: existingFile, error: downloadError } = await supabase.storage.from(bucket).download(fileName);

    if (downloadError && downloadError.status !== 404) {
      // unexpected error
      throw downloadError;
    }

    if (existingFile) {
      // Node.js: convert stream to buffer
      const chunks = [];
      for await (const chunk of existingFile) chunks.push(chunk);
      const fileBuffer = Buffer.concat(chunks);
      await workbook.xlsx.load(fileBuffer);
    } else {
      const worksheet = workbook.addWorksheet("Contacts");
      worksheet.addRow(["Name", "Phone", "Project", "Message", "Date"]);
    }

    const worksheet = workbook.getWorksheet("Contacts");

    worksheet.addRow([
      formData.name,
      formData.phone,
      formData.project,
      formData.message,
      new Date().toLocaleString(),
    ]);

    // write workbook to buffer (in-memory)
    const buffer = await workbook.xlsx.writeBuffer();

    // Send notification email (same as before)
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
    
        <p>You’ve just received a new contact inquiry! Someone is interested in your services.</p>
    
        <p><strong>Here are the details:</strong></p>
    
        <table border="0" cellpadding="5" cellspacing="0">
          <tr>
            <td><strong>Name:</strong></td>
            <td>${formData.name}</td>
          </tr>
          <tr>
            <td><strong>Phone:</strong></td>
            <td>${formData.phone}</td>
          </tr>
          <tr>
            <td><strong>Project of Interest:</strong></td>
            <td>${formData.project}</td>
          </tr>
          <tr>
            <td><strong>Message:</strong></td>
            <td>${formData.message}</td>
          </tr>
          <tr>
            <td><strong>Date:</strong></td>
            <td>${new Date().toLocaleString()}</td>
          </tr>
        </table>
    
        <p>This could be the start of something great! Be sure to follow up soon.</p>
    
        <p><strong>Best regards,</strong><br>RR Builder</p>
      `,
    });

    // Upload updated file to Supabase Storage, upsert=true to overwrite existing file
    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(fileName, buffer, {
        contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        upsert: true,
      });

    if (uploadError) throw uploadError;

    return NextResponse.json(
      { message: "Form submitted successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error saving form data:", error);
    return NextResponse.json(
      { error: "Failed to save form data." },
      { status: 500 },
    );
  }
}
