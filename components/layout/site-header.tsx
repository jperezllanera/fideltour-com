"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, MenuIcon, PlayCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/logo";
import { LocaleToggle } from "@/components/layout/locale-toggle";
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
        "bg-background/70 backdrop-blur-md supports-backdrop-filter:bg-background/55",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 md:px-6">
        <div className="flex flex-1 items-center">
          <Logo />
        </div>

        <DesktopNav />

        <div className="hidden md:flex flex-1 items-center justify-end gap-2">
          <LocaleToggle />
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
            render={<a href="https://sso.fideltour.com/login/" target="_blank" rel="noopener noreferrer" />}
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
 * Versión "lite" del FeaturedCard del desktop para el sheet móvil. NO
 * embebe el iframe (sería un peso brutal en mobile); muestra el thumbnail
 * estático de YouTube como hero y enlaza a la sección "Plataforma" de la
 * home, donde el visitante puede continuar el journey.
 */
function MobileFeaturedCard() {
  const thumb = `https://i.ytimg.com/vi/${platformFeatured.youtubeId}/hqdefault.jpg`;
  return (
    <Link
      href={platformFeatured.ctaHref}
      className="group mb-4 block overflow-hidden rounded-2xl bg-brand-navy text-white shadow-soft"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-black/40">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumb}
          alt=""
          aria-hidden
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/30 to-transparent"
        />
        <PlayCircle
          aria-hidden
          className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]"
        />
      </div>
      <div className="p-4">
        <div className="text-eyebrow text-white/80">
          {platformFeatured.eyebrow}
        </div>
        <div className="mt-1 text-base font-bold text-white">
          {platformFeatured.title}
        </div>
        <p className="mt-1 text-sm text-white/80">
          {platformFeatured.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-mint">
          {platformFeatured.ctaLabel}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

function FeaturedCard() {
  return (
    <div className="group flex flex-col rounded-lg bg-brand-navy p-5 text-white">
      <div className="text-eyebrow text-white/80">
        {platformFeatured.eyebrow}
      </div>
      <h3 className="mt-2 text-white">{platformFeatured.title}</h3>
      <p className="mt-2 text-sm text-white/80">
        {platformFeatured.description}
      </p>

      <div className="relative mt-4 aspect-video overflow-hidden rounded-md bg-black/40 ring-1 ring-white/10">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${platformFeatured.youtubeId}?rel=0&modestbranding=1`}
          title={`${platformFeatured.title} — vídeo`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      </div>

      <NavigationMenuLink
        render={
          <Link
            href={platformFeatured.ctaHref}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-mint transition-colors hover:text-white"
          >
            {platformFeatured.ctaLabel}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
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

function DesktopNav() {
  const colsClass = megaCols[platformGroups.length] ?? "grid-mega-4";
  return (
    <NavigationMenu className="hidden lg:flex" fullBleed>
      <NavigationMenuList className="gap-1">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Plataforma</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex w-[min(96vw,1320px)] gap-6 p-6">
              <div className="w-[22%] shrink-0">
                <FeaturedCard />
              </div>
              <div className={cn("flex-1 grid gap-6", colsClass)}>
                {platformGroups.map((group) => (
                  <div key={group.title} className="flex flex-col">
                    <div className="text-sm font-bold text-brand-navy">
                      {group.title}
                    </div>
                    {group.description && (
                      <p className="mt-1.5 text-xs text-muted-foreground">
                        {group.description}
                      </p>
                    )}
                    <ul className="mt-4 space-y-3">
                      {group.items.map((item) => (
                        <li key={item.label}>
                          <NavigationMenuLink
                            render={
                              <Link
                                href={item.href}
                                className="group/item flex-col items-start gap-0 transition-colors"
                              >
                                <span className="text-sm font-medium text-foreground/90 transition-colors group-hover/item:text-primary">
                                  {item.label}
                                </span>
                                {item.description && (
                                  <span className="mt-0.5 block text-xs text-muted-foreground">
                                    {item.description}
                                  </span>
                                )}
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
          <NavigationMenuItem key={link.label}>
            <NavigationMenuLink
              render={
                <Link
                  href={link.href}
                  className="px-2.5 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground"
                >
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
  return (
    <Sheet>
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
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 pb-4">
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
        <div className="flex flex-col gap-2 border-t border-border p-4">
          <LocaleToggle className="self-start" />
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
            render={<a href="https://sso.fideltour.com/login/" target="_blank" rel="noopener noreferrer" />}
          >
            Iniciar Sesión
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
