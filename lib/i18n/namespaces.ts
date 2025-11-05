// lib/i18n/namespaces.ts
// ===================================================================
// 🌍 i18n Namespace Registry - Centralized namespace management
// ===================================================================

/**
 * Centralized registry for all i18n namespaces in the application.
 * Use these constants instead of hardcoded strings to avoid typos and
 * enable better refactoring and IDE autocomplete.
 *
 * @example
 * import { I18N_NAMESPACES } from "@/lib/i18n/namespaces";
 * const t = useTranslations(I18N_NAMESPACES.PAGES.CARS);
 */
export const I18N_NAMESPACES = {
  // ===================================================================
  // Common (Shared across all pages)
  // ===================================================================
  COMMON: "common",

  // ===================================================================
  // Pages (Page-specific translations)
  // ===================================================================
  PAGES: {
    HOME: "pages.home",
    CARS: "pages.cars",
    ACTIVITIES: "pages.activities",
    GALLERY: "pages.gallery",
    TRAVEL_PACKS: "pages.travelPacks",
    CONTACT: "pages.contact",
    OUR_STORY: "pages.ourStory",
    PRIVACY: "pages.privacy",
    TERMS: "pages.terms",
  },

  // ===================================================================
  // Sections (Details pages & reusable sections)
  // ===================================================================
  SECTIONS: {
    CAR_DETAILS: "sections.carDetails",
    ACTIVITY_DETAILS: "sections.activityDetails",
    TRAVEL_PACK_DETAILS: "sections.travelPackDetails",
    SERVICES: "sections.services",
  },

  // ===================================================================
  // Components (UI components)
  // ===================================================================
  COMPONENTS: {
    LIGHTBOX: "components.lightbox",
    GALLERY: "components.gallery",
  },
} as const;

/**
 * Type-safe namespace values
 */
export type NamespaceValue =
  | typeof I18N_NAMESPACES.COMMON
  | (typeof I18N_NAMESPACES.PAGES)[keyof typeof I18N_NAMESPACES.PAGES]
  | (typeof I18N_NAMESPACES.SECTIONS)[keyof typeof I18N_NAMESPACES.SECTIONS]
  | (typeof I18N_NAMESPACES.COMPONENTS)[keyof typeof I18N_NAMESPACES.COMPONENTS];

/**
 * Helper to validate namespace at runtime
 */
export function isValidNamespace(
  namespace: string
): namespace is NamespaceValue {
  const allNamespaces = [
    I18N_NAMESPACES.COMMON,
    ...Object.values(I18N_NAMESPACES.PAGES),
    ...Object.values(I18N_NAMESPACES.SECTIONS),
    ...Object.values(I18N_NAMESPACES.COMPONENTS),
  ];
  return allNamespaces.includes(namespace as NamespaceValue);
}
