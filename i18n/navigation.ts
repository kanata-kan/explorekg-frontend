// i18n/navigation.ts
import { createNavigation } from "next-intl/navigation";

export const locales = ["en", "fr"] as const;
export const defaultLocale = "en";

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  defaultLocale,
});
