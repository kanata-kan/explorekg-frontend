// lib/i18n/index.ts
// ===================================================================
// 🌍 i18n System - Central Export Point
// ===================================================================

// Namespaces Registry
export { I18N_NAMESPACES, isValidNamespace } from "./namespaces";
export type { NamespaceValue } from "./namespaces";

// Lazy Loading
export {
  loadNamespaces,
  loadCommonMessages,
  loadPageMessages,
  loadAllMessages,
} from "./loader";

// Safe Translation Hooks
export {
  useSafeTranslations,
  useSafeRichTranslations,
} from "./safe-translator";

// Logging & Debugging
export {
  logMissingTranslation,
  getMissingTranslations,
  clearMissingTranslations,
  generateMissingTranslationsReport,
  enableTranslationLogging,
  disableTranslationLogging,
  isTranslationLoggingEnabled,
} from "./logger";

// Re-export types
export type {
  Locale,
  TranslationNamespace,
  TranslationMessages,
  TranslationKey,
  TranslationValue,
} from "@/types/i18n.types";
