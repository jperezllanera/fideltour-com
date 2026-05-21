import { Clock4, MailCheck, ShieldCheck } from "lucide-react";

/*
 * TODO senior: el formulario embebido apunta al mismo formulario Zoho que
 * sirve la web actual de WordPress
 * (forms.zohopublic.eu/fideltour/form/Auditora/...). Antes de hacer go-live:
 *   a) confirmar que se mantiene Zoho como destino (o migrar a HubSpot /
 *      handler propio),
 *   b) sustituir el `src` por el embed final entregado por marketing,
 *   c) revisar con legal el consentimiento RGPD que ya muestra el iframe.
 * Mientras tanto, dejamos el iframe en producción para que la captura de
 * lead no se interrumpa con el porting de la página a Next.
 */
const ZOHO_FORM_SRC =
  "https://forms.zohopublic.eu/fideltour/form/Auditora/formperma/4sre22gV7-wJo0ESoQINIhE_64acNRPs8KqcI_NvODw";

export function AuditoriaFormSection() {
  return (
    <section id="formulario" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Columna de soporte */}
          <aside className="md:col-span-5 lg:col-span-4 flex flex-col gap-8">
            <div className="space-y-3">
              <div className="text-eyebrow text-brand-navy-deep">
                Tus datos, tu futuro
              </div>
              <h2>Rellena el formulario y empezamos.</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Este es el formulario que debes completar. Tras ello, te
                enviaremos tu informe personalizado con la auditoría de
                fidelización completa.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                {
                  icon: Clock4,
                  title: "Informe en menos de 24h",
                  text: "Recibirás tu auditoría personalizada por email en menos de 24h laborables.",
                },
                {
                  icon: MailCheck,
                  title: "Análisis hotelero, no genérico",
                  text: "Lo prepara un especialista de fidelización con experiencia en hoteles independientes y cadenas.",
                },
                {
                  icon: ShieldCheck,
                  title: "Confidencial y sin compromiso",
                  text: "Solo usamos tus datos para construir el informe. Sin spam, sin contacto comercial agresivo.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-white">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-brand-navy">
                      {title}
                    </div>
                    <div className="text-sm text-muted-foreground">{text}</div>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* Formulario embebido (Zoho Forms) */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card p-2 shadow-[var(--shadow-bento)] md:p-4">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent"
              />

              <iframe
                title="Formulario de auditoría de fidelización Fideltour"
                src={ZOHO_FORM_SRC}
                loading="lazy"
                aria-label="Auditoría"
                className="block h-[1280px] w-full rounded-2xl border-0 bg-card"
              />
            </div>

            <p className="mt-4 text-eyebrow text-muted-foreground">
              Te respondemos en &lt; 24h laborables · Tus datos se tratan según
              nuestra{" "}
              <a
                href="/politica-de-privacidad"
                className="font-semibold text-brand-navy underline-offset-4 hover:underline"
              >
                política de privacidad
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
