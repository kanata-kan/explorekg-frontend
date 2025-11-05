// theme/colors.ts
// ---------------------------------------------------------
// Kanata UI v2 – Unified Color System
// Clean, scalable, and consistent for both light & dark themes
// ---------------------------------------------------------

// 🌞 Light Theme
export const lightColors = {
  // --- Brand & Core ---
  primary: "#F97316",
  primaryHover: "#EA580C",
  secondary: "#2563EB",
  accent: "#10B981",

  // --- Background & Surfaces ---
  background: "#FAFAFA",
  backgroundAlt: "#F3F4F6",
  surface: "#FFFFFF",
  surfaceAlt: "#F3F4F6",
  sectionAlt: "#F9FAFB",

  // --- Functional Colors ---
  danger: "#DC2626",
  success: "#16A34A",

  // --- Text Colors ---
  text: {
    primary: "#111827",
    secondary: "#374151",
    muted: "#6B7280",
    inverse: "#F9FAFB",
    accent: "#10B981",
    success: "#16A34A",
    error: "#DC2626",
    onPrimary: "#FFFFFF",
    brand: "#F97316", // text tone that matches brand color
  },

  // --- Utility Colors ---
  divider: "#E5E7EB",
  overlay: "rgba(0, 0, 0, 0.75)",
  heroText: "#ffffff",

  // --- Brand Aliases (optional use in components) ---
  brand: {
    main: "#F97316",
    hover: "#EA580C",
    text: "#F97316",
    bg: "#FFF7ED",
  },
};

// 🌚 Dark Theme
export const darkColors = {
  // --- Brand & Core ---
  primary: "#FB923C",
  primaryHover: "#F97316",
  secondary: "#3B82F6",
  accent: "#22C55E",

  // --- Background & Surfaces ---
  background: "#0C1424",
  backgroundAlt: "#141C2E",
  surface: "#1E293B",
  surfaceAlt: "#27344A",
  sectionAlt: "#1A2235",

  // --- Functional Colors ---
  danger: "#F87171",
  success: "#22C55E",

  // --- Text Colors ---
  text: {
    primary: "#F9FAFB",
    secondary: "#E2E8F0",
    muted: "#94A3B8",
    inverse: "#111827",
    accent: "#22C55E",
    success: "#22C55E",
    error: "#EF4444",
    onPrimary: "#FFFFFF",
    brand: "#FB923C", // text tone that matches brand color
  },

  // --- Utility Colors ---
  divider: "#475569",
  overlay: "rgba(5, 10, 25, 0.8)",
  heroText: "#ffffff",
  // --- Brand Aliases (optional use in components) ---
  brand: {
    main: "#FB923C",
    hover: "#F97316",
    text: "#FB923C",
    bg: "#1C1F2B",
  },
};
