// lib/colorUtils.ts
/**
 * @deprecated This file is deprecated. Use @/lib/colorUtils/* instead.
 * This file now re-exports from the new colorUtils directory for backward compatibility.
 */

// Re-export everything from the new colorUtils directory
export { darken } from "./colorUtils/darken";
export { lighten } from "./colorUtils/lighten";
export { alpha, withOpacity, hexAlpha } from "./colorUtils/alpha";
export { mix, blend } from "./colorUtils/mix";
export {
  getContrast,
  isAccessible,
  getBestTextColor,
  isLight,
  isDark,
} from "./colorUtils/contrast";
export {
  adjustHue,
  saturate,
  desaturate,
  grayscale,
} from "./colorUtils/manipulate";
