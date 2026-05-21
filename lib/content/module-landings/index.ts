import type { ModuleLanding, ModuleNavEntry, ModuleCategory } from "./_types";
import { moduleCategoryOrder } from "./_types";

import { pmsLanding } from "./integracion-pms-para-hoteles";
import { crmLanding } from "./crm-hoteles";
import { motorReservasLanding } from "./integracion-motor-de-reservas-para-hoteles";
import { chatbotLanding } from "./integracion-chatbot-hoteles";
import { biLanding } from "./integracion-bi-hoteles";
import { webLanding } from "./integracion-pagina-web-para-hoteles";
import { landingPagesLanding } from "./landing-page-hoteles";
import { b2bLanding } from "./b2b-para-hoteles";
import { guestIdLanding } from "./guest-id-para-hoteles";
import { encuestasLanding } from "./encuestas-hoteles";
import { iaLanding } from "./inteligencia-artificial-para-hoteles";
import { reportingLanding } from "./reporting-y-analytics-para-hoteles";
import { campaignsLanding } from "./marketing-hoteles";
import { automationLanding } from "./marketing-automation-para-hoteles";
import { rewardsLanding } from "./fidelizacion-hoteles";
import { socialLanding } from "./redes-sociales-hoteles";
import { experiencesLanding } from "./experiencias-para-hoteles";
import { emailLanding } from "./email-para-hoteles";
import { whatsappLanding } from "./whatsapp-para-hoteles";
import { smsLanding } from "./sms-para-hoteles";
import { webPushLanding } from "./web-push-para-hoteles";
import { appPushLanding } from "./app-push-para-hoteles";

/**
 * Catálogo de los 23 módulos del CDP. Cada entrada lleva el slug WP
 * (preserva SEO heredado), la etiqueta corta del menú y la categoría.
 *
 * El orden por categoría coincide con el catálogo público de Fideltour:
 *   Data Import → Data Intelligence → Data Activation → Multicanalidad.
 *
 * Las 23 viven aquí para que el mega-menú y el sitemap puedan listarlas
 * aunque la landing aún no esté implementada en `app/`. Los slugs sin
 * landing devolverán 404 hasta que migremos su page.tsx — está previsto.
 */
export const moduleNavEntries: ModuleNavEntry[] = [
  // Data Import (6)
  { slug: "integracion-pms-para-hoteles", label: "PMS", description: "Sincroniza tu sistema de gestión y unifica cada estancia en el CDP.", category: "data-import" },
  { slug: "integracion-motor-de-reservas-para-hoteles", label: "Motor de reserva", description: "Captura cada paso del funnel y recupera abandonos de reserva directa.", category: "data-import" },
  { slug: "integracion-portal-cautivo-para-hoteles", label: "Portal cautivo", description: "Convierte cada conexión al WiFi en un perfil identificado del huésped.", category: "data-import" },
  { slug: "integracion-chatbot-hoteles", label: "Chatbot", description: "Recoge intención y datos del huésped antes incluso de la reserva.", category: "data-import" },
  { slug: "integracion-bi-hoteles", label: "BI & Analytics", description: "Conecta tu data warehouse y consolida un único dato hotelero.", category: "data-import" },
  { slug: "integracion-pagina-web-para-hoteles", label: "Web Data", description: "Tracking en web, app y kioscos sin depender de cookies de terceros.", category: "data-import" },

  // Data Intelligence (6)
  { slug: "crm-hoteles", label: "CRM", description: "Ficha 360º del huésped: histórico de estancias, gasto y trato.", category: "data-intelligence" },
  { slug: "b2b-para-hoteles", label: "Sales B2B", description: "Gestiona cuentas corporativas, agencias y grupos con la misma fuente de verdad.", category: "data-intelligence" },
  { slug: "guest-id-para-hoteles", label: "Identity", description: "Unifica huésped, hogar y reserva en un perfil único persistente.", category: "data-intelligence" },
  { slug: "encuestas-hoteles", label: "Reviews", description: "Reputación, NPS y feedback in-stay para actuar antes del review público.", category: "data-intelligence" },
  { slug: "inteligencia-artificial-para-hoteles", label: "IA", description: "Predice churn, upsell y next best offer con modelos del sector.", category: "data-intelligence" },
  { slug: "reporting-y-analytics-para-hoteles", label: "Data Reporting", description: "Cuadros de mando hoteleros en tiempo real, no exports a Excel.", category: "data-intelligence" },

  // Data Activation (6)
  { slug: "marketing-hoteles", label: "Campaigns", description: "Campañas multicanal segmentadas con criterio hotelero, no plantillas genéricas.", category: "data-activation" },
  { slug: "marketing-automation-para-hoteles", label: "Automation", description: "Flujos pre, in y post-stay activados por el comportamiento real del huésped.", category: "data-activation" },
  { slug: "landing-page-hoteles", label: "Landings & Forms", description: "Páginas y formularios personalizados por segmento, sin pasar por agencia.", category: "data-activation" },
  { slug: "fidelizacion-hoteles", label: "Rewards", description: "Programa de puntos y beneficios que premia la reserva directa, no la OTA.", category: "data-activation" },
  { slug: "redes-sociales-hoteles", label: "Social", description: "Activa audiencias en Meta, Google y TTD con los segmentos vivos del CDP.", category: "data-activation" },
  { slug: "experiencias-para-hoteles", label: "Experiences", description: "Vende ancillaries y experiencias on-site con el contexto del huésped.", category: "data-activation" },

  // Multicanalidad (5)
  { slug: "email-para-hoteles", label: "Email", description: "Newsletters, transaccionales y campañas con tu dominio, diseño y deliverability.", category: "multicanalidad" },
  { slug: "whatsapp-para-hoteles", label: "Whatsapp", description: "Conversación oficial verificada para confirmaciones, atención y campañas opt-in.", category: "multicanalidad" },
  { slug: "sms-para-hoteles", label: "SMS", description: "Confirmaciones y alertas críticas con apertura >95% en minutos.", category: "multicanalidad" },
  { slug: "web-push-para-hoteles", label: "Web Push", description: "Notificaciones desde tu sitio para recuperar abandonos y promocionar ofertas.", category: "multicanalidad" },
  { slug: "app-push-para-hoteles", label: "App Push", description: "Engagement contextual en tu app desde el check-in al upsell.", category: "multicanalidad" },
];

