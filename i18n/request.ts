// i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { loadAllMessages } from "@/lib/i18n/loader";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = routing.locales.includes(
    (requested as (typeof routing.locales)[number]) ?? ""
  )
    ? (requested as (typeof routing.locales)[number])
    : routing.defaultLocale;

  // Load all messages using the new structured system
  const messages = await loadAllMessages(locale);

  return {
    locale,
    messages,
  };
});
