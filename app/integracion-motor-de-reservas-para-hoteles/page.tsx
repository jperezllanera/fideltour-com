import type { Metadata } from "next";

import { ModuleLandingPage } from "@/components/sections/module-landing/module-landing-page";
import { buildModuleMetadata } from "@/lib/content/module-landings/_metadata";
import { motorReservasLanding } from "@/lib/content/module-landings/integracion-motor-de-reservas-para-hoteles";

export const metadata: Metadata = buildModuleMetadata(motorReservasLanding);

export default function MotorReservasPage() {
  return <ModuleLandingPage data={motorReservasLanding} />;
}
