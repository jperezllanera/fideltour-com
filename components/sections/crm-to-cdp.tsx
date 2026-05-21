import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CrmToCdpSection() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="font-mono text-[11px] uppercase tracking-wider text-brand-navy-deep">
              Del CRM al CDP
            </div>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
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

          {/* Bloque visual: gradiente de marca + tarjeta translúcida */}
          <div className="md:col-span-5">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-brand-gradient shadow-[var(--shadow-bento)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)]" />

              {/* "O" del logo escalada */}
              <div className="absolute -bottom-12 -right-12 size-[280px] rounded-full border-[24px] border-white/30" />
              <div className="absolute top-6 left-6 size-[120px] rounded-full border-[10px] border-white/20" />

              <div className="relative flex h-full flex-col justify-between p-8 text-white">
                <div className="font-mono text-[11px] uppercase tracking-wider text-white/80">
                  Customer Data Platform
                </div>
                <div>
                  <div className="font-sans text-3xl font-bold leading-tight md:text-4xl">
                    De datos sueltos
                    <br />a venta directa
                  </div>
                  <div className="mt-2 font-mono text-sm text-white/80">
                    Fideltour · CDP para hoteles
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
