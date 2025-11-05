// lib/colorUtils/alpha.ts

/**
 * Add opacity/alpha to a hex color, returning rgba string.
 * @param color - The hex color code (e.g., "#F97316").
 * @param opacity - The opacity value (0-1).
 * @returns The rgba color string.
 *
 * @example
 * alpha('#F97316', 0.5) => 'rgba(249, 115, 22, 0.5)'
 * alpha('#10B981', 0.7) => 'rgba(16, 185, 129, 0.7)'
 */
export const alpha = (color: string, opacity: number): string => {
  // Remove # if present
  const cleanHex = color.replace("#", "");

  // Parse hex to RGB
  const num = parseInt(cleanHex, 16);
  const r = (num >> 16) & 0xff;
  const g = (num >> 8) & 0xff;
  const b = num & 0xff;

  // Clamp opacity between 0 and 1
  const clampedOpacity = Math.max(0, Math.min(1, opacity));

  return `rgba(${r}, ${g}, ${b}, ${clampedOpacity})`;
};

/**
 * Alias for alpha function (more semantic naming)
 */
export const withOpacity = alpha;

/**
 * Add opacity to a color and return hex with alpha channel
 * @param color - The hex color code
 * @param opacity - The opacity value (0-1)
 * @returns 8-digit hex color with alpha
 *
 * @example
 * hexAlpha('#F97316', 0.5) => '#F9731680'
 */
export const hexAlpha = (color: string, opacity: number): string => {
  const cleanHex = color.replace("#", "");
  const alpha = Math.round(Math.max(0, Math.min(1, opacity)) * 255);
  const alphaHex = alpha.toString(16).padStart(2, "0");
  return `#${cleanHex}${alphaHex}`;
};
