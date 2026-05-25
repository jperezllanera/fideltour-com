import type { Metadata } from "next";
import "./globals.css";

import { sans } from "./fonts";
import {
  ConsentModeDefault,
  TrackingNoScript,
  TrackingScripts,
} from "@/components/analytics/tracking-scripts";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import {
  OrganizationJsonLd,
  SoftwareApplicationJsonLd,
  WebsiteJsonLd,
} from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/seo/site";
import { env } from "@/lib/env";

export { viewport } from "./viewport";

/*
 * Metadata raíz — los hijos heredan y pueden sobreescribir título y
 * descripción. Los slots openGraph y twitter ya quedan resueltos aquí con
 * la imagen global (/opengraph-image), así que cada página solo necesita
 * declarar lo específico (title, description, alternates.canonical).
 *
 * `alternates.canonical: "/"` declara que la home es la URL canónica raíz;
 * Next combina automáticamente con `metadataBase` para emitir
 * https://fideltour.com/.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.category}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  generator: "Next.js",
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "technology",
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
    },
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/`,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.category}`,
    description: siteConfig.description,
    locale: siteConfig.locale,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.category}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.category}`,
    description: siteConfig.description,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  // TODO senior: pegar aquí los códigos reales tras dar de alta el dominio
  // en Google Search Console y Bing Webmaster Tools. Mientras tanto las
  // env vars actúan como interruptor — si están vacías, Next omite la
  // etiqueta meta correspondiente.
  ...(env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
  env.NEXT_PUBLIC_BING_SITE_VERIFICATION
    ? {
        verification: {
          ...(env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
            ? { google: env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
            : {}),
          ...(env.NEXT_PUBLIC_BING_SITE_VERIFICATION
            ? {
                other: {
                  "msvalidate.01": env.NEXT_PUBLIC_BING_SITE_VERIFICATION,
                },
              }
            : {}),
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang={siteConfig.defaultLanguage}
      className={`${sans.variable} h-full antialiased`}
    >
      <head>
        <ConsentModeDefault />
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <SoftwareApplicationJsonLd />
      </head>
      <body className="min-h-full flex flex-col">
        <TrackingNoScript />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <TrackingScripts />
      </body>
    </html>
  );
}
