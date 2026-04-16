import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  orderType: z.string().min(1),
  message: z.string().min(10),
  honeypot: z.string().max(0),
});

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const ipRequestLog = new Map<string, number[]>();

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const previousRequests = ipRequestLog.get(ip) || [];
  const recentRequests = previousRequests.filter((timestamp) => timestamp > windowStart);

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    ipRequestLog.set(ip, recentRequests);
    return true;
  }

  recentRequests.push(now);
  ipRequestLog.set(ip, recentRequests);

  // Cleanup old entries to keep memory bounded.
  for (const [storedIp, timestamps] of Array.from(ipRequestLog.entries())) {
    const filtered = timestamps.filter((timestamp: number) => timestamp > windowStart);
    if (filtered.length === 0) {
      ipRequestLog.delete(storedIp);
    } else if (filtered.length !== timestamps.length) {
      ipRequestLog.set(storedIp, filtered);
    }
  }

  return false;
}

export async function POST(request: NextRequest) {
  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const result = schema.safeParse(data);
  if (!result.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 422 });
  }

  const { name, email, phone, orderType, message, honeypot } = result.data;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : "–";
  const safeOrderType = escapeHtml(orderType);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  // Honeypot check
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY not set – cannot send email");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    // Notification email to company
    await resend.emails.send({
      from: "STONIA web <info@stonia.cz>",
      to: "info@stonia.cz",
      subject: `Nová poptávka: ${safeOrderType} – ${safeName}`,
      html: `
        <h2>Nová poptávka z webu stonia.cz</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold">Jméno:</td><td style="padding:8px">${safeName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">E-mail:</td><td style="padding:8px">${safeEmail}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Telefon:</td><td style="padding:8px">${safePhone}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Typ zakázky:</td><td style="padding:8px">${safeOrderType}</td></tr>
          <tr><td style="padding:8px;font-weight:bold">Zpráva:</td><td style="padding:8px">${safeMessage}</td></tr>
        </table>
      `,
    });

    // Confirmation email to customer
    await resend.emails.send({
      from: "STONIA kamenictví <info@stonia.cz>",
      to: email,
      subject: "Potvrzení poptávky – STONIA kamenictví",
      html: `
        <div style="font-family:Arial,sans-serif;font-size:15px;color:#1a1a1a;max-width:560px;">
          <h2 style="margin:0 0 16px;font-size:20px;color:#1a1a1a;">Děkujeme za vaši poptávku!</h2>
          <p style="margin:0 0 12px;">Dobrý den, <strong>${safeName}</strong>,</p>
          <p style="margin:0 0 12px;">obdrželi jsme vaši poptávku a ozveme se vám do 24 hodin.</p>
          <p style="margin:0 0 32px;">V případě urgentní záležitosti nás neváhejte kontaktovat telefonicky na <strong>+420 721 024 135</strong>.</p>

          <p style="margin:0 0 20px;color:#555;">S pozdravem</p>

          <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
            <tr>
              <td style="padding-right:20px;vertical-align:middle;">
                <div style="font-family:Arial,sans-serif;">
                  <div style="display:inline-flex;align-items:center;gap:4px;">
                    <span style="font-size:20px;font-weight:900;letter-spacing:-0.04em;color:#171513;">STONIA</span>
                    <span style="display:inline-block;width:8px;height:8px;background:#ed622a;margin-left:2px;vertical-align:middle;position:relative;top:-6px;"></span>
                  </div>
                  <div style="font-size:11px;color:#555;letter-spacing:0.08em;text-transform:uppercase;margin-top:2px;">Kamenictví Štybner</div>
                </div>
              </td>
              <td style="width:1px;background:#ddd;padding:0 20px 0 0;">&nbsp;</td>
              <td style="padding-left:20px;vertical-align:middle;font-size:13px;line-height:1.8;color:#333;">
                <strong style="font-size:14px;color:#171513;">Jakub Štybner</strong><br>
                IČO: 17100551<br>
                Tel: <a href="tel:+420721024135" style="color:#ed622a;text-decoration:none;">+420 721 024 135</a><br>
                Email: <a href="mailto:info@stonia.cz" style="color:#ed622a;text-decoration:none;">info@stonia.cz</a><br>
                Web: <a href="https://www.stonia.cz" style="color:#ed622a;text-decoration:none;">www.stonia.cz</a>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
