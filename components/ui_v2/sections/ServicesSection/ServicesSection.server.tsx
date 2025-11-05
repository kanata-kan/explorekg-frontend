// 🧱 components/ui_v2/sections/ServicesSection/ServicesSection.server.tsx
import { getServices } from "@/lib/api/services";
import ServicesSectionClient from "./ServicesSection.client";

export default async function ServicesSectionServer({
  locale = "en",
}: {
  locale?: string;
}) {
  const services = await getServices(locale);

  return <ServicesSectionClient services={services} locale={locale} />;
}
