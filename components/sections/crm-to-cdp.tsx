import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CrmToCdpSection() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="text-eyebrow text-brand-navy-deep">
              Del CRM al CDP
            </div>
            <h2>
              El <span className="text-brand-navy-deep">ecosistema</span> que
              conecta datos, personas y reservas.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Pasar de un CRM clásico a una Customer Data Platform especializada
              en hoteles cambia la forma en la que conoces, segmentas y activas
              a cada huésped. Fideltour unifica todas las señales en un único
              perfil y devuelve al hotelero el control sobre su venta directa.
            </p>

            <ul className="grid gap-3 sm:grid-cols-2 max-w-xl pt-2">
              {[
                "Identidad única por huésped",
                "Reservas + estancias + web + offline",
                "Activación cross-canal sin colisiones",
                "Atribución del touchpoint al ingreso",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-foreground/85"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button
                size="lg"
                className="rounded-full bg-brand-navy text-white hover:bg-brand-navy/90 px-6 gap-1.5"
                render={<a href="#plataforma" />}
              >
                Conoce la plataforma
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          {/* Bloque visual: gradiente de marca + mockup del CRM + tarjeta translúcida */}
          <div className="md:col-span-5">
            <div className="relative aspect-square w-full overflow-visible rounded-3xl bg-brand-gradient shadow-[var(--shadow-bento)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)]" />

              {/* "O" del logo escalada — un único aro grueso */}
              <div className="absolute -bottom-16 -right-16 size-[320px] rounded-full border-[56px] border-white/30" />

              {/* Mockup del CRM flotando — la "puerta de entrada" al CDP.
                  Ancho ~78% y anclado al tercio superior, deja libre la zona
                  del titular de abajo (~38% del alto de la pastilla). */}
              <div className="pointer-events-none absolute left-1/2 top-[14%] w-[78%] -translate-x-1/2">
                <Image
                  src="/brand/platform/crm-hoteles.webp"
                  alt="Captura del CRM de Fideltour como puerta de entrada al CDP"
                  width={520}
                  height={400}
                  sizes="(min-width: 1024px) 360px, 55vw"
                  className="w-full h-auto drop-shadow-[0_22px_42px_rgba(0,0,0,0.35)]"
                />
              </div>

              <div className="relative flex h-full flex-col justify-between p-8 text-white">
                <div className="text-eyebrow text-white/80">
                  Customer Data Platform
                </div>
                <div className="flex flex-col gap-4">
                  <div className="font-sans text-3xl font-bold leading-tight md:text-4xl">
                    De datos sueltos
                    <br />a venta directa
                  </div>
                  <ul className="flex flex-wrap items-center gap-2 text-eyebrow-sm">
                    <li className="rounded-full bg-white/15 px-2.5 py-1 text-white">
                      Buscador 51% → 36%
                    </li>
                    <li className="rounded-full bg-brand-mint/25 px-2.5 py-1 text-white">
                      IA 6% → 15%
                    </li>
                    <li className="rounded-full bg-white/15 px-2.5 py-1 text-white">
                      80% tráfico anónimo
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
