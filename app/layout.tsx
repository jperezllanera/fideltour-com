import type { Metadata } from "next";
import "./globals.css";

import { sans } from "./fonts";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

/**
 * Instrument Mono no está en el dataset embebido de `next/font/google` de
 * Next 16.2.6, por lo que se carga por `<link>` directo a Google Fonts.
 * TODO senior: si se quiere self-hosted, descargar el .woff2 y servirlo
 * vía `next/font/local` (igual que General Sans en `app/fonts.ts`).
 */

export const metadata: Metadata = {
  title: {
    default: "Fideltour — CDP para hoteles",
    template: "%s · Fideltour",
  },
  description:
    "Fideltour es la CDP para hoteles que unifica datos, reservas, estancias y comunicaciones para que los hoteleros dominen su venta directa.",
  metadataBase: new URL("https://fideltour.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${sans.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font --
            Carga externa intencionada porque Instrument Mono no está en el
            dataset de next/font/google de Next 16.2.6. */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Mono:ital@0;1&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
