import type { Metadata } from "next";

import { PortalCautivoHeroSection } from "@/components/sections/portal-cautivo-hero";
import { PortalCautivoBeneficiosSection } from "@/components/sections/portal-cautivo-beneficios";
import { PortalCautivoFeaturesSection } from "@/components/sections/portal-cautivo-features";
import { PortalCautivoFaqSection } from "@/components/sections/portal-cautivo-faq";
import { PortalCautivoCtaSection } from "@/components/sections/portal-cautivo-cta";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";
import { portalFaq } from "@/lib/content/portal-cautivo";

const TITLE = "Integración de portal cautivo para hoteles";
const DESCRIPTION =
  "Conecta tu portal cautivo WiFi con Fideltour y convierte cada acceso en un dato identificado en el CRM. Activa campañas personalizadas y enriquece la ficha del huésped en tiempo real.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/integracion-portal-cautivo-para-hoteles/" },
  openGraph: {
    url: "/integracion-portal-cautivo-para-hoteles/",
    title: `${TITLE} · Fideltour`,
    description: DESCRIPTION,
  },
  twitter: {
    title: `${TITLE} · Fideltour`,
    description: DESCRIPTION,
  },
};

export default function PortalCautivoPage() {
  return (
    <>
      <WebPageJsonLd
        path="/integracion-portal-cautivo-para-hoteles/"
        title={`${TITLE} · Fideltour`}
        description={DESCRIPTION}
      />
      <BreadcrumbJsonLd
        items={[
          {
            name: "Portal cautivo",
            path: "/integracion-portal-cautivo-para-hoteles/",
          },
        ]}
      />
      <FaqJsonLd items={portalFaq} />
      <PortalCautivoHeroSection />
      <PortalCautivoBeneficiosSection />
      <PortalCautivoFeaturesSection />
      <PortalCautivoFaqSection />
      <PortalCautivoCtaSection />
    </>
  );
}
