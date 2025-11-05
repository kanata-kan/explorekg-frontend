/**
 * Enums & Constants — Application-wide Type-Safe Constants
 *
 * This file contains all enums and constant types used across the application.
 * Use these instead of string literals for better type safety.
 */

/**
 * Content block types for rich content pages
 */
export const ContentBlockType = {
  PARAGRAPH: "paragraph",
  HEADING: "heading",
  IMAGE: "image",
  LIST: "list",
  QUOTE: "quote",
} as const;

export type ContentBlockType =
  (typeof ContentBlockType)[keyof typeof ContentBlockType];

/**
 * Form field types for contact forms
 */
export const FormFieldType = {
  TEXT: "text",
  EMAIL: "email",
  TEXTAREA: "textarea",
  SELECT: "select",
  CHECKBOX: "checkbox",
} as const;

export type FormFieldType = (typeof FormFieldType)[keyof typeof FormFieldType];

/**
 * Typography variants for UI components
 */
export const TypographyVariant = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  BODY: "body",
  CAPTION: "caption",
} as const;

export type TypographyVariant =
  (typeof TypographyVariant)[keyof typeof TypographyVariant];

/**
 * Section variants for layout components
 */
export const SectionVariant = {
  DEFAULT: "default",
  ALT: "alt",
  DARK: "dark",
  HERO: "hero",
} as const;

export type SectionVariant =
  (typeof SectionVariant)[keyof typeof SectionVariant];

/**
 * Base variants for components
 */
export const BaseVariant = {
  HOME: "home",
  PAGE: "page",
  ALT: "alt",
  DARK: "dark",
  HERO: "hero",
} as const;

export type BaseVariant = (typeof BaseVariant)[keyof typeof BaseVariant];

/**
 * Overlay types for hero sections
 */
export const OverlayType = {
  DARK: "dark",
  LIGHT: "light",
  AUTO: "auto",
} as const;

export type OverlayType = (typeof OverlayType)[keyof typeof OverlayType];

/**
 * Alignment types for content
 */
export const AlignType = {
  CENTER: "center",
  LEFT: "left",
  RIGHT: "right",
} as const;

export type AlignType = (typeof AlignType)[keyof typeof AlignType];

/**
 * Supported locales
 */
export const Locale = {
  EN: "en",
  FR: "fr",
} as const;

export type Locale = (typeof Locale)[keyof typeof Locale];

/**
 * Status types for UI feedback
 */
export const StatusType = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
} as const;

export type StatusType = (typeof StatusType)[keyof typeof StatusType];

/**
 * Loading states
 */
export const LoadingState = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
} as const;

export type LoadingState = (typeof LoadingState)[keyof typeof LoadingState];

/**
 * Motion animation directions
 */
export const MotionDirection = {
  UP: "up",
  DOWN: "down",
  LEFT: "left",
  RIGHT: "right",
  NONE: "none",
} as const;

export type MotionDirection =
  (typeof MotionDirection)[keyof typeof MotionDirection];

/**
 * Responsive breakpoints (for reference)
 */
export const Breakpoint = {
  XS: "xs",
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl",
} as const;

export type Breakpoint = (typeof Breakpoint)[keyof typeof Breakpoint];
