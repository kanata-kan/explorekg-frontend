// lib/i18n/logger.ts
// ===================================================================
// 🌍 i18n Logger - Track missing translations
// ===================================================================

import type { Locale } from "@/types/i18n.types";

interface MissingTranslationLog {
  namespace: string;
  key: string;
  locale: Locale;
  timestamp: Date;
}

// In-memory store for missing translations (development only)
const missingTranslations: MissingTranslationLog[] = [];

/**
 * Log a missing translation key for debugging purposes.
 * Only logs in development mode.
 *
 * @param namespace - The namespace where the key is missing
 * @param key - The missing translation key
 * @param locale - The current locale
 *
 * @example
 * logMissingTranslation("pages.cars", "unknownKey", "en");
 */
export function logMissingTranslation(
  namespace: string,
  key: string,
  locale: Locale
): void {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const log: MissingTranslationLog = {
    namespace,
    key,
    locale,
    timestamp: new Date(),
  };

  // Check if already logged to avoid duplicates
  const exists = missingTranslations.some(
    (item) =>
      item.namespace === namespace && item.key === key && item.locale === locale
  );

  if (!exists) {
    missingTranslations.push(log);
    console.warn(
      `[i18n] Missing translation:\n` +
        `  Namespace: ${namespace}\n` +
        `  Key: ${key}\n` +
        `  Locale: ${locale}\n` +
        `  Time: ${log.timestamp.toISOString()}`
    );
  }
}

/**
 * Get all logged missing translations.
 * Useful for debugging and fixing missing keys.
 *
 * @returns Array of missing translation logs
 */
export function getMissingTranslations(): MissingTranslationLog[] {
  return [...missingTranslations];
}

/**
 * Clear the missing translations log.
 */
export function clearMissingTranslations(): void {
  missingTranslations.length = 0;
}

/**
 * Export missing translations as a formatted report.
 * Useful for generating reports to share with translators.
 *
 * @returns Formatted string report
 */
export function generateMissingTranslationsReport(): string {
  if (missingTranslations.length === 0) {
    return "No missing translations found! ✅";
  }

  const report = [
    "=".repeat(60),
    "Missing Translations Report",
    "=".repeat(60),
    `Total Missing: ${missingTranslations.length}`,
    "",
    "Details:",
    "-".repeat(60),
  ];

  missingTranslations.forEach((log, index) => {
    report.push(
      `${index + 1}. [${log.locale}] ${log.namespace}.${log.key}`,
      `   Time: ${log.timestamp.toLocaleString()}`,
      ""
    );
  });

  report.push("=".repeat(60));

  return report.join("\n");
}

/**
 * Enable/disable translation logging globally.
 */
let loggingEnabled = process.env.NODE_ENV === "development";

export function enableTranslationLogging(): void {
  loggingEnabled = true;
}

export function disableTranslationLogging(): void {
  loggingEnabled = false;
}

export function isTranslationLoggingEnabled(): boolean {
  return loggingEnabled;
}
