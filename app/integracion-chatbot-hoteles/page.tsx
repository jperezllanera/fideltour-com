import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { chatbotLanding } from "@/lib/content/module-landings/integracion-chatbot-hoteles";

export const metadata: Metadata = buildModuleMetadata(chatbotLanding);

export default function ChatbotPage() {
  return <ModuleLandingPage data={chatbotLanding} />;
}
