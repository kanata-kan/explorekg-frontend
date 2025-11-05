// components/ui_v2/foundation/variantMap.ts

/**
 * UI Variant types used across the project
 * (for sections, backgrounds, hero blocks...)
 */
export type BaseVariant = "home" | "page" | "alt" | "dark" | "hero" | undefined;

/**
 * Variants supported by the SectionWrapper component
 */
export type SectionVariant = "default" | "alt" | "dark" | "hero" | undefined;

/**
 * 🔁 Maps UI_V2 variants to SectionWrapper variants
 * Keeps TypeScript safe + avoids duplication
 */
export function mapVariantToSection(variant: BaseVariant): SectionVariant {
  switch (variant) {
    case "alt":
      return "alt";
    case "dark":
      return "dark";
    case "hero":
      return "hero";
    default:
      return "default"; // "home" and "page" map here
  }
}
