// lib/colorUtils/contrast.ts

/**
 * Calculate relative luminance of a color (WCAG 2.0 formula)
 * @param color - Hex color code
 * @returns Luminance value between 0 and 1
 */
const getLuminance = (color: string): number => {
  // Remove # and parse to RGB
  const hex = color.replace("#", "");
  const num = parseInt(hex, 16);

  let r = ((num >> 16) & 0xff) / 255;
  let g = ((num >> 8) & 0xff) / 255;
  let b = (num & 0xff) / 255;

  // Apply gamma correction
  r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

  // Calculate luminance
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

/**
 * Calculate contrast ratio between two colors (WCAG 2.0)
 * @param foreground - Foreground hex color
 * @param background - Background hex color
 * @returns Contrast ratio (1:1 to 21:1)
 *
 * @example
 * getContrast('#000000', '#FFFFFF') => 21 (perfect contrast)
 * getContrast('#F97316', '#FFFFFF') => ~3.5
 */
export const getContrast = (foreground: string, background: string): number => {
  const lum1 = getLuminance(foreground);
  const lum2 = getLuminance(background);

  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);

  return (lighter + 0.05) / (darker + 0.05);
};

/**
 * Check if color combination meets WCAG accessibility standards
 * @param foreground - Foreground hex color
 * @param background - Background hex color
 * @param level - WCAG level ('AA' or 'AAA')
 * @param largeText - Is this for large text? (18pt+ or 14pt+ bold)
 * @returns Whether the combination is accessible
 *
 * @example
 * isAccessible('#111827', '#FFFFFF', 'AA') => true
 * isAccessible('#6B7280', '#FFFFFF', 'AAA') => false
 */
export const isAccessible = (
  foreground: string,
  background: string,
  level: "AA" | "AAA" = "AA",
  largeText: boolean = false
): boolean => {
  const contrast = getContrast(foreground, background);

  if (level === "AAA") {
    return largeText ? contrast >= 4.5 : contrast >= 7;
  }

  // AA level
  return largeText ? contrast >= 3 : contrast >= 4.5;
};

/**
 * Get the best text color (black or white) for a background
 * @param backgroundColor - Background hex color
 * @returns '#000000' or '#FFFFFF'
 *
 * @example
 * getBestTextColor('#F97316') => '#FFFFFF'
 * getBestTextColor('#FFF7ED') => '#000000'
 */
export const getBestTextColor = (backgroundColor: string): string => {
  const blackContrast = getContrast("#000000", backgroundColor);
  const whiteContrast = getContrast("#FFFFFF", backgroundColor);

  return blackContrast > whiteContrast ? "#000000" : "#FFFFFF";
};

/**
 * Check if a color is considered "light" or "dark"
 * @param color - Hex color
 * @returns true if light, false if dark
 *
 * @example
 * isLight('#FFFFFF') => true
 * isLight('#111827') => false
 */
export const isLight = (color: string): boolean => {
  const luminance = getLuminance(color);
  return luminance > 0.5;
};

/**
 * Check if a color is considered "dark"
 * @param color - Hex color
 * @returns true if dark, false if light
 */
export const isDark = (color: string): boolean => {
  return !isLight(color);
};
