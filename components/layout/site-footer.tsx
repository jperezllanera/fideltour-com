import Link from "next/link";
import Image from "next/image";
import { Globe } from "lucide-react";
import { Logo } from "@/components/brand/logo";

/* Lucide eliminó los iconos de marcas comerciales por copyright.
   Inline SVGs ligeros para LinkedIn, YouTube e Instagram. */
function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.95v5.66H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1C4.5 20.4 12 20.4 12 20.4s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />
    </svg>
  );
}
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Soluciones",
    links: [
      { label: "Casos de éxito", href: "/casos-de-exito" },
      { label: "Marketplace", href: "/marketplace" },
      { label: "Recursos", href: "/recursos" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Sobre Fideltour", href: "/fideltour" },
      { label: "Clientes", href: "/clientes" },
      { label: "Partners", href: "/partners" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
];

const countries = [
  { label: "España",   code: "ES" },
  { label: "Colombia", code: "CO" },
  { label: "México",   code: "MX" },
  { label: "Portugal", code: "PT" },
];

/* Sellos institucionales replicados de fideltour.com (versiones 2026).
   Cada PNG es ya un compuesto oficial (Gobierno + Ministerio + organismo). */
const sealsRow1 = [
  {
    src: "/brand/sello-ue-nextgeneration.webp",
    alt: "Cofinanciado por la Unión Europea · Ministerio de Hacienda · Fondos Europeos",
  },
  {
    src: "/brand/sello-enisa.webp",
    alt: "Gobierno de España · Ministerio de Industria, Comercio y Turismo · ENISA",
  },
  {
    src: "/brand/sello-pyme-innovadora.webp",
    alt: "Gobierno de España · Ministerio de Ciencia e Innovación · PYME Innovadora",
  },
  {
    src: "/brand/sello-cdti.webp",
    alt: "Gobierno de España · Ministerio de Ciencia e Innovación · CDTI",
  },
];

const sealsRow2 = [
  {
    src: "/brand/sello-prtr-generalitat.webp",
    alt: "Finançat per la Unió Europea NextGenerationEU · Ministerio de Industria y Turismo · Pla de Recuperació, Transformació i Resiliència · Generalitat de Catalunya, Conselleria de Turisme, Cultura i Esports",
  },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4 space-y-4">
            <Logo />
            <p className="text-body-sm text-muted-foreground max-w-xs">
              Conecta, conoce y fideliza a tu cliente.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <SocialIcon href="#" label="LinkedIn"><LinkedInIcon className="size-4" /></SocialIcon>
              <SocialIcon href="#" label="YouTube"><YouTubeIcon className="size-4" /></SocialIcon>
              <SocialIcon href="#" label="Instagram"><InstagramIcon className="size-4" /></SocialIcon>
              <SocialIcon href="#" label="Web"><Globe className="size-4" /></SocialIcon>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <div className="text-eyebrow text-muted-foreground">
                {col.title}
              </div>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/85 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-4">
            <div className="text-eyebrow text-muted-foreground">
              Contacto
            </div>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {countries.map((c) => (
                <li
                  key={c.code}
                  className="flex items-center justify-between rounded-md border border-border/70 px-3 py-2 text-sm"
                >
                  <span>{c.label}</span>
                  <span className="text-2xs text-muted-foreground">{c.code}</span>
                </li>
              ))}
            </ul>
            <a
              href="/contacto"
              className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
            >
              hola@fideltour.com →
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border/70 pt-8">
          <div className="text-eyebrow text-muted-foreground">
            Sellos institucionales
          </div>
          <div className="mt-5 space-y-5">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-5 md:gap-x-10">
              {sealsRow1.map((s) => (
                <div
                  key={s.src}
                  className="flex items-center rounded-lg bg-white/90 px-3 py-2 ring-1 ring-border/60 shadow-[var(--shadow-soft)]"
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={300}
                    height={70}
                    className="h-9 w-auto md:h-10"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
              {sealsRow2.map((s) => (
                <div
                  key={s.src}
                  className="flex items-center rounded-lg bg-white/90 px-3 py-2 ring-1 ring-border/60 shadow-[var(--shadow-soft)]"
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={600}
                    height={70}
                    className="h-9 w-auto md:h-10"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclosure obligatoria de la subvención NextGenerationEU. Texto
            facilitado por el cliente; no modificar sin acuerdo previo. */}
        <div className="mt-10 rounded-2xl border border-border/70 bg-card p-6 text-body-sm text-muted-foreground md:p-8">
          <p>
            Fideltour SL ha desarrollado el proyecto «Investigación Industrial
            para un CRM B2B». Este proyecto se enmarca en los Proyectos
            innovadores a través de la cooperación con el objetivo de buscar,
            implementar y digitalizar soluciones innovadoras sostenibles en los
            establecimientos turísticos de las Islas Baleares, y ha permitido
            el desarrollo e implementación de una solución tecnológica
            avanzada orientada a la digitalización, optimización de datos y
            mejora de la gestión comercial en el sector turístico. Proyecto
            financiado por la Unión Europea a través del Mecanismo de
            Recuperación y Resiliencia – NextGeneration EU. Inversión
            subvencionada: 140.521,56 €.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Fideltour — CDP para hoteles.</div>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <Link href="/terminos-y-condiciones" className="hover:text-foreground">Términos y condiciones</Link>
            <Link href="/politica-de-privacidad" className="hover:text-foreground">Política de privacidad</Link>
            <Link href="/politica-de-cookies" className="hover:text-foreground">Política de cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground/70 transition-colors hover:bg-foreground hover:text-background"
    >
      {children}
    </a>
  );
}
