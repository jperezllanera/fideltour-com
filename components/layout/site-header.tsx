"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bell,
  Mail,
  MenuIcon,
  MessageCircle,
  MessageSquare,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/logo";
// LocaleToggle oculto temporalmente hasta tener traducciones reales.
// import { LocaleToggle } from "@/components/layout/locale-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { platformGroups, topNavLinks } from "@/lib/content/nav";
import { platformFeatured } from "@/lib/content/site";

export function SiteHeader() {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full",
        "border-b border-border/60",
        "bg-background/90 backdrop-blur-md supports-backdrop-filter:bg-background/80",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 md:px-6">
        <div className="flex flex-1 items-center">
          <Logo />
        </div>

        <DesktopNav />

        <div className="hidden md:flex flex-1 items-center justify-end gap-2">
          {/* TODO i18n: re-habilitar <LocaleToggle /> cuando exista traducción real. */}
          <Button
            variant="outline"
            size="sm"
            className="rounded-full px-4 border-border/80"
            render={<a href="/contacto/" />}
          >
            DEMO Gratuita
          </Button>
          <Button
            size="sm"
            className="rounded-full bg-brand-navy text-white hover:bg-brand-navy/90 px-4"
            render={<a href="https://grm.fideltour.com" target="_blank" rel="noopener noreferrer" />}
          >
            Iniciar Sesión
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}

/**
 * Versión "lite" del FeaturedCard del desktop para el sheet móvil.
 * Sin vídeo ni thumbnail — solo eyebrow + título + descripción + CTA
 * píldora blanca sobre navy para que el botón sea el ancla visual sin
 * recurrir al cian como fondo (es accent, no destacado — ver docs/brand-system.md).
 */
