import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, tools, timewaster, budget } = body;

    if (!name || !email || !company) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "AutoAscent Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New enquiry from ${name} — ${company}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="color:#63CF6F;margin-bottom:4px;">New AutoAscent Enquiry</h2>
          <p style="color:#888;font-size:13px;margin-top:0;">Submitted via auto-ascent.us contact form</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0;"/>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#333;width:160px;">Full Name</td>
              <td style="padding:10px 0;color:#555;">${name}</td>
            </tr>
            <tr style="background:#f9f9f9;">
              <td style="padding:10px;font-weight:600;color:#333;">Business Email</td>
              <td style="padding:10px;color:#555;">${email}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#333;">Company</td>
              <td style="padding:10px 0;color:#555;">${company}</td>
            </tr>
            <tr style="background:#f9f9f9;">
              <td style="padding:10px;font-weight:600;color:#333;">Current Tools</td>
              <td style="padding:10px;color:#555;">${tools || "—"}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#333;vertical-align:top;">Biggest Time-Waster</td>
              <td style="padding:10px 0;color:#555;">${timewaster || "—"}</td>
            </tr>
            <tr style="background:#f9f9f9;">
              <td style="padding:10px;font-weight:600;color:#333;">Budget Range</td>
              <td style="padding:10px;color:#555;">${budget || "—"}</td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0;"/>
          <p style="color:#aaa;font-size:12px;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
