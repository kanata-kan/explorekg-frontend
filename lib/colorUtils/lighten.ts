// lib/colorUtils/lighten.ts

/**
 * Lightens a hex color by a given percentage.
 * @param color - The hex color code (e.g., "#F97316").
 * @param amount - The percentage to lighten (0-100).
 * @returns The lightened hex color.
 *
 * @example
 * lighten('#F97316', 10) => lighter orange
 * lighten('#111827', 30) => lighter gray
 */
export const lighten = (color: string, amount: number): string => {
  const num = parseInt(color.replace("#", "0x"), 16);
  const amt = Math.round(2.55 * amount);
  const R = Math.min(255, (num >> 16) + amt);
  const G = Math.min(255, ((num >> 8) & 0x00ff) + amt);
  const B = Math.min(255, (num & 0x0000ff) + amt);

  return `#${(0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1)}`;
};
