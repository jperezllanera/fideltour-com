import Link from "next/link";
import { BookOpen, Newspaper, Video, Mic, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    label: "Guías",
    icon: BookOpen,
    title: "Guías prácticas",
    description:
      "Guías prácticas para estructurar tu estrategia de fidelización paso a paso.",
    href: "#guias",
  },
  {
    label: "Blog",
    icon: Newspaper,
    title: "Artículos",
    description:
      "Artículos para entender tendencias, datos y buenas prácticas del sector hotelero.",
    href: "#blog",
  },
  {
    label: "Vídeos",
    icon: Video,
    title: "Vídeos",
    description:
      "Contenidos breves para comprender conceptos clave y casos reales.",
    href: "#videos",
  },
  {
    label: "Podcast",
    icon: Mic,
    title: "Podcast",
    description:
      "Conversaciones con profesionales sobre datos, marketing y fidelización hotelera.",
    href: "#podcast",
  },
];

export function ResourcesSection() {
  return (
    <section id="recursos" className="relative bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <div className="font-mono text-[11px] uppercase tracking-wider text-brand-navy-deep">
            Recursos
          </div>
          <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Recursos para avanzar con criterio
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ label, icon: Icon, title, description, href }) => (
            <Card
              key={label}
              className="group rounded-2xl border-border/70 bg-card shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-bento)]"
            >
              <CardContent className="flex h-full flex-col gap-5 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {label}
                  </span>
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-navy text-white transition-colors group-hover:bg-brand">
                    <Icon className="size-4" />
                  </span>
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold tracking-tight text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
                <Link
                  href={href}
                  className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-navy hover:text-brand"
                >
                  Explorar <ArrowUpRight className="size-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
