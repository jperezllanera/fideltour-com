import { MousePointerClick, ScanSearch, Tag } from "lucide-react";

import type { ModuleLanding } from "./_types";

export const webLanding: ModuleLanding = {
  slug: "integracion-pagina-web-para-hoteles",
  category: "data-import",
  navLabel: "Web Data",
  meta: {
    title: "Integración de página web para hoteles",
    description:
      "Convierte la navegación de tu web en una fuente continua de datos. Conecta la página web de tu hotel con Fideltour y transforma visitantes anónimos en conocimiento accionable dentro del CDP.",
  },
  hero: {
    eyebrow: "Data Import · Web Data",
    title: "Integra tu página web con Fideltour.",
    titleAccent: "página web",
    lead:
      "Convierte la navegación de tu web en una fuente continua de datos. Conecta la página web de tu hotel con Fideltour y transforma visitantes anónimos en conocimiento accionable dentro de tu CDP.",
    ctaLabel: "Solicitar demo",
  },
  miniCards: [
    {
      title: "Captación del dato anónimo",
      description:
        "Cada visita se convierte en información útil para tu CDP, antes de la identificación.",
      icon: ScanSearch,
    },
    {
      title: "Detección de intereses en tiempo real",
      description:
        "Analiza qué busca cada usuario en tu web y alimenta su perfil de intereses.",
      icon: Tag,
    },
    {
      title: "Activación desde el primer clic",
      description:
        "Impacta al visitante incluso antes de que se identifique formalmente.",
      icon: MousePointerClick,
    },
  ],
  pillars: [
    {
      title: "Tracking completo de navegación",
      description:
        "Páginas vistas, clics, tiempo en página y recorridos quedan registrados automáticamente sin cookies de terceros.",
      metric: "First-party · 100%",
    },
    {
      title: "Identificación progresiva del usuario",
      description:
        "El visitante anónimo se convierte en perfil identificado cuando deja un dato o realiza una acción clave.",
      metric: "Identity · stitching",
    },
    {
      title: "Intereses dinámicos por comportamiento",
      description:
        "Cada URL y sección visitada alimenta los intereses del usuario dentro del CRM, sin reglas manuales.",
      metric: "Tagging · automático",
    },
    {
      title: "Matching automático con el CRM",
      description:
        "Cuando el usuario se identifica, todo su histórico anónimo se asocia a su ficha de contacto.",
      metric: "Backfill · histórico",
    },
  ],
  benefits: [
    {
      title: "Respuesta inmediata 24/7",
      description:
        "El comportamiento web se registra y activa en tiempo real, sin depender de procesos manuales ni jobs nocturnos.",
    },
    {
      title: "Integración nativa en Fideltour",
      description:
        "Conecta la web con CRM, CDP, Campaigns, Automation y Reporting desde un único entorno.",
    },
    {
      title: "Impulsa la personalización",
      description:
        "Activa campañas, automatizaciones y experiencias basadas en intereses reales, no suposiciones.",
    },
  ],
  faq: [
    {
      question: "¿Qué necesito para integrar mi página web?",
      answer:
        "Solo es necesario insertar el tag de Fideltour en la web (preferiblemente vía Google Tag Manager) y definir qué eventos y comportamientos se quieren medir. El sistema respeta el consentimiento de cookies y permite unificar la navegación anónima con el perfil del huésped cuando se identifica.",
    },
    {
      question: "¿Cuánto se tarda en activar la integración?",
      answer:
        "La integración básica de tracking y navegación puede activarse en pocos días una vez se tiene acceso técnico. Configuraciones más avanzadas (eventos, formularios o motor de reservas) requieren algo más de tiempo según el alcance.",
    },
    {
      question: "¿Qué coste tiene?",
      answer:
        "El coste depende del nivel de integración y de los módulos de Fideltour que se activen (CRM, automatizaciones, formularios o integraciones adicionales). Siempre se define en función del alcance real para asegurar retorno y escalabilidad.",
    },
    {
      question: "¿Cumple con el consentimiento de cookies y RGPD?",
      answer:
        "Sí. El tag respeta el consentimiento del usuario configurado en tu CMP y solo activa la captura de datos en los modos autorizados, en línea con RGPD y las guías de la AEPD.",
    },
  ],
};