/**
 * Landings ya migradas a este repo con su contenido completo.
 * El sitemap solo emite las URLs aquí registradas; el mega-menú emite
 * las 23 de `moduleNavEntries` y deja que el resto 404 hasta que se migren.
 */
export const moduleLandings: Record<string, ModuleLanding> = {
  [pmsLanding.slug]: pmsLanding,
  [crmLanding.slug]: crmLanding,
  [motorReservasLanding.slug]: motorReservasLanding,
  [chatbotLanding.slug]: chatbotLanding,
  [biLanding.slug]: biLanding,
  [webLanding.slug]: webLanding,
  [landingPagesLanding.slug]: landingPagesLanding,
  [b2bLanding.slug]: b2bLanding,
  [guestIdLanding.slug]: guestIdLanding,
  [encuestasLanding.slug]: encuestasLanding,
  [iaLanding.slug]: iaLanding,
  [reportingLanding.slug]: reportingLanding,
  [campaignsLanding.slug]: campaignsLanding,
  [automationLanding.slug]: automationLanding,
  [rewardsLanding.slug]: rewardsLanding,
  [socialLanding.slug]: socialLanding,
  [experiencesLanding.slug]: experiencesLanding,
  [emailLanding.slug]: emailLanding,
  [whatsappLanding.slug]: whatsappLanding,
  [smsLanding.slug]: smsLanding,
  [webPushLanding.slug]: webPushLanding,
  [appPushLanding.slug]: appPushLanding,
};

export const implementedModuleSlugs = Object.keys(moduleLandings);

export function getModulesByCategory(category: ModuleCategory): ModuleNavEntry[] {
  return moduleNavEntries.filter((m) => m.category === category);
}

/** Devuelve las 4 categorías en su orden canónico con sus entradas. */
export function getModuleCategoriesWithEntries(): {
  category: ModuleCategory;
  entries: ModuleNavEntry[];
}[] {
  return moduleCategoryOrder.map((category) => ({
    category,
    entries: getModulesByCategory(category),
  }));
}

export { pmsLanding, crmLanding };
export type {
  ModuleLanding,
  ModuleNavEntry,
  ModuleCategory,
  ModuleMiniCard,
  ModulePillar,
  ModuleBenefit,
  ModuleFaqItem,
} from "./_types";
export { moduleCategoryLabels, moduleCategoryDescriptions, moduleCategoryOrder } from "./_types";
