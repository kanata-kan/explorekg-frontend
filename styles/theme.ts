/**
 * Theme System - Enhanced v2.0
 * Unified theme with new token system + backward compatibility
 */

// Old system (backward compatibility)
import { lightColors, darkColors } from "./tokens/colors";

// New token system
import {
  semanticColorsLight,
  semanticColorsDark,
} from "./tokens/semanticColors";
import { colorScales } from "./tokens/colorScales";
import { opacity } from "./tokens/opacity";
import { gradientsLight, gradientsDark } from "./tokens/gradients";
import { shadowsLight, shadowsDark } from "./tokens/shadows";

// Other tokens
import { spacing } from "./tokens/spacing";
import { radii } from "./tokens/radii";
import { breakpoints } from "./tokens/breakpoints";
import { layout } from "./tokens/layout";
import { typography } from "./tokens/typography";

// Utils (backward compatibility)
import { darken } from "@/lib/colorUtils";

// Light Theme
export const lightTheme = {
  isDark: false,

  // Semantic colors (v2.0)
  colors: semanticColorsLight,

  // Color scales (for advanced usage)
  scales: colorScales,

  // Opacity tokens
  opacity,

  // Gradients
  gradients: gradientsLight,

  // Shadows
  shadows: shadowsLight,

  // Other tokens
  spacing,
  radii,
  breakpoints,
  layout,
  typography,

  // Backward compatibility layer
  _legacy: {
    colors: lightColors, // Old color system
    oldShadows: {
      sm: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      md: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      lg: "0px 10px 15px rgba(0, 0, 0, 0.15)",
      xl: "0px 20px 25px rgba(0, 0, 0, 0.2)",
    },
  },
} as const;

// Dark Theme
export const darkTheme = {
  isDark: true,

  // Semantic colors (v2.0)
  colors: semanticColorsDark,

  // Color scales (for advanced usage)
  scales: colorScales,

  // Opacity tokens
  opacity,

  // Gradients
  gradients: gradientsDark,

  // Shadows
  shadows: shadowsDark,

  // Other tokens
  spacing,
  radii,
  breakpoints,
  layout,
  typography,

  // Backward compatibility layer
  _legacy: {
    colors: darkColors, // Old color system
    oldShadows: {
      sm: "0px 1px 2px rgba(0, 0, 0, 0.2)",
      md: "0px 4px 6px rgba(0, 0, 0, 0.3)",
      lg: "0px 10px 15px rgba(0, 0, 0, 0.4)",
      xl: "0px 20px 25px rgba(0, 0, 0, 0.5)",
    },
  },
} as const;

// Utility theme (backward compatibility)
export const theme = {
  colors: {
    primary: "#F97316",
    primaryDark: darken("#F97316", 10),
    accent: "#10B981",
  },
} as const;

// ============================================
// TYPE EXPORTS
// ============================================

export type Theme = typeof lightTheme;
export type ThemeColors = typeof semanticColorsLight;
export type ColorScales = typeof colorScales;
export type Gradients = typeof gradientsLight;
export type Shadows = typeof shadowsLight;
