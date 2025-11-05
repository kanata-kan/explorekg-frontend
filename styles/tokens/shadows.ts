/**
 * Shadows System
 * Unified shadow system using opacity tokens
 * Based on Material Design elevation levels
 */

import { opacity } from "./opacity";

// Light Theme Shadows
export const shadowsLight = {
  // Basic Elevations
  none: "none",
  xs: `0 1px 2px rgba(0, 0, 0, ${opacity[5]})`,
  sm: `0 2px 4px rgba(0, 0, 0, ${opacity[10]})`,
  md: `0 4px 8px rgba(0, 0, 0, ${opacity[15]})`,
  lg: `0 8px 16px rgba(0, 0, 0, ${opacity[15]})`,
  xl: `0 12px 24px rgba(0, 0, 0, ${opacity[20]})`,
  "2xl": `0 20px 40px rgba(0, 0, 0, ${opacity[20]})`,
  "3xl": `0 25px 50px rgba(0, 0, 0, ${opacity[25]})`,

  // Semantic Shadows (component-specific)
  card: `0 4px 10px rgba(0, 0, 0, ${opacity[5]})`,
  cardHover: `0 10px 25px rgba(0, 0, 0, ${opacity[10]})`,
  button: `0 2px 8px rgba(0, 0, 0, ${opacity[15]})`,
  buttonHover: `0 4px 12px rgba(0, 0, 0, ${opacity[20]})`,
  modal: `0 20px 50px rgba(0, 0, 0, ${opacity[30]})`,
  dropdown: `0 8px 20px rgba(0, 0, 0, ${opacity[15]})`,
  navbar: `0 2px 8px rgba(0, 0, 0, ${opacity[10]})`,
  footer: `0 -2px 8px rgba(0, 0, 0, ${opacity[5]})`,

  // Inner Shadows
  innerXs: `inset 0 1px 2px rgba(0, 0, 0, ${opacity[5]})`,
  innerSm: `inset 0 2px 4px rgba(0, 0, 0, ${opacity[10]})`,
  innerMd: `inset 0 2px 4px rgba(0, 0, 0, ${opacity[10]})`,
  innerLg: `inset 0 4px 8px rgba(0, 0, 0, ${opacity[15]})`,

  // Colored Shadows (for emphasis)
  primaryGlow: `0 0 25px rgba(249, 115, 22, ${opacity[25]})`, // Orange glow
  primaryGlowStrong: `0 0 35px rgba(249, 115, 22, ${opacity[35]})`,
  accentGlow: `0 0 25px rgba(16, 185, 129, ${opacity[25]})`, // Green glow
  accentGlowStrong: `0 0 35px rgba(16, 185, 129, ${opacity[35]})`,
  dangerGlow: `0 0 25px rgba(220, 38, 38, ${opacity[25]})`, // Red glow
  dangerGlowStrong: `0 0 35px rgba(220, 38, 38, ${opacity[35]})`,
  successGlow: `0 0 25px rgba(22, 163, 74, ${opacity[25]})`,
  infoGlow: `0 0 25px rgba(37, 99, 235, ${opacity[25]})`,

  // Focus States (accessibility)
  focus: `0 0 0 3px rgba(249, 115, 22, ${opacity[30]})`, // Primary focus ring
  focusAccent: `0 0 0 3px rgba(16, 185, 129, ${opacity[30]})`, // Accent focus ring
  focusDanger: `0 0 0 3px rgba(220, 38, 38, ${opacity[30]})`, // Danger focus ring
} as const;

// Dark Theme Shadows
export const shadowsDark = {
  // Basic Elevations (heavier for dark mode)
  none: "none",
  xs: `0 1px 2px rgba(0, 0, 0, ${opacity[20]})`,
  sm: `0 2px 4px rgba(0, 0, 0, ${opacity[30]})`,
  md: `0 4px 8px rgba(0, 0, 0, ${opacity[35]})`,
  lg: `0 8px 16px rgba(0, 0, 0, ${opacity[40]})`,
  xl: `0 12px 24px rgba(0, 0, 0, ${opacity[45]})`,
  "2xl": `0 20px 40px rgba(0, 0, 0, ${opacity[50]})`,
  "3xl": `0 25px 50px rgba(0, 0, 0, ${opacity[60]})`,

  // Semantic Shadows
  card: `0 4px 10px rgba(0, 0, 0, ${opacity[30]})`,
  cardHover: `0 10px 25px rgba(0, 0, 0, ${opacity[40]})`,
  button: `0 2px 8px rgba(0, 0, 0, ${opacity[25]})`,
  buttonHover: `0 4px 12px rgba(0, 0, 0, ${opacity[35]})`,
  modal: `0 20px 50px rgba(0, 0, 0, ${opacity[60]})`,
  dropdown: `0 8px 20px rgba(0, 0, 0, ${opacity[45]})`,
  navbar: `0 2px 8px rgba(0, 0, 0, ${opacity[25]})`,
  footer: `0 -2px 8px rgba(0, 0, 0, ${opacity[20]})`,

  // Inner Shadows
  innerXs: `inset 0 1px 2px rgba(0, 0, 0, ${opacity[20]})`,
  innerSm: `inset 0 2px 4px rgba(0, 0, 0, ${opacity[30]})`,
  innerMd: `inset 0 2px 4px rgba(0, 0, 0, ${opacity[40]})`,
  innerLg: `inset 0 4px 8px rgba(0, 0, 0, ${opacity[50]})`,

  // Colored Shadows (brighter for dark mode)
  primaryGlow: `0 0 25px rgba(251, 146, 60, ${opacity[30]})`, // Lighter orange
  primaryGlowStrong: `0 0 35px rgba(251, 146, 60, ${opacity[40]})`,
  accentGlow: `0 0 25px rgba(34, 197, 94, ${opacity[30]})`, // Lighter green
  accentGlowStrong: `0 0 35px rgba(34, 197, 94, ${opacity[40]})`,
  dangerGlow: `0 0 25px rgba(248, 113, 113, ${opacity[30]})`, // Lighter red
  dangerGlowStrong: `0 0 35px rgba(248, 113, 113, ${opacity[40]})`,
  successGlow: `0 0 25px rgba(34, 197, 94, ${opacity[30]})`,
  infoGlow: `0 0 25px rgba(59, 130, 246, ${opacity[30]})`,

  // Focus States
  focus: `0 0 0 3px rgba(251, 146, 60, ${opacity[40]})`,
  focusAccent: `0 0 0 3px rgba(34, 197, 94, ${opacity[40]})`,
  focusDanger: `0 0 0 3px rgba(248, 113, 113, ${opacity[40]})`,
} as const;

// Type Definitions
export type ShadowKey = keyof typeof shadowsLight;
export type ShadowValue = (typeof shadowsLight)[ShadowKey];

/**
 * Get shadow by key and theme
 * @example getShadow('card', isDark) => shadow string
 */
export const getShadow = (key: ShadowKey, isDark: boolean = false): string => {
  return isDark ? shadowsDark[key] : shadowsLight[key];
};
