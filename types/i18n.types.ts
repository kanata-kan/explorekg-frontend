// types/i18n.types.ts
// ===================================================================
// 🌍 i18n Type System - Type-safe translations
// ===================================================================

export type Locale = "en" | "fr";

// ===================================================================
// Translation Namespaces (Structured)
// ===================================================================
export type TranslationNamespace =
  | "common"
  | "pages.home"
  | "pages.cars"
  | "pages.activities"
  | "pages.gallery"
  | "pages.travelPacks"
  | "pages.contact"
  | "pages.ourStory"
  | "pages.privacy"
  | "pages.terms"
  | "sections.carDetails"
  | "sections.activityDetails"
  | "sections.travelPackDetails"
  | "sections.services"
  | "components.lightbox"
  | "components.gallery";

// ===================================================================
// Translation Keys (Type-safe access)
// ===================================================================
export interface CommonTranslations {
  actions: {
    viewAll: string;
    viewDetails: string;
    bookNow: string;
    back: string;
    submit: string;
    close: string;
  };
  navigation: {
    home: string;
    cars: string;
    activities: string;
    gallery: string;
    contact: string;
    ourStory: string;
    travelPacks: string;
  };
  welcome: string;
}

export interface PageTranslations {
  title: string;
  description: string;
}

export interface SectionTranslations {
  title?: string;
  subtitle?: string;
}

// ===================================================================
// Translation Messages Structure
// ===================================================================
export interface TranslationMessages {
  common: CommonTranslations;
  "pages.home": PageTranslations;
  "pages.cars": PageTranslations & {
    sectionTitle: string;
    sectionSubtitle: string;
  };
  "pages.activities": PageTranslations & {
    sectionTitle: string;
    sectionSubtitle: string;
  };
  "pages.gallery": PageTranslations & {
    sectionTitle: string;
    sectionSubtitle: string;
  };
  "pages.travelPacks": PageTranslations & {
    sectionTitle: string;
    sectionSubtitle: string;
  };
  "pages.contact": PageTranslations & {
    info: {
      title: string;
      mapLink: string;
    };
    socials: {
      title: string;
    };
    form: {
      title: string;
      submit: string;
    };
  };
  "pages.ourStory": PageTranslations & {
    heading: string;
    closing: string;
  };
  "pages.privacy": PageTranslations & {
    lastUpdated: string;
    section1: { title: string; text: string };
    section2: { title: string; text: string };
    section3: { title: string; text: string };
  };
  "pages.terms": PageTranslations & {
    lastUpdated: string;
    section1: { title: string; text: string };
    section2: { title: string; text: string };
    section3: { title: string; text: string };
  };
  "sections.carDetails": {
    about: string;
    book: string;
    back: string;
    seats: string;
    fuel: string;
    transmission: string;
    luggage: string;
    price: string;
    galleryTitle: string;
    galleryEmpty: string;
  };
  "sections.activityDetails": {
    aboutTitle: string;
    duration: string;
    location: string;
    groupSize: string;
    price: string;
    bookNow: string;
    backToActivities: string;
  };
  "sections.travelPackDetails": {
    featuresTitle: string;
    durationTitle: string;
    priceTitle: string;
    ctaButton: string;
    back: string;
  };
  "sections.services": SectionTranslations;
  "components.lightbox": {
    viewDetails: string;
    prev: string;
    next: string;
    close: string;
    swipeToNavigate: string;
  };
  "components.gallery": {
    noImages: string;
    loading: string;
    previousImage: string;
    nextImage: string;
    goToImage: string;
    currentImage: string;
    swipeHint: string;
    zoom: string;
    image: string;
    of: string;
    openGallery: string;
    moreImages: string;
    backToGallery: string;
  };
}

// ===================================================================
// Helper Types
// ===================================================================
export type TranslationKey<T extends TranslationNamespace> =
  keyof TranslationMessages[T];

export type TranslationValue<
  T extends TranslationNamespace,
  K extends TranslationKey<T>,
> = TranslationMessages[T][K];
