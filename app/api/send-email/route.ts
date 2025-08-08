import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const selectedServices =
      Object.entries(body.services || {})
        .filter(([_, value]) => value)
        .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1))
        .join(", ") || "No services selected";

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.LEVEL_UP_MAIL,
      subject: `New Contact Form Submission from ${body.firstName} ${body.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9;">
          <h2 style="color: #333;">📩 New Contact Form Submission</h2>
          <p style="font-size: 15px; color: #555;">You have received a new message via your portfolio contact form:</p>

          <table cellpadding="8" cellspacing="0" border="0" style="width: 100%; background: #fff; border-radius: 8px; border: 1px solid #ddd;">
            <tr>
              <td style="font-weight: bold;">Name:</td>
              <td>${body.firstName} ${body.lastName}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Email:</td>
              <td>${body.email}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Phone:</td>
              <td>${body.phoneNumber || "N/A"}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Services:</td>
              <td>${selectedServices}</td>
            </tr>
            <tr>
              <td style="font-weight: bold;">Message:</td>
              <td>${body.message || "<i>No message provided</i>"}</td>
            </tr>
          </table>

          <p style="margin-top: 20px; font-size: 14px; color: #777;">
            — This message was sent from your website's contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
