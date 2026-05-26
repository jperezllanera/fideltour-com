import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/* ──────────────────────────────────────────────────────────────────────
   POST /api/newsletter
   ----------------------------------------------------------------------
   Recibe { email, website } del form de newsletter (BlogCtaSection) y
   reenvía la suscripción por SMTP al buzón configurado (default
   marketing@fideltour.com). No persiste nada en BBDD — es un
   notification-as-form mientras marketing decide la stack real
   (Mailchimp/Brevo/HubSpot).

   Anti-spam:
   - Honeypot `website`: campo oculto en el form; si llega con valor,
     descartamos sin enviar (200 OK para no dar feedback al bot).
   - Rate limit in-memory por IP (5 req / 10 min). No es perfecto en
     serverless (cada instancia tiene su propio Map) pero ralentiza
     ataques manuales y bots básicos.
   - Validación de email con regex razonable.

   Env vars requeridas (todas server-side, NO usar NEXT_PUBLIC_):
   - SMTP_HOST       Host SMTP (ej. smtp.fideltour.com, smtp.office365.com)
   - SMTP_PORT       Puerto (587 STARTTLS recomendado; 465 TLS implícito)
   - SMTP_USER       Usuario de autenticación
   - SMTP_PASS       Password o app-password
   - SMTP_FROM       Dirección "From" (ej. noreply@fideltour.com)
   - NEWSLETTER_TO   Destinatario (default: marketing@fideltour.com)

   Si falta cualquiera de SMTP_HOST/USER/PASS/FROM en runtime, el endpoint
   loggea un warning y devuelve 200 OK igual — así el form sigue siendo
   funcional en dev local sin credenciales (la UX no se rompe). El envío
   real ocurre solo cuando las env vars están completas en producción.

   TODO senior:
   - Reemplazar el rate-limit in-memory por uno persistente (Upstash
     Redis, Vercel KV) cuando el tráfico real lo justifique.
   - Considerar añadir Cloudflare Turnstile o hCaptcha si el honeypot
     no es suficiente.
   - Cuando Mailchimp/Brevo esté activo, sustituir el SMTP por su API
     y suscribir directo a la audiencia.
   ────────────────────────────────────────────────────────────────────── */

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT_MAX) return false;
  entry.count += 1;
  return true;
}

function getClientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  let body: { email?: unknown; website?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: si un bot rellena el campo oculto, fingimos éxito sin enviar.
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!email || !EMAIL_REGEX.test(email) || email.length > 254) {
    return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  const ip = getClientIp(request);
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
  const to = process.env.NEWSLETTER_TO ?? "marketing@fideltour.com";

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
    console.warn(
      "[newsletter] SMTP env vars missing — registered locally only. " +
        `email=${email} to=${to}`,
    );
    return NextResponse.json({ ok: true, persisted: false });
  }

  try {
    const port = Number(SMTP_PORT ?? 587);
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const userAgent = request.headers.get("user-agent") ?? "unknown";
    const referer = request.headers.get("referer") ?? "unknown";
    const timestamp = new Date().toISOString();

    const info = await transporter.sendMail({
      from: SMTP_FROM,
      to,
      replyTo: email,
      subject: "Nueva suscripción a la newsletter — fideltour.com",
      text: [
        `Email suscrito: ${email}`,
        ``,
        `Fecha (UTC): ${timestamp}`,
        `IP: ${ip}`,
        `User-Agent: ${userAgent}`,
        `Origen: ${referer}`,
      ].join("\n"),
    });

    console.log(
      "[newsletter] sent OK · messageId=%s · accepted=%j · rejected=%j · response=%s",
      info.messageId,
      info.accepted,
      info.rejected,
      info.response,
    );

    return NextResponse.json({ ok: true, persisted: true, messageId: info.messageId });
  } catch (err) {
    console.error("[newsletter] SMTP send failed:", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
