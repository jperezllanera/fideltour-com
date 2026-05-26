"use client";

import * as React from "react";
import { ArrowRight, Check, Loader2, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

/* ──────────────────────────────────────────────────────────────────────
   Newsletter CTA — POST a /api/newsletter
   ----------------------------------------------------------------------
   El endpoint reenvía la suscripción por SMTP a marketing@fideltour.com
   mientras marketing decide la stack real (Mailchimp/Brevo/HubSpot).
   Ver app/api/newsletter/route.ts y docs/dev-notes.md para las env
   vars SMTP_*.

   El form:
   - usa `<input name="website">` como honeypot oculto a usuarios y leído
     por bots — el endpoint descarta cualquier envío con valor ahí.
   - mantiene la UI optimista: estado loading durante el fetch, mensaje
     de éxito cuando vuelve 200 (aunque las env vars falten, el endpoint
     responde 200 para no romper la UX en dev), error claro en otros casos.
   ────────────────────────────────────────────────────────────────────── */

type Status = "idle" | "loading" | "success" | "error";

export function BlogCtaSection() {
  const [email, setEmail] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [status, setStatus] = React.useState<Status>("idle");
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setErrorMessage(null);

    try {
      // Trailing slash obligatorio: el proyecto usa `trailingSlash: true` en
      // next.config.ts, y sin el slash el endpoint devuelve 308 redirect.
      const res = await fetch("/api/newsletter/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        return;
      }

      const data = (await res.json().catch(() => null)) as
        | { error?: string }
        | null;

      if (data?.error === "invalid_email") {
        setErrorMessage("Revisa el email — no parece válido.");
      } else if (data?.error === "rate_limited") {
        setErrorMessage("Demasiadas peticiones. Prueba en unos minutos.");
      } else {
        setErrorMessage("No hemos podido procesar tu suscripción. Inténtalo de nuevo.");
      }
      setStatus("error");
    } catch {
      setErrorMessage("Problema de red. Revisa tu conexión y vuelve a intentarlo.");
      setStatus("error");
    }
  }

  const isLoading = status === "loading";
  const isSuccess = status === "success";

  return (
    <section id="newsletter" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-24 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-8 text-white shadow-[var(--shadow-bento)] md:p-16">
          {/* Aro de marca (eco de la "O" del logo) — uno solo, grueso, recortado por overflow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -bottom-24 size-[440px] rounded-full border-[84px] border-brand/25"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent"
          />

          <div className="relative grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7 flex flex-col items-start gap-6">
              <div className="text-eyebrow text-white/70">
                Newsletter Fideltour
              </div>
              <h2 className="h-cta text-white">
                Un email al mes.{" "}
                <span className="text-brand">Cero ruido hotelero.</span>
              </h2>
              <p className="max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Recibe los artículos nuevos, casos reales y las lecciones que el
                equipo Fideltour aprende trabajando con hoteles que están
                reduciendo su dependencia de las OTAs.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="md:col-span-5 flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur"
            >
              {/* Honeypot anti-spam: oculto a usuarios reales, irresistible para bots.
                  Cualquier valor aquí hace que el endpoint descarte la petición. */}
              <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="newsletter-website">
                  No rellenes este campo:
                  <input
                    id="newsletter-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </label>
              </div>

              <label
                htmlFor="newsletter-email"
                className="text-eyebrow text-white/70"
              >
                Tu email profesional
              </label>
              <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 pl-4">
                <Mail aria-hidden className="size-4 text-white/70" />
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="hola@tuhotel.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading || isSuccess}
                  className="h-11 flex-1 bg-transparent text-sm text-white placeholder:text-white/40 outline-none disabled:opacity-60"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isLoading || isSuccess}
                className="rounded-full bg-brand text-white hover:bg-brand/90 px-6 gap-1.5"
              >
                {isLoading ? (
                  <>
                    <Loader2 aria-hidden className="size-4 animate-spin" />
                    Enviando…
                  </>
                ) : isSuccess ? (
                  <>
                    <Check aria-hidden className="size-4" />
                    ¡Suscrito!
                  </>
                ) : (
                  <>
                    Suscribirme
                    <ArrowRight className="size-4" />
                  </>
                )}
              </Button>

              {status === "error" && errorMessage && (
                <p role="alert" className="text-2xs text-red-200">
                  {errorMessage}
                </p>
              )}

              {isSuccess ? (
                <p className="text-2xs text-white/80">
                  Hemos enviado tu solicitud al equipo. Te incluiremos en el
                  próximo envío.
                </p>
              ) : (
                <p className="text-2xs text-white/60">
                  Sin spam. Puedes darte de baja con un clic en cualquier momento.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
