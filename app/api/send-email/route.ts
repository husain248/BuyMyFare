import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safePhone = escapeHtml(String(phone));
    const safeMessage = escapeHtml(String(message)).replaceAll("\n", "<br />");
    const submittedAt = new Date().toLocaleString("en-CA", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["husainyuvasoft248@gmail.com"],
      subject: `New Trip Enquiry from ${safeName}`,
      html: `
        <div style="margin:0;padding:24px;background:#f4f7fb;font-family:Arial,sans-serif;color:#0f172a;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e5e7eb;">
            <tr>
              <td style="padding:20px 24px;background:linear-gradient(135deg,#06a8f9,#0b2447);color:#ffffff;">
                <p style="margin:0;font-size:12px;letter-spacing:1px;text-transform:uppercase;opacity:0.9;">BuyMyFare</p>
                <h2 style="margin:8px 0 0;font-size:24px;line-height:1.3;">New Contact Form Enquiry</h2>
              </td>
            </tr>
            <tr>
              <td style="padding:24px;">
                <p style="margin:0 0 16px;font-size:14px;color:#475569;">
                  You received a new enquiry from your website contact form.
                </p>

                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
                  <tr>
                    <td style="padding:12px 14px;background:#f8fafc;font-size:13px;font-weight:700;color:#334155;width:140px;border-bottom:1px solid #e5e7eb;">Name</td>
                    <td style="padding:12px 14px;font-size:14px;color:#0f172a;border-bottom:1px solid #e5e7eb;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 14px;background:#f8fafc;font-size:13px;font-weight:700;color:#334155;width:140px;border-bottom:1px solid #e5e7eb;">Email</td>
                    <td style="padding:12px 14px;font-size:14px;color:#0f172a;border-bottom:1px solid #e5e7eb;">
                      <a href="mailto:${safeEmail}" style="color:#0369a1;text-decoration:none;">${safeEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:12px 14px;background:#f8fafc;font-size:13px;font-weight:700;color:#334155;width:140px;border-bottom:1px solid #e5e7eb;">Phone</td>
                    <td style="padding:12px 14px;font-size:14px;color:#0f172a;border-bottom:1px solid #e5e7eb;">
                      <a href="tel:${safePhone}" style="color:#0369a1;text-decoration:none;">${safePhone}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:12px 14px;background:#f8fafc;font-size:13px;font-weight:700;color:#334155;width:140px;vertical-align:top;">Message</td>
                    <td style="padding:12px 14px;font-size:14px;color:#0f172a;line-height:1.6;">${safeMessage}</td>
                  </tr>
                </table>

                <p style="margin:18px 0 0;font-size:12px;color:#64748b;">
                  Submitted on ${submittedAt}
                </p>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to send email.";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}