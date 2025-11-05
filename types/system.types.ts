/**
 * System Types — Environment, Config, and Context Types
 *
 * This file contains types related to the application's system-level
 * configuration, environment, and context.
 */

import { Locale } from "./enums";

/**
 * Page parameters type for Next.js App Router
 */
export type PageParams<T extends Record<string, any> = {}> = {
  params: Promise<T & { locale: Locale }>;
};

/**
 * Simple page params without Promise (for components)
 */
export type SimplePageParams<T extends Record<string, any> = {}> = {
  params: T & { locale: Locale };
};

/**
 * Layout props type
 */
export type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};

/**
 * Theme configuration type
 */
export type ThemeConfig = {
  isDark: boolean;
  toggleTheme: () => void;
};

/**
 * Theme context type
 */
export type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
  isDark: boolean;
};

/**
 * Metadata for SEO and social sharing
 */
export type Metadata = {
  title: string | null;
  description: string | null;
  path: string;
  image: string | null;
  alt: string | null;
};

/**
 * Complete metadata with required fields
 */
export type CompleteMetadata = {
  title: string;
  description: string;
  path: string;
  image: string;
  alt: string;
};

/**
 * Routing configuration
 */
export type RouteConfig = {
  path: string;
  locale?: Locale;
  params?: Record<string, string>;
};

/**
 * Navigation link type
 */
export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

/**
 * Translation namespace keys
 */
export type TranslationNamespace =
  | "common"
  | "home"
  | "cars"
  | "activities"
  | "travelPacks"
  | "gallery"
  | "contact"
  | "ourStory"
  | "services";

/**
 * Environment variables type (for type-safe access)
 */
export type EnvironmentVariables = {
  NODE_ENV: "development" | "production" | "test";
  NEXT_PUBLIC_SITE_URL?: string;
  NEXT_PUBLIC_API_URL?: string;
};

/**
 * Feature flags type
 */
export type FeatureFlags = {
  enableAnimations: boolean;
  enableLightbox: boolean;
  enableContactForm: boolean;
  enableDarkMode: boolean;
};

/**
 * Configuration for analytics or tracking
 */
export type AnalyticsConfig = {
  enabled: boolean;
  trackingId?: string;
  debug?: boolean;
};

/**
 * Error boundary fallback props
 */
export type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};
