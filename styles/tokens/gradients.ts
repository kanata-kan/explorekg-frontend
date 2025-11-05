/**
 * Gradient System
 * Unified gradient presets instead of manual definitions per component
 * Organized by category for easy discovery and consistent usage
 */

import { colorScales } from "./colorScales";
import { opacity } from "./opacity";

// Brand Gradients
export const brandGradients = {
  // Primary to accent
  primaryToAccent: `linear-gradient(135deg, ${colorScales.orange[500]} 0%, ${colorScales.emerald[500]} 100%)`,

  // Primary variations
  primaryLight: `linear-gradient(135deg, ${colorScales.orange[400]} 0%, ${colorScales.orange[600]} 100%)`,
  primaryDark: `linear-gradient(135deg, ${colorScales.orange[600]} 0%, ${colorScales.orange[800]} 100%)`,
  primaryBright: `linear-gradient(135deg, ${colorScales.orange[300]} 0%, ${colorScales.orange[500]} 100%)`,

  // Accent variations
  accentLight: `linear-gradient(135deg, ${colorScales.emerald[400]} 0%, ${colorScales.emerald[600]} 100%)`,
  accentBright: `linear-gradient(135deg, ${colorScales.emerald[500]} 0%, ${colorScales.emerald[300]} 100%)`,
  accentGreen: `linear-gradient(135deg, ${colorScales.green[500]} 0%, ${colorScales.green[700]} 100%)`,
} as const;

// Status Gradients
export const statusGradients = {
  success: `linear-gradient(135deg, ${colorScales.green[500]} 0%, ${colorScales.green[700]} 100%)`,
  danger: `linear-gradient(135deg, ${colorScales.red[500]} 0%, ${colorScales.red[700]} 100%)`,
  warning: `linear-gradient(135deg, ${colorScales.amber[400]} 0%, ${colorScales.amber[600]} 100%)`,
  info: `linear-gradient(135deg, ${colorScales.blue[500]} 0%, ${colorScales.blue[700]} 100%)`,
} as const;

// Overlay Gradients
export const overlayGradients = {
  // Directional overlays (for images & hero sections)
  toBottom: `linear-gradient(to bottom, rgba(0, 0, 0, ${opacity[0]}) 0%, rgba(0, 0, 0, ${opacity[70]}) 100%)`,
  toTop: `linear-gradient(to top, rgba(0, 0, 0, ${opacity[0]}) 0%, rgba(0, 0, 0, ${opacity[70]}) 100%)`,
  toLeft: `linear-gradient(to left, rgba(0, 0, 0, ${opacity[0]}) 0%, rgba(0, 0, 0, ${opacity[70]}) 100%)`,
  toRight: `linear-gradient(to right, rgba(0, 0, 0, ${opacity[0]}) 0%, rgba(0, 0, 0, ${opacity[70]}) 100%)`,

  // Full overlay (for OurStory section)
  full: `linear-gradient(to bottom, rgba(0, 0, 0, ${opacity[45]}) 0%, rgba(0, 0, 0, ${opacity[70]}) 40%, rgba(0, 0, 0, ${opacity[90]}) 100%)`,

  // Light overlays
  subtleBottom: `linear-gradient(to bottom, rgba(0, 0, 0, ${opacity[0]}) 0%, rgba(0, 0, 0, ${opacity[30]}) 100%)`,
  subtleTop: `linear-gradient(to top, rgba(0, 0, 0, ${opacity[0]}) 0%, rgba(0, 0, 0, ${opacity[30]}) 100%)`,

  // White overlays (for light backgrounds)
  whiteBottom: `linear-gradient(to bottom, rgba(255, 255, 255, ${opacity[0]}) 0%, rgba(255, 255, 255, ${opacity[90]}) 100%)`,
  whiteTop: `linear-gradient(to top, rgba(255, 255, 255, ${opacity[0]}) 0%, rgba(255, 255, 255, ${opacity[90]}) 100%)`,
} as const;

// Background Gradients
export const backgroundGradients = {
  // Light theme backgrounds
  light: {
    subtle: `linear-gradient(180deg, #FDFDFD 0%, ${colorScales.gray[50]} 100%)`,
    surface: `linear-gradient(135deg, #FFFFFF 0%, ${colorScales.gray[50]} 100%)`,
    warmth: `linear-gradient(180deg, ${colorScales.orange[50]} 0%, #FFFFFF 100%)`,
    fresh: `linear-gradient(180deg, ${colorScales.emerald[50]} 0%, #FFFFFF 100%)`,
  },

  // Dark theme backgrounds
  dark: {
    subtle: `linear-gradient(180deg, ${colorScales.navy[950]} 0%, ${colorScales.navy[900]} 100%)`,
    surface: `linear-gradient(135deg, ${colorScales.slate[800]} 0%, ${colorScales.slate[700]} 100%)`,
    warmth: `linear-gradient(180deg, ${colorScales.navy[950]} 0%, ${colorScales.navy[900]} 100%)`,
    fresh: `linear-gradient(180deg, ${colorScales.navy[950]} 0%, ${colorScales.slate[900]} 100%)`,
  },
} as const;

// Effect Gradients
export const effectGradients = {
  // Shimmer effect (for loading states)
  shimmer: `linear-gradient(90deg, transparent, rgba(255, 255, 255, ${opacity[20]}), transparent)`,
  shimmerDark: `linear-gradient(90deg, transparent, rgba(255, 255, 255, ${opacity[10]}), transparent)`,

  // Glass effect backgrounds
  glassLight: `linear-gradient(135deg, rgba(255, 255, 255, ${opacity.glass.light}) 0%, rgba(255, 255, 255, ${opacity.glass.medium}) 100%)`,
  glassDark: `linear-gradient(135deg, rgba(255, 255, 255, ${opacity.glass.medium}) 0%, rgba(255, 255, 255, ${opacity.glass.heavy}) 100%)`,

  // Rainbow (for special occasions)
  rainbow: `linear-gradient(135deg, 
    ${colorScales.red[500]} 0%, 
    ${colorScales.orange[500]} 20%, 
    ${colorScales.amber[400]} 40%, 
    ${colorScales.green[500]} 60%, 
    ${colorScales.blue[500]} 80%, 
    ${colorScales.blue[700]} 100%
  )`,
} as const;

// Combined Exports

export const gradients = {
  brand: brandGradients,
  status: statusGradients,
  overlay: overlayGradients,
  background: backgroundGradients,
  effect: effectGradients,
} as const;

// Light Theme Gradients (backward compatibility)
export const gradientsLight = {
  // Shortcuts for common use
  hero: backgroundGradients.light.subtle,
  surface: backgroundGradients.light.surface,
  overlayBottom: overlayGradients.toBottom,
  overlayFull: overlayGradients.full,
  shimmer: effectGradients.shimmer,

  // Include all sub-categories
  ...brandGradients,
  ...statusGradients,
} as const;

// Dark Theme Gradients (backward compatibility)
export const gradientsDark = {
  // Shortcuts for common use
  hero: backgroundGradients.dark.subtle,
  surface: backgroundGradients.dark.surface,
  overlayBottom: overlayGradients.toBottom,
  overlayFull: overlayGradients.full,
  shimmer: effectGradients.shimmerDark,

  // Include all sub-categories
  ...brandGradients,
  ...statusGradients,
} as const;

// Type Definitions
export type GradientCategory = keyof typeof gradients;
export type BrandGradient = keyof typeof brandGradients;
export type StatusGradient = keyof typeof statusGradients;
export type OverlayGradient = keyof typeof overlayGradients;
