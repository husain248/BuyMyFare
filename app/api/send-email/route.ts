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
      from: "BuyMyFare <onboarding@resend.dev>",
      to: ["husainyuvasoft248@gmail.com"],
      subject: `New Trip Enquiry from ${safeName}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Trip Enquiry – BuyMyFare</title>
</head>
<body style="margin:0;padding:0;background:#e8f4ff;font-family:Arial,sans-serif;color:#0f172a;">

  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#e8f4ff;padding:32px 16px;">
    <tr>
      <td align="center">

        <!-- Logo bar -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;margin-bottom:24px;">
          <tr>
            <td align="center">
              <img
                src="https://buymyfare.ca/wp-content/uploads/2024/11/Buy-My-Fare-Logo-L-1024x355.png"
                alt="BuyMyFare"
                width="180"
                style="display:block;height:auto;"
              />
            </td>
          </tr>
        </table>

        <!-- Main card -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #dbeafe;">

          <!-- Hero banner -->
          <tr>
            <td style="background:linear-gradient(135deg,#06a8f9 0%,#0b72c7 100%);padding:40px 36px 36px;position:relative;">
              <p style="margin:0 0 16px;display:inline-block;background:rgba(255,255,255,0.18);border-radius:50px;padding:5px 14px;font-size:12px;color:#ffffff;font-weight:600;letter-spacing:1px;">
                NEW ENQUIRY RECEIVED
              </p>
              <h1 style="margin:0 0 10px;font-size:28px;font-weight:700;color:#ffffff;line-height:1.3;">
                Thanks for reaching out!
              </h1>
              <p style="margin:0;font-size:15px;color:rgba(255,255,255,0.85);line-height:1.6;max-width:380px;">
                We've got your message and our travel experts will get back to you shortly.
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 36px;">

              <!-- Greeting -->
              <p style="margin:0 0 28px;font-size:15px;color:#334155;line-height:1.75;">
                Hi <strong style="color:#0b2447;">${safeName}</strong> — we're excited to help you plan your next adventure. Here's a summary of what you sent us.
              </p>

              <!-- Section label -->
              <p style="margin:0 0 14px;font-size:11px;font-weight:700;color:#06a8f9;letter-spacing:1.4px;text-transform:uppercase;">
                Your Enquiry
              </p>

              <!-- Name row -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f0f9ff;border-radius:12px;margin-bottom:10px;">
                <tr>
                  <td style="padding:14px 16px;vertical-align:middle;">
                    <p style="margin:0;font-size:11px;color:#64748b;font-weight:600;">Name</p>
                    <p style="margin:2px 0 0;font-size:14px;color:#0f172a;font-weight:500;">${safeName}</p>
                  </td>
                </tr>
              </table>

              <!-- Email row -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f0f9ff;border-radius:12px;margin-bottom:10px;">
                <tr>
                  <td style="padding:14px 16px;vertical-align:middle;">
                    <p style="margin:0;font-size:11px;color:#64748b;font-weight:600;">Email</p>
                    <p style="margin:2px 0 0;font-size:14px;font-weight:500;">
                      <a href="mailto:${safeEmail}" style="color:#06a8f9;text-decoration:none;">${safeEmail}</a>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Phone row -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f0f9ff;border-radius:12px;margin-bottom:10px;">
                <tr>
                  <td style="padding:14px 16px;vertical-align:middle;">
                    <p style="margin:0;font-size:11px;color:#64748b;font-weight:600;">Phone</p>
                    <p style="margin:2px 0 0;font-size:14px;font-weight:500;">
                      <a href="tel:${safePhone}" style="color:#0f172a;text-decoration:none;">${safePhone}</a>
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Message row -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f0f9ff;border-radius:12px;margin-bottom:28px;">
                <tr>
                  <td style="padding:14px 16px;vertical-align:top;">
                    <p style="margin:0;font-size:11px;color:#64748b;font-weight:600;">Message</p>
                    <p style="margin:6px 0 0;font-size:14px;color:#334155;line-height:1.65;">${safeMessage}</p>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:28px;">
                <tr>
                  <td style="border-top:1px dashed #bfdbfe;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>

              <!-- What happens next -->
              <p style="margin:0 0 14px;font-size:11px;font-weight:700;color:#06a8f9;letter-spacing:1.4px;text-transform:uppercase;">
                What Happens Next
              </p>

              <!-- Step 1 -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:12px;">
                <tr>
                  <td style="width:38px;vertical-align:top;padding-top:1px;">
                    <div style="width:26px;height:26px;background:#06a8f9;border-radius:50%;text-align:center;line-height:26px;font-size:12px;font-weight:700;color:#ffffff;">1</div>
                  </td>
                  <td style="vertical-align:top;padding-left:12px;">
                    <p style="margin:0;font-size:13px;font-weight:600;color:#0f172a;">Expert review</p>
                    <p style="margin:2px 0 0;font-size:12px;color:#64748b;line-height:1.5;">One of our travel specialists reviews your request carefully.</p>
                  </td>
                </tr>
              </table>

              <!-- Step 2 -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:12px;">
                <tr>
                  <td style="width:38px;vertical-align:top;padding-top:1px;">
                    <div style="width:26px;height:26px;background:#06a8f9;border-radius:50%;text-align:center;line-height:26px;font-size:12px;font-weight:700;color:#ffffff;">2</div>
                  </td>
                  <td style="vertical-align:top;padding-left:12px;">
                    <p style="margin:0;font-size:13px;font-weight:600;color:#0f172a;">Best fare search</p>
                    <p style="margin:2px 0 0;font-size:12px;color:#64748b;line-height:1.5;">We scout 500+ airlines to find you the lowest fares.</p>
                  </td>
                </tr>
              </table>

              <!-- Step 3 -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:32px;">
                <tr>
                  <td style="width:38px;vertical-align:top;padding-top:1px;">
                    <div style="width:26px;height:26px;background:#06a8f9;border-radius:50%;text-align:center;line-height:26px;font-size:12px;font-weight:700;color:#ffffff;">3</div>
                  </td>
                  <td style="vertical-align:top;padding-left:12px;">
                    <p style="margin:0;font-size:13px;font-weight:600;color:#0f172a;">We call you back</p>
                    <p style="margin:2px 0 0;font-size:12px;color:#64748b;line-height:1.5;">Expect a call or email from us within 24 hours.</p>
                  </td>
                </tr>
              </table>

              <!-- CTA bar -->
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#0b2447;border-radius:14px;">
                <tr>
                  <td style="padding:22px 24px;vertical-align:middle;">
                    <p style="margin:0 0 4px;font-size:14px;font-weight:600;color:#ffffff;">Need urgent help?</p>
                    <p style="margin:0;font-size:12px;color:#94a3b8;">We're available 24/7 for you</p>
                  </td>
                  <td style="padding:22px 24px;vertical-align:middle;text-align:right;white-space:nowrap;">
                    <a href="mailto:husainyuvasoft248@gmail.com" style="display:inline-block;background:#06a8f9;color:#ffffff;font-size:13px;font-weight:700;padding:12px 22px;border-radius:50px;text-decoration:none;">
                      Contact Us
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>

        <!-- Footer -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;margin-top:20px;">
          <tr>
            <td align="center" style="padding:0 16px 8px;">
              <p style="margin:0 0 6px;font-size:12px;color:#64748b;line-height:1.7;">
                Submitted on ${submittedAt} &nbsp;&middot;&nbsp; BuyMyFare &mdash; where memories begin
              </p>
              <p style="margin:0;font-size:12px;">
                <a href="#" style="color:#06a8f9;text-decoration:none;">Unsubscribe</a>
                &nbsp;&middot;&nbsp;
                <a href="#" style="color:#06a8f9;text-decoration:none;">Privacy Policy</a>
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</body>
</html>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to send email.";
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}