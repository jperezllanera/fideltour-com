import { Fingerprint, ScanEye, UserPlus } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const guestIdLanding: ModuleLanding = {
  slug: "guest-id-para-hoteles",
  category: "data-intelligence",
  navLabel: "Identity",
  meta: {
    title: "Identity para hoteles · Identifica al huésped desde la primera visita",
    description:
      "Convierte visitantes anónimos de tu web en perfiles identificados dentro del CRM. Transforma la incertidumbre en datos valiosos para captar y fidelizar mejor.",
  },
  hero: {
    eyebrow: "Data Intelligence · Identity",
    title: "Empieza a utilizar Fideltour Identity.",
    titleAccent: "Fideltour Identity",
    lead:
      "Convierte visitantes anónimos de tu web en perfiles identificados dentro de tu CRM. Transforma la incertidumbre en datos valiosos para captar y fidelizar mejor.",
  },
  miniCards: [
    {
      title: "Identificación en tiempo real",
      description:
        "Descubre quién visita tu web y deja de trabajar a ciegas.",
      icon: ScanEye,
    },
    {
      title: "Datos enriquecidos en el CRM",
      description:
        "Cada visitante se convierte en un perfil con información útil.",
      icon: UserPlus,
    },
    {
      title: "Más leads cualificados",
      description:
        "Optimiza campañas y segmentación con contactos reales, no impresiones.",
      icon: Fingerprint,
    },
  ],
  pillars: [
    {
      title: "Identificación de usuarios anónimos",
      description:
        "Detecta y registra quién está detrás de cada visita a tu web, respetando consentimiento.",
      metric: "Identity · resolution",
    },
    {
      title: "Creación automática de perfiles",
      description:
        "Cada usuario identificado se convierte en un contacto dentro del CRM, listo para activar.",
      metric: "Profiles · auto-create",
    },
    {
      title: "Ficha de contacto siempre enriquecida",
      description:
        "Almacena comportamientos, fuentes y preferencias para activar campañas relevantes.",
      metric: "Signals · live",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Conecta Identity con Campaigns, Automation y Sales B2B para una visión 360º.",
      metric: "Activación · nativa",
    },
  ],
  benefits: [
    {
      title: "Respuesta inmediata 24/7",
      description:
        "Captura leads de forma continua, incluso cuando tu equipo no está conectado.",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Gestiona todos los perfiles desde el CRM sin herramientas externas ni sincronizaciones.",
    },
    {
      title: "Aumenta tu base de clientes potenciales",
      description:
        "Convierte visitas en contactos reales para impulsar captación y ventas.",
    },
  ],
  faq: [
    {
      question: "¿Qué necesito para empezar con Identity?",
      answer:
        "Solo activar el módulo en tu web e integrarlo con tu CRM Fideltour. Nuestro equipo te ayuda a configurar el tag y los eventos clave.",
    },
    {
      question: "¿Cuánto se tarda en activar Identity?",
      answer:
        "La implementación estándar se completa en 1–2 semanas.",
    },
    {
      question: "¿Qué coste tiene?",
      answer:
        "El precio depende del volumen de tráfico web monitorizado y perfiles generados. Tu account manager te prepara una propuesta a medida.",
    },
    {
      question: "¿Es compatible con el RGPD?",
      answer:
        "Sí. Identity respeta el consentimiento del usuario configurado en tu CMP y opera dentro del marco legal RGPD/LOPDGDD.",
    },
  ],
};