function MobileFeaturedCard() {
  return (
    <Link
      href={platformFeatured.ctaHref}
      className="group mb-4 block rounded-2xl bg-brand-navy p-5 text-white shadow-soft"
    >
      <div className="text-eyebrow text-white/80">
        {platformFeatured.eyebrow}
      </div>
      <div className="mt-1 text-base font-bold text-white">
        {platformFeatured.title}
      </div>
      <p className="mt-1 text-sm text-white/80">
        {platformFeatured.description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-navy transition-colors group-hover:bg-white/90">
        {platformFeatured.ctaLabel}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

function FeaturedCard() {
  return (
    <div className="flex flex-col rounded-lg bg-brand-navy p-5 text-white">
      <div className="text-eyebrow text-white/80">
        {platformFeatured.eyebrow}
      </div>
      <h3 className="mt-2 text-white">{platformFeatured.title}</h3>
      <p className="mt-2 text-sm text-white/80">
        {platformFeatured.description}
      </p>

      <NavigationMenuLink
        closeOnClick
        className="mt-5 p-0 hover:bg-transparent focus:bg-transparent"
        render={
          <Link
            href={platformFeatured.ctaHref}
            className="group/cta inline-flex items-center justify-center gap-1.5 self-start rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:bg-white/90"
          >
            {platformFeatured.ctaLabel}
            <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-0.5" />
          </Link>
        }
      />
    </div>
  );
}

/**
 * Mapeo nº-categorías → utility de grid. Permite que el mega-menú se
 * adapte sin tocar este componente si añadimos/quitamos una categoría
 * en `lib/content/module-landings/index.ts`. Si se supera 5, añadir
 * `.grid-mega-N` en globals.css y la entrada aquí.
 */
const megaCols: Record<number, string> = {
  3: "grid-mega-3",
  4: "grid-mega-4",
  5: "grid-mega-5",
};

/**
 * Overrides para que los fondos hover/open de Base UI no compitan con la
 * pastilla animada (motion `layoutId="nav-hover-pill"`). Mantenemos el
 * focus-visible:ring del primitive para teclado — solo neutralizamos el
 * fondo. Si añades un estado data-* nuevo en `components/ui/navigation-menu.tsx`
 * con bg propio, replícalo aquí o la pastilla se solapará.
 */
const navTriggerOverride =
  "relative z-10 text-base hover:bg-transparent focus:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent data-open:bg-transparent data-open:hover:bg-transparent data-open:focus:bg-transparent";

const navLinkOverride =
  "relative z-10 px-2.5 py-1.5 text-base font-medium text-foreground/80 hover:bg-transparent hover:text-foreground focus:bg-transparent data-active:bg-transparent";

function NavHoverPill() {
  return (
    <motion.span
      layoutId="nav-hover-pill"
      aria-hidden
      transition={{ type: "spring", stiffness: 380, damping: 32 }}
      className="pointer-events-none absolute inset-0 rounded-lg bg-primary/10"
    />
  );
}

/**
 * Icono por canal de la franja Multicanalidad. Keyed por label (el mismo
 * que viene de `module-landings/index.ts` → "Email", "Whatsapp", "SMS",
 * "Web Push", "App Push"). Si renombras un label allí, actualiza también
 * este mapa — si no hay match, el chip cae al fallback (MessageCircle).
 */
const channelIcons: Record<string, LucideIcon> = {
  Email: Mail,
  Whatsapp: MessageCircle,
  SMS: MessageSquare,
  "Web Push": Bell,
  "App Push": Smartphone,
};

/**
 * Multicanalidad en grid 2+2+1: si el grupo tiene un nº impar de items,
 * el último ocupa las dos columnas y se centra en `w-1/2` para verse
 * visualmente igual de ancho que las parejas de arriba.
 */
function MultichannelList({
  group,
}: {
  group: (typeof platformGroups)[number];
}) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4 shadow-soft">
      <div className="text-eyebrow text-brand-navy">{group.title}</div>
      <ul className="mt-3 grid grid-cols-2 gap-1.5">
        {group.items.map((item, idx) => {
          const Icon = channelIcons[item.label] ?? MessageCircle;
          const isLastOdd =
            group.items.length % 2 === 1 &&
            idx === group.items.length - 1;
          return (
            <li
              key={item.label}
              className={cn(isLastOdd && "col-span-2 flex justify-center")}
            >
              <NavigationMenuLink
                closeOnClick
                className="text-sm rounded-md p-0 hover:bg-transparent focus:bg-transparent"
                render={
                  <Link
                    href={item.href}
                    className={cn(
                      "group/channel flex w-full items-center justify-center gap-2 rounded-md border border-border/60 bg-background px-2.5 py-2 text-sm font-medium text-foreground/85 transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary",
                      isLastOdd && "w-1/2",
                    )}
                  >
                    <Icon
                      className="size-3.5 shrink-0 text-foreground/70 transition-colors group-hover/channel:text-primary"
                      aria-hidden
                    />
                    <span>{item.label}</span>
                  </Link>
                }
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function DesktopNav() {
  const [hoveredKey, setHoveredKey] = React.useState<string | null>(null);
  /**
   * Layout del mega-menú:
   *   - Izquierda: pastilla "Del CRM al CDP" con CTA píldora blanca (sin vídeo).
   *   - Derecha (apilado): grid de 3 categorías + franja horizontal de
   *     Multicanalidad con iconos por canal. Aprovecha el hueco que
   *     dejaba la columna izquierda al perder el iframe.
   */
  const mainGroups = platformGroups.filter(
    (g) => g.title !== "Multicanalidad",
  );
  const multichannel = platformGroups.find((g) => g.title === "Multicanalidad");
  const colsClass = megaCols[mainGroups.length] ?? "grid-mega-3";

  return (
    <NavigationMenu className="hidden lg:flex" fullBleed>
      <NavigationMenuList
        className="gap-0.5"
        onMouseLeave={() => setHoveredKey(null)}
      >
        <NavigationMenuItem
          className="relative"
          onMouseEnter={() => setHoveredKey("platform")}
        >
          {hoveredKey === "platform" && <NavHoverPill />}
          <NavigationMenuTrigger className={navTriggerOverride}>
            Plataforma
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-[min(96vw,1320px)] items-start gap-6 p-6">
              <div className="flex w-[22%] shrink-0 flex-col gap-4">
                <FeaturedCard />
                {multichannel && <MultichannelList group={multichannel} />}
              </div>
              <div
                className={cn(
                  "grid flex-1 grid-rows-[auto_auto_1fr] gap-x-6",
                  colsClass,
                )}
              >
                {mainGroups.map((group) => (
                  <div
                    key={group.title}
                    className="row-span-3 grid grid-rows-subgrid"
                  >
                    <div className="text-base font-bold text-brand-navy">
                      {group.title}
                    </div>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {group.description}
                    </p>
                    <ul className="mt-4 space-y-1">
                      {group.items.map((item) => (
                        <li key={item.label}>
                          <NavigationMenuLink
                            closeOnClick
                            className="text-base"
                            render={
                              <Link
                                href={item.href}
                                className="text-base font-medium text-foreground/90 transition-colors hover:text-primary"
                              >
                                {item.label}
                              </Link>
                            }
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {topNavLinks.map((link) => (
          <NavigationMenuItem
            key={link.label}
            className="relative"
            onMouseEnter={() => setHoveredKey(link.label)}
          >
            {hoveredKey === link.label && <NavHoverPill />}
            <NavigationMenuLink
              className="text-base hover:bg-transparent focus:bg-transparent"
              render={
                <Link href={link.href} className={navLinkOverride}>
                  {link.label}
                </Link>
              }
            />
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav() {
  const [open, setOpen] = React.useState(false);

  // Base UI Dialog no se entera del cambio de ruta de next/link, así que el
  // sheet quedaba abierto tras navegar. Lo cerramos por delegación cuando se
  // hace click en un enlace dentro del sheet. El trigger del accordion es un
  // <button> (no un <a>), así que expandir "Plataforma" no cierra el menú.
  const closeOnLinkClick = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLElement).closest("a")) {
      setOpen(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Abrir menú"
            className="md:hidden"
          >
            <MenuIcon />
          </Button>
        }
      />
      <SheetContent side="right" className="w-full max-w-sm">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <nav
          className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 pb-4"
          onClick={closeOnLinkClick}
        >
          <MobileFeaturedCard />
          <Accordion className="border-b border-border pb-2">
            <AccordionItem value="platform" className="border-0">
              <AccordionTrigger className="py-2 text-base font-medium">
                Plataforma
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pl-1">
                  {platformGroups.map((group) => (
                    <div key={group.title}>
                      <div className="text-eyebrow-sm text-muted-foreground">
                        {group.title}
                      </div>
                      <ul className="mt-1 space-y-1">
                        {group.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="block py-1 text-sm text-foreground/90"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {topNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md px-2 py-2 text-base font-medium text-foreground/90 hover:bg-muted"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div
          className="flex flex-col gap-2 border-t border-border p-4"
          onClick={closeOnLinkClick}
        >
          {/* TODO i18n: re-habilitar <LocaleToggle className="self-start" /> cuando exista traducción real. */}
          <Button
            variant="outline"
            size="sm"
            className="justify-center rounded-full"
            render={<a href="/contacto/" />}
          >
            DEMO Gratuita
          </Button>
          <Button
            size="sm"
            className="justify-center rounded-full bg-brand-navy text-white hover:bg-brand-navy/90"
            render={<a href="https://grm.fideltour.com" target="_blank" rel="noopener noreferrer" />}
          >
            Iniciar Sesión
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
