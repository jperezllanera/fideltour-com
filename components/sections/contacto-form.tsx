import { Button } from "@/components/ui/button";
import { ArrowRight, MailCheck, Clock4, ShieldCheck } from "lucide-react";

/*
 * TODO senior: este formulario es placeholder visual. La web actual lo sirve
 * desde un iframe de Zoho Forms (forms.fideltour.com). Antes de conectar el
 * submit real, decidir si:
 *   a) embebemos el iframe Zoho como en producción,
 *   b) llamamos a la API de Zoho desde un Route Handler propio, o
 *   c) montamos el formulario en otro proveedor (HubSpot, etc.).
 * El consentimiento RGPD/LOPD del CTA debe revisarse con legal antes de envíos.
 */

const inputClass =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground shadow-[var(--shadow-soft)] outline-none transition placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/30";

const labelClass =
  "block text-eyebrow text-brand-navy-deep";

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

          {/* Formulario */}
          <div className="md:col-span-7 lg:col-span-8">
            <form
              action="#"
              method="post"
              noValidate
              className="relative overflow-hidden rounded-3xl border border-border/70 bg-card p-6 shadow-[var(--shadow-bento)] md:p-10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="nombre" className={labelClass}>
                    Nombre y apellidos
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    autoComplete="name"
                    placeholder="¿Cómo te llamas?"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className={labelClass}>
                    Email corporativo
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="nombre@tuhotel.com"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="empresa" className={labelClass}>
                    Hotel o empresa
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    autoComplete="organization"
                    placeholder="Nombre del grupo, cadena u hotel"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="telefono" className={labelClass}>
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+34 ___ ___ ___"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="segmento" className={labelClass}>
                    Tipo de hotel
                  </label>
                  <select
                    id="segmento"
                    name="segmento"
                    defaultValue=""
                    className={`${inputClass} bg-card pr-10`}
                  >
                    <option value="" disabled>
                      Selecciona el segmento que mejor te describe…
                    </option>
                    <option value="independiente">Hotel independiente</option>
                    <option value="cadena">Cadena hotelera</option>
                    <option value="grupo">Grupo corporativo</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="mensaje" className={labelClass}>
                    ¿Cómo podemos ayudarte?
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    placeholder="Cuéntanos brevemente tu reto: venta directa, fidelización, unificación de datos…"
                    className={`${inputClass} resize-y`}
                  />
                </div>

                <label className="md:col-span-2 flex items-start gap-3 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    name="consent"
                    className="mt-1 size-4 rounded border-border text-brand focus:ring-brand/40"
                  />
                  <span>
                    He leído y acepto la{" "}
                    <a href="#privacidad" className="font-medium text-brand-navy underline-offset-2 hover:underline">
                      política de privacidad
                    </a>{" "}
                    y autorizo a Fideltour a contactarme con información comercial
                    relacionada con su CDP para hoteles.
                  </span>
                </label>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-full bg-brand text-white hover:bg-brand/90 px-6 gap-1.5"
                >
                  Habla con un experto
                  <ArrowRight className="size-4" />
                </Button>
                <span className="text-eyebrow text-muted-foreground">
                  Te respondemos en &lt; 24h laborables
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
