"use client";

import * as React from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

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

export function SiteHeader() {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full",
        "border-b border-border/60",
        "bg-background/70 backdrop-blur-md supports-backdrop-filter:bg-background/55",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Logo />
          <DesktopNav />
        </div>

        <div className="hidden md:flex items-center gap-2">
          <LocaleToggle />
          <Button
            variant="outline"
            size="sm"
            className="rounded-full px-4 border-border/80"
            render={<a href="#demo" />}
          >
            DEMO Gratuita
          </Button>
          <Button
            size="sm"
            className="rounded-full bg-brand-navy text-white hover:bg-brand-navy/90 px-4"
            render={<a href="#login" />}
          >
            Iniciar Sesión
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}

function DesktopNav() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="gap-1">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Plataforma</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[min(92vw,920px)] grid-cols-4 gap-4 p-4">
              {platformGroups.map((group) => (
                <div key={group.title} className="space-y-2">
                  <div className="text-eyebrow text-muted-foreground">
                    {group.title}
                  </div>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item.label}>
                        <NavigationMenuLink
                          render={
                            <Link href={item.href} className="block">
                              <div className="text-sm font-medium text-foreground">
                                {item.label}
                              </div>
                              {item.description && (
                                <div className="mt-0.5 text-xs text-muted-foreground">
                                  {item.description}
                                </div>
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
            render={<a href="#demo" />}
          >
            DEMO Gratuita
          </Button>
          <Button
            size="sm"
            className="justify-center rounded-full bg-brand-navy text-white hover:bg-brand-navy/90"
            render={<a href="#login" />}
          >
            Iniciar Sesión
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
