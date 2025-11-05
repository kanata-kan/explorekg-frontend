// lib/colorUtils.ts

/**
 * Darkens a hex color by a given percentage.
 * @param color - The hex color code (e.g., "#F97316").
 * @param amount - The percentage to darken (0-100).
 * @returns The darkened hex color.
 */
export const darken = (color: string, amount: number): string => {
  const num = parseInt(color.replace("#", "0x"), 16);
  const amt = Math.round(2.55 * amount);
  const R = (num >> 16) - amt;
  const G = ((num >> 8) & 0x00ff) - amt;
  const B = (num & 0x0000ff) - amt;

  return `#${(
    0x1000000 +
    (R < 255 ? (R < 0 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 0 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 0 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1)}`;
};
