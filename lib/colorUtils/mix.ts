// lib/colorUtils/mix.ts

/**
 * Mix two hex colors with a given weight.
 * @param color1 - First hex color (e.g., "#F97316").
 * @param color2 - Second hex color (e.g., "#10B981").
 * @param weight - Weight of the second color (0-1), default 0.5.
 * @returns The mixed hex color.
 *
 * @example
 * mix('#F97316', '#10B981', 0.5) => color in the middle
 * mix('#FF0000', '#0000FF', 0.3) => more red than blue
 */
export const mix = (
  color1: string,
  color2: string,
  weight: number = 0.5
): string => {
  // Parse colors
  const c1 = parseInt(color1.replace("#", "0x"), 16);
  const c2 = parseInt(color2.replace("#", "0x"), 16);

  // Extract RGB components
  const r1 = (c1 >> 16) & 0xff;
  const g1 = (c1 >> 8) & 0xff;
  const b1 = c1 & 0xff;

  const r2 = (c2 >> 16) & 0xff;
  const g2 = (c2 >> 8) & 0xff;
  const b2 = c2 & 0xff;

  // Clamp weight between 0 and 1
  const w = Math.max(0, Math.min(1, weight));

  // Mix the colors
  const r = Math.round(r1 * (1 - w) + r2 * w);
  const g = Math.round(g1 * (1 - w) + g2 * w);
  const b = Math.round(b1 * (1 - w) + b2 * w);

  return `#${(0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1)}`;
};

/**
 * Blend multiple colors together
 * @param colors - Array of hex colors
 * @returns The blended hex color
 *
 * @example
 * blend(['#FF0000', '#00FF00', '#0000FF']) => gray-ish
 */
export const blend = (colors: string[]): string => {
  if (colors.length === 0) return "#000000";
  if (colors.length === 1) return colors[0];

  let totalR = 0;
  let totalG = 0;
  let totalB = 0;

  colors.forEach((color) => {
    const num = parseInt(color.replace("#", "0x"), 16);
    totalR += (num >> 16) & 0xff;
    totalG += (num >> 8) & 0xff;
    totalB += num & 0xff;
  });

  const count = colors.length;
  const r = Math.round(totalR / count);
  const g = Math.round(totalG / count);
  const b = Math.round(totalB / count);

  return `#${(0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1)}`;
};
