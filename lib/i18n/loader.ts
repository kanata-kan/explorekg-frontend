// lib/i18n/loader.ts
// ===================================================================
// 🌍 i18n Lazy Loader - Load only required translation namespaces
// ===================================================================

import type { Locale } from "@/types/i18n.types";

/**
 * Dynamically load specific translation namespaces for a given locale.
 * This enables lazy loading and reduces initial bundle size.
 *
 * @param locale - The locale to load translations for (en/fr)
 * @param namespaces - Array of namespace paths to load
 * @returns Combined messages object with all requested namespaces
 *
 * @example
 * const messages = await loadNamespaces("en", [
 *   "common",
 *   "pages.cars",
 *   "sections.carDetails"
 * ]);
 */
export async function loadNamespaces(
  locale: Locale,
  namespaces: string[]
): Promise<Record<string, any>> {
  const messages: Record<string, any> = {};

  // Load all requested namespaces dynamically
  await Promise.all(
    namespaces.map(async (namespace) => {
      try {
        // Handle nested namespaces (e.g., "pages.cars" -> "pages/cars.json")
        const path = namespace.replace(".", "/");
        const loadedModule = await import(`@/messages/${locale}/${path}.json`);
        messages[namespace] = loadedModule.default;
      } catch (error) {
        console.warn(
          `[i18n] Failed to load namespace "${namespace}" for locale "${locale}":`,
          error
        );
        // Fallback to empty object to prevent crashes
        messages[namespace] = {};
      }
    })
  );

  return messages;
}

/**
 * Load common translations that are shared across all pages.
 * Always include this in your page-level loading.
 *
 * @param locale - The locale to load
 * @returns Common translations object
 *
 * @example
 * const commonMessages = await loadCommonMessages("en");
 */
export async function loadCommonMessages(locale: Locale): Promise<any> {
  try {
    const loadedModule = await import(`@/messages/${locale}/common.json`);
    return { common: loadedModule.default };
  } catch (error) {
    console.error(
      `[i18n] Failed to load common messages for locale "${locale}":`,
      error
    );
    return { common: {} };
  }
}

/**
 * Load page-specific translations along with common translations.
 * This is the recommended way to load translations for most pages.
 *
 * @param locale - The locale to load
 * @param pageNamespaces - Array of page-specific namespaces
 * @returns Combined messages with common + page namespaces
 *
 * @example
 * const messages = await loadPageMessages("en", ["pages.cars", "sections.carDetails"]);
 */
export async function loadPageMessages(
  locale: Locale,
  pageNamespaces: string[]
): Promise<Record<string, any>> {
  const [commonMessages, pageMessages] = await Promise.all([
    loadCommonMessages(locale),
    loadNamespaces(locale, pageNamespaces),
  ]);

  return { ...commonMessages, ...pageMessages };
}

/**
 * Preload all translations for a locale (for SSR/SSG).
 * Use sparingly as it loads everything.
 *
 * @param locale - The locale to load
 * @returns All translations for the locale (flattened for next-intl)
 */
export async function loadAllMessages(
  locale: Locale
): Promise<Record<string, any>> {
  try {
    // Load all namespaces
    const [
      common,
      home,
      cars,
      activities,
      gallery,
      travelPacks,
      contact,
      ourStory,
      privacy,
      terms,
      carDetails,
      activityDetails,
      travelPackDetails,
      services,
      lightbox,
      galleryComponent,
    ] = await Promise.all([
      import(`@/messages/${locale}/common.json`),
      import(`@/messages/${locale}/pages/home.json`),
      import(`@/messages/${locale}/pages/cars.json`),
      import(`@/messages/${locale}/pages/activities.json`),
      import(`@/messages/${locale}/pages/gallery.json`),
      import(`@/messages/${locale}/pages/travel-packs.json`),
      import(`@/messages/${locale}/pages/contact.json`),
      import(`@/messages/${locale}/pages/our-story.json`),
      import(`@/messages/${locale}/pages/privacy.json`),
      import(`@/messages/${locale}/pages/terms.json`),
      import(`@/messages/${locale}/sections/car-details.json`),
      import(`@/messages/${locale}/sections/activity-details.json`),
      import(`@/messages/${locale}/sections/travel-pack-details.json`),
      import(`@/messages/${locale}/sections/services.json`),
      import(`@/messages/${locale}/components/lightbox.json`),
      import(`@/messages/${locale}/components/gallery.json`),
    ]);

    // Return as flat structure for next-intl
    return {
      common: common.default,
      home: home.default,
      homePage: home.default, // Alias
      carsPage: cars.default,
      carsSection: cars.default, // المكونات تستخدم carsSection
      activitiesPage: activities.default,
      activities: activities.default, // المكونات تستخدم activities
      galleryPage: gallery.default,
      gallery: gallery.default, // المكونات تستخدم gallery
      travelPacksPage: travelPacks.default,
      travelPacks: travelPacks.default, // المكونات تستخدم travelPacks
      contactPage: contact.default,
      contact: contact.default,
      ourStoryPage: ourStory.default,
      ourStory: ourStory.default,
      privacyPage: privacy.default,
      terms: terms.default,
      carDetails: carDetails.default,
      carGallery: carDetails.default, // نفس الترجمات
      activityDetails: activityDetails.default,
      travelPackDetails: travelPackDetails.default,
      servicesSection: services.default,
      lightbox: lightbox.default,
      ResponsiveGallery: galleryComponent.default,
      galleryDetails: galleryComponent.default,
    };
  } catch (error) {
    console.error(
      `[i18n] Failed to load all messages for locale "${locale}":`,
      error
    );
    return {};
  }
}
