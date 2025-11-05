/**
 * Color Scales System
 * Based on Tailwind color system for consistency
 * Each scale contains 10 shades (50-900)
 */

export const colorScales = {
  // Orange Scale (Primary Brand)
  orange: {
    50: "#FFF7ED",
    100: "#FFEDD5",
    200: "#FED7AA",
    300: "#FDBA74",
    400: "#FB923C",
    500: "#F97316", // Current primary
    600: "#EA580C", // Current hover
    700: "#C2410C",
    800: "#9A3412",
    900: "#7C2D12",
  },

  // Green Scale (Accent)
  green: {
    50: "#F0FDF4",
    100: "#DCFCE7",
    200: "#BBF7D0",
    300: "#86EFAC",
    400: "#4ADE80",
    500: "#22C55E", // Dark theme accent
    600: "#16A34A", // Light theme success
    700: "#15803D",
    800: "#166534",
    900: "#14532D",
  },

  // Emerald Scale (Alternative Accent)
  emerald: {
    50: "#ECFDF5",
    100: "#D1FAE5",
    200: "#A7F3D0",
    300: "#6EE7B7",
    400: "#34D399",
    500: "#10B981", // Current accent (light theme)
    600: "#059669",
    700: "#047857",
    800: "#065F46",
    900: "#064E3B",
  },

  // Blue Scale (Secondary Brand)
  blue: {
    50: "#EFF6FF",
    100: "#DBEAFE",
    200: "#BFDBFE",
    300: "#93C5FD",
    400: "#60A5FA",
    500: "#3B82F6",
    600: "#2563EB", // Current secondary
    700: "#1D4ED8",
    800: "#1E40AF",
    900: "#1E3A8A",
  },

  // Red Scale (Error/Danger States)
  red: {
    50: "#FEF2F2",
    100: "#FEE2E2",
    200: "#FECACA",
    300: "#FCA5A5",
    400: "#F87171",
    500: "#EF4444",
    600: "#DC2626", // Current danger
    700: "#B91C1C",
    800: "#991B1B",
    900: "#7F1D1D",
  },

  // Amber Scale (Warning States)
  amber: {
    50: "#FFFBEB",
    100: "#FEF3C7",
    200: "#FDE68A",
    300: "#FCD34D",
    400: "#FBBF24",
    500: "#F59E0B",
    600: "#D97706",
    700: "#B45309",
    800: "#92400E",
    900: "#78350F",
  },

  // Gray Scale (Light Theme Neutrals)
  gray: {
    50: "#F9FAFB", // Section alt background
    100: "#F3F4F6", // Background alt, surface alt
    200: "#E5E7EB", // Dividers
    300: "#D1D5DB",
    400: "#9CA3AF",
    500: "#6B7280", // Muted text
    600: "#4B5563",
    700: "#374151", // Secondary text
    800: "#1F2937",
    900: "#111827", // Primary text
  },

  // Slate Scale (Dark Theme Surfaces)
  slate: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0", // Secondary text (dark)
    300: "#CBD5E1",
    400: "#94A3B8", // Muted text (dark)
    500: "#64748B",
    600: "#475569", // Dividers (dark)
    700: "#334155",
    800: "#1E293B", // Surface (dark)
    900: "#0F172A",
  },

  // Navy Scale (Dark Theme Backgrounds)
  navy: {
    50: "#F0F4F8",
    100: "#D9E2EC",
    200: "#BCCCDC",
    300: "#9FB3C8",
    400: "#829AB1",
    500: "#627D98",
    600: "#486581",
    700: "#334E68",
    800: "#27344A", // Surface alt (dark)
    850: "#1A2235", // Section alt (dark)
    900: "#141C2E", // Background alt (dark)
    950: "#0C1424", // Primary background (dark)
  },
} as const;

// Type Definitions
export type ColorScale = keyof typeof colorScales;
export type ColorShade = keyof (typeof colorScales)["orange"];

/**
 * Get specific color from scale
 * @example getScaleColor('orange', 500) => '#F97316'
 */
export const getScaleColor = (scale: ColorScale, shade: ColorShade): string => {
  return colorScales[scale][shade];
};

/**
 * Get all shades from scale
 * @example getScale('orange') => { 50: '#FFF7ED', ... }
 */
export const getScale = (scale: ColorScale) => {
  return colorScales[scale];
};
