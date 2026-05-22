import { MailCheck, Clock4, ShieldCheck } from "lucide-react";

/*
 * Formulario de contacto: embebemos el Zoho Form de producción
 * (forms.fideltour.com) para que los leads caigan directamente en Zoho CRM,
 * igual que en la web actual. Si en el futuro se quiere un formulario nativo,
 * habrá que llamar a la API de Zoho desde un Route Handler propio.
 */

const ZOHO_FORM_URL =
  "https://forms.fideltour.com/fideltour/form/Contacto/formperma/in8AxXVy79js4euPiJaSobIKsFLk0xgJHxEgcayPQd8";

export function ContactoFormSection() {
  return (
    <section id="dejanos-datos" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Columna de soporte */}
          <aside className="md:col-span-5 lg:col-span-4 flex flex-col gap-8">
            <div className="space-y-3">
              <div className="text-eyebrow text-brand-navy-deep">
                Déjanos tus datos
              </div>
              <h2>
                Hablemos de tu venta directa.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Cuéntanos cómo trabajáis hoy con vuestro dato y dónde queréis
                llegar. Te contactamos con un especialista hotelero — no con un
                SDR genérico.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                {
                  icon: Clock4,
                  title: "Respuesta < 24h laborables",
                  text: "Te responde alguien del equipo hotelero, no un bot.",
                },
                {
                  icon: MailCheck,
                  title: "Demo personalizada",
                  text: "Adaptada a tu PMS, channel manager y tipo de hotel.",
                },
                {
                  icon: ShieldCheck,
                  title: "Sin compromiso",
                  text: "Auditoría inicial gratuita y confidencial.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-white">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-brand-navy">{title}</div>
                    <div className="text-sm text-muted-foreground">{text}</div>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* Formulario Zoho embebido */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card p-2 shadow-[var(--shadow-bento)] md:p-4">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent"
              />
              <iframe
                src={ZOHO_FORM_URL}
                title="Formulario de contacto Fideltour"
                className="contacto-form-iframe"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
