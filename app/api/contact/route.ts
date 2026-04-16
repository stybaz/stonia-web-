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
      from: "STONIA web <noreply@stonia.cz>",
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
        <h2>Děkujeme za vaši poptávku!</h2>
        <p>Dobrý den, <strong>${safeName}</strong>,</p>
        <p>obdrželi jsme vaši poptávku a ozveme se vám do 24 hodin.</p>
        <p>V případě urgentní záležitosti nás neváhejte kontaktovat telefonicky na <strong>+420 721 024 135</strong>.</p>
        <br>
        <p>S pozdravem,<br><strong>Tým STONIA kamenictví</strong><br>Uničov, Olomoucký kraj<br>+420 721 024 135</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
