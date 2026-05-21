import type { Metadata } from "next";

import { AuditoriaHeroSection } from "@/components/sections/auditoria-hero";
import { AuditoriaBeneficiosSection } from "@/components/sections/auditoria-beneficios";
import { AuditoriaFormSection } from "@/components/sections/auditoria-form";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";

const TITLE = "Auditoría de fidelización gratuita para hoteles";
const DESCRIPTION =
  "Solicita una auditoría de fidelización gratuita y descubre cómo hacer crecer tu base de datos, aumentar la venta directa y reducir la dependencia de OTAs.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/auditoria-gratuita-hotel/" },
  openGraph: {
    url: "/auditoria-gratuita-hotel/",
    title: `${TITLE} · Fideltour`,
    description: DESCRIPTION,
  },
  twitter: {
    title: `${TITLE} · Fideltour`,
    description: DESCRIPTION,
  },
};

const faqItems = [
  {
    question: "¿Qué es la auditoría de fidelización de Fideltour?",
    answer:
      "Es un análisis personalizado que muestra el potencial de crecimiento de tu base de datos, el aumento de venta directa que puedes lograr y el ahorro que supone la fidelización frente a las OTAs.",
  },
  {
    question: "¿Cuánto cuesta la auditoría?",
    answer:
      "La auditoría es totalmente gratuita y sin compromiso. Solo necesitas rellenar el formulario con los datos de tu hotel.",
  },
  {
    question: "¿Cuánto tarda en llegar el informe?",
    answer:
      "Te enviamos tu informe personalizado por email en menos de 24h laborables tras completar el formulario.",
  },
  {
    question: "¿Para qué hoteles está pensada?",
    answer:
      "Para hoteles independientes, cadenas y grupos hoteleros que quieran dominar su dato y construir relaciones rentables con sus huéspedes.",
  },
];

export default function AuditoriaGratuitaHotelPage() {
  return (
    <>
      <WebPageJsonLd
        path="/auditoria-gratuita-hotel/"
        title={`${TITLE} · Fideltour`}
        description={DESCRIPTION}
      />
      <BreadcrumbJsonLd
        items={[
          {
            name: "Auditoría gratuita",
            path: "/auditoria-gratuita-hotel/",
          },
        ]}
      />
      <FaqJsonLd items={faqItems} />
      <AuditoriaHeroSection />
      <AuditoriaBeneficiosSection />
      <AuditoriaFormSection />
    </>
  );
}
