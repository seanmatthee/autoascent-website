import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

// Module-level singleton — one client, not a new one per request
const resend = new Resend(process.env.RESEND_API_KEY);

// In-memory rate limiter: max 3 submissions per IP per hour
const rateStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateStore.get(ip);
  if (!entry || now > entry.resetAt) {
    rateStore.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

// Escape all user input before interpolating into HTML
function esc(val: unknown): string {
  if (typeof val !== "string") return "";
  return val
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  try {
    const body = await req.json();
    const { name, email, company, tools, timewaster, budget } = body;

    if (!name || !email || !company) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!EMAIL_RE.test(String(email))) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    const s = {
      name:       esc(name),
      email:      esc(email),
      company:    esc(company),
      tools:      esc(tools)      || "—",
      timewaster: esc(timewaster) || "—",
      budget:     esc(budget)     || "—",
    };

    await resend.emails.send({
      from:    "AutoAscent Contact Form <noreply@auto-ascent.us>",
      to:      "seanmatthee91@gmail.com",
      replyTo: String(email), // raw value for the mail header, not HTML
      subject: `New enquiry from ${s.name} — ${s.company}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="color:#63CF6F;margin-bottom:4px;">New AutoAscent Enquiry</h2>
          <p style="color:#888;font-size:13px;margin-top:0;">Submitted via auto-ascent.us contact form</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0;"/>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#333;width:160px;">Full Name</td>
              <td style="padding:10px 0;color:#555;">${s.name}</td>
            </tr>
            <tr style="background:#f9f9f9;">
              <td style="padding:10px;font-weight:600;color:#333;">Business Email</td>
              <td style="padding:10px;color:#555;">${s.email}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#333;">Company</td>
              <td style="padding:10px 0;color:#555;">${s.company}</td>
            </tr>
            <tr style="background:#f9f9f9;">
              <td style="padding:10px;font-weight:600;color:#333;">Current Tools</td>
              <td style="padding:10px;color:#555;">${s.tools}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;font-weight:600;color:#333;vertical-align:top;">Biggest Time-Waster</td>
              <td style="padding:10px 0;color:#555;">${s.timewaster}</td>
            </tr>
            <tr style="background:#f9f9f9;">
              <td style="padding:10px;font-weight:600;color:#333;">Budget Range</td>
              <td style="padding:10px;color:#555;">${s.budget}</td>
            </tr>
          </table>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0;"/>
          <p style="color:#aaa;font-size:12px;">Reply directly to this email to respond to ${s.name}.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
