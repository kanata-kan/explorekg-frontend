/**
 * Opacity Levels System
 * Standardized opacity tokens instead of hardcoded rgba values
 * Provides consistent transparency across the application
 */

export const opacity = {
  // Numeric Levels (0-100 scale)
  0: 0,
  5: 0.05,
  10: 0.1,
  15: 0.15,
  20: 0.2,
  25: 0.25,
  30: 0.3,
  35: 0.35,
  40: 0.4,
  45: 0.45,
  50: 0.5,
  55: 0.55,
  60: 0.6,
  65: 0.65,
  70: 0.7,
  75: 0.75,
  80: 0.8,
  85: 0.85,
  90: 0.9,
  95: 0.95,
  100: 1,

  // Semantic Names
  transparent: 0,
  semiTransparent: 0.5,
  opaque: 1,

  // Common Use Cases
  backdrop: 0.7, // Modal/dialog backdrops
  overlay: 0.85, // Image overlays
  disabled: 0.6, // Disabled elements
  subtle: 0.1, // Subtle backgrounds
  ghost: 0.05, // Ghost buttons
  hover: 0.08, // Hover states
  active: 0.12, // Active states

  // Glass/Blur Effects
  glass: {
    light: 0.07,
    medium: 0.1,
    heavy: 0.15,
  },

  // Shadow Opacity Levels
  shadow: {
    xs: 0.05,
    sm: 0.1,
    md: 0.15,
    lg: 0.2,
    xl: 0.25,
  },
} as const;

export type OpacityLevel = keyof typeof opacity;

/**
 * Convert hex color to rgba with opacity
 * @example withOpacity('#F97316', opacity[50]) => 'rgba(249, 115, 22, 0.5)'
 */
export const withOpacity = (hex: string, alpha: number): string => {
  // Remove # if present
  const cleanHex = hex.replace("#", "");

  // Parse hex to RGB
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

/**
 * Get opacity value by key
 * @example getOpacity('backdrop') => 0.7
 */
export const getOpacity = (key: keyof typeof opacity): number => {
  const value = opacity[key];
  return typeof value === "number" ? value : 0;
};
