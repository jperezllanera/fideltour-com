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
      { label: "Data Import", href: "#" },
      { label: "Data Intelligence", href: "#" },
      { label: "Data Activation", href: "#" },
      { label: "Multicanalidad", href: "#" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Clientes", href: "#clientes" },
      { label: "Recursos", href: "#recursos" },
      { label: "Blog", href: "#blog" },
      { label: "Marketplace", href: "#marketplace" },
    ],
  },
];

const countries = [
  { label: "España",   code: "ES" },
  { label: "Colombia", code: "CO" },
  { label: "México",   code: "MX" },
  { label: "Portugal", code: "PT" },
];

const seals = [
  { src: "/brand/sello-ue-nextgeneration.png", alt: "Cofinanciado por la Unión Europea — NextGenerationEU" },
  { src: "/brand/sello-enisa.png", alt: "Enisa" },
  { src: "/brand/sello-pyme-innovadora.png", alt: "PYME Innovadora MEIC" },
  { src: "/brand/sello-cdti.png", alt: "CDTI" },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4 space-y-4">
            <Logo />
            <p className="font-mono text-[13px] leading-relaxed text-muted-foreground max-w-xs">
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
              <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
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
            <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              Contacto
            </div>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {countries.map((c) => (
                <li
                  key={c.code}
                  className="flex items-center justify-between rounded-md border border-border/70 px-3 py-2 text-sm"
                >
                  <span>{c.label}</span>
                  <span className="font-mono text-[11px] text-muted-foreground">{c.code}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="mt-3 inline-block text-sm font-medium text-primary hover:underline"
            >
              hola@fideltour.com →
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border/70 pt-8">
          <div className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            Sellos institucionales
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
            {seals.map((s) => (
              <Image
                key={s.src}
                src={s.src}
                alt={s.alt}
                width={140}
                height={56}
                className="h-12 w-auto opacity-90"
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border/70 pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Fideltour — CDP para hoteles.</div>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <Link href="#aviso-legal" className="hover:text-foreground">Aviso legal</Link>
            <Link href="#privacidad" className="hover:text-foreground">Privacidad</Link>
            <Link href="#cookies" className="hover:text-foreground">Cookies</Link>
            <Link href="#condiciones" className="hover:text-foreground">Condiciones</Link>
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
