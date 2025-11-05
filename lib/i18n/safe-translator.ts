// lib/i18n/safe-translator.ts
// ===================================================================
// 🌍 Safe Translation Hook - Fallback & Error Handling
// ===================================================================

"use client";

import { useTranslations, useLocale } from "next-intl";

/**
 * Safe translation hook with built-in fallback and error handling.
 * Returns a function that will never crash the app due to missing keys.
 *
 * @param namespace - The translation namespace to use
 * @returns Translation function with fallback support
 *
 * @example
 * const t = useSafeTranslations("pages.cars");
 * t("title"); // Returns translation or key if missing
 * t("unknownKey", "Default Text"); // Returns "Default Text" if key missing
 */
export function useSafeTranslations(namespace: string) {
  const t = useTranslations(namespace);
  const locale = useLocale();

  return (key: string, fallback?: string): string => {
    try {
      const translation = t(key);

      // Check if translation is actually missing (next-intl returns key if not found)
      if (!translation || translation === key) {
        if (process.env.NODE_ENV === "development") {
          console.warn(
            `[i18n] Missing translation: ${namespace}.${key} (locale: ${locale})`
          );
        }
        return fallback || key;
      }

      return translation;
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error(
          `[i18n] Translation error: ${namespace}.${key} (locale: ${locale})`,
          error
        );
      }
      return fallback || key;
    }
  };
}

/**
 * Safe rich translation with fallback.
 * Use for translations that include HTML/JSX formatting.
 *
 * @param namespace - The translation namespace to use
 * @returns Rich translation function with fallback
 *
 * @example
 * const t = useSafeRichTranslations("pages.home");
 * t("subtitle", {
 *   strong: (chunks) => <strong>{chunks}</strong>
 * });
 */
export function useSafeRichTranslations(namespace: string) {
  const t = useTranslations(namespace);
  const locale = useLocale();

  return (key: string, values?: any, fallback?: string): any => {
    try {
      return t.rich(key, values);
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error(
          `[i18n] Rich translation error: ${namespace}.${key} (locale: ${locale})`,
          error
        );
      }
      return fallback || key;
    }
  };
}
