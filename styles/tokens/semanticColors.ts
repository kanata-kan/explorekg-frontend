/**
 * Semantic Colors System
 * Maps semantic meaning (primary, danger, etc.) to color scales
 * Provides single source of truth for theme colors
 */

import { colorScales } from "./colorScales";

// Light Theme Semantic Colors
export const semanticColorsLight = {
  // Brand & Core Colors
  primary: {
    main: colorScales.orange[500],
    hover: colorScales.orange[600],
    active: colorScales.orange[700],
    light: colorScales.orange[100],
    lighter: colorScales.orange[50],
    dark: colorScales.orange[700],
  },

  secondary: {
    main: colorScales.blue[600],
    hover: colorScales.blue[700],
    active: colorScales.blue[800],
    light: colorScales.blue[100],
    lighter: colorScales.blue[50],
  },

  accent: {
    main: colorScales.emerald[500], // Current accent
    hover: colorScales.emerald[600],
    active: colorScales.emerald[700],
    light: colorScales.emerald[100],
    lighter: colorScales.emerald[50],
  },

  // Status Colors
  success: {
    main: colorScales.green[600], // Current success
    hover: colorScales.green[700],
    active: colorScales.green[800],
    light: colorScales.green[100],
    lighter: colorScales.green[50],
  },

  danger: {
    main: colorScales.red[600], // Current danger
    hover: colorScales.red[700],
    active: colorScales.red[800],
    light: colorScales.red[100],
    lighter: colorScales.red[50],
  },

  warning: {
    main: colorScales.amber[500],
    hover: colorScales.amber[600],
    active: colorScales.amber[700],
    light: colorScales.amber[100],
    lighter: colorScales.amber[50],
  },

  info: {
    main: colorScales.blue[500],
    hover: colorScales.blue[600],
    active: colorScales.blue[700],
    light: colorScales.blue[100],
    lighter: colorScales.blue[50],
  },

  // Surfaces & Backgrounds
  background: {
    default: "#FAFAFA", // Current background
    paper: "#FFFFFF",
    elevated: "#FFFFFF",
    alt: colorScales.gray[100], // Current backgroundAlt
    section: colorScales.gray[50], // Current sectionAlt
  },

  surface: {
    default: "#FFFFFF", // Current surface
    hover: colorScales.gray[50],
    active: colorScales.gray[100],
    alt: colorScales.gray[100], // Current surfaceAlt
  },

  // Text Colors
  text: {
    primary: colorScales.gray[900], // Current primary text
    secondary: colorScales.gray[700], // Current secondary text
    tertiary: colorScales.gray[500], // Current muted text
    disabled: colorScales.gray[400],
    inverse: colorScales.gray[50], // Current inverse text
    onPrimary: "#FFFFFF", // Text on primary color
    onAccent: "#FFFFFF",
    onDanger: "#FFFFFF",
    link: colorScales.blue[600],
    linkHover: colorScales.blue[700],
    // Semantic text colors
    brand: colorScales.orange[500], // Current brand text
    accent: colorScales.emerald[500], // Current accent text
    success: colorScales.green[600], // Current success text
    danger: colorScales.red[600], // Current danger text
    error: colorScales.red[600], // Current error text (alias)
    muted: colorScales.gray[500], // Alias for tertiary
  },

  // Borders & Dividers
  border: {
    default: colorScales.gray[200], // Current divider
    strong: colorScales.gray[300],
    subtle: colorScales.gray[100],
    hover: colorScales.gray[300],
    focus: colorScales.orange[500],
    divider: colorScales.gray[200], // Alias for default
  },

  divider: colorScales.gray[200], // Current divider

  // Interactive States
  interactive: {
    hover: colorScales.gray[50],
    active: colorScales.gray[100],
    focus: colorScales.orange[500],
    focusRing: colorScales.orange[200],
    disabled: colorScales.gray[100],
  },

  // Overlays
  overlay: {
    light: "rgba(0, 0, 0, 0.5)",
    medium: "rgba(0, 0, 0, 0.75)", // Current overlay
    heavy: "rgba(0, 0, 0, 0.85)",
  },

  // Special Colors
  heroText: "#ffffff", // Current hero text

  // Brand Aliases (backward compatibility)
  brand: {
    primary: colorScales.orange[500], // Main brand color
    secondary: colorScales.blue[600], // Secondary brand
    tertiary: colorScales.emerald[500], // Tertiary/accent brand
    main: colorScales.orange[500], // Alias
    hover: colorScales.orange[600],
    text: colorScales.orange[500],
    bg: colorScales.orange[50], // Current brand.bg
  },
} as const;

// Dark Theme Semantic Colors
export const semanticColorsDark = {
  // Brand & Core Colors
  primary: {
    main: colorScales.orange[400], // Current primary (dark)
    hover: colorScales.orange[500], // Current primaryHover (dark)
    active: colorScales.orange[600],
    light: colorScales.orange[900],
    lighter: colorScales.orange[900],
    dark: colorScales.orange[300],
  },

  secondary: {
    main: colorScales.blue[500], // Current secondary (dark)
    hover: colorScales.blue[400],
    active: colorScales.blue[600],
    light: colorScales.blue[900],
    lighter: colorScales.blue[900],
  },

  accent: {
    main: colorScales.green[500], // Current accent (dark)
    hover: colorScales.green[400],
    active: colorScales.green[600],
    light: colorScales.green[900],
    lighter: colorScales.green[900],
  },

  // Status Colors
  success: {
    main: colorScales.green[500], // Current success (dark)
    hover: colorScales.green[400],
    active: colorScales.green[600],
    light: colorScales.green[900],
    lighter: colorScales.green[900],
  },

  danger: {
    main: colorScales.red[400], // Current danger (dark)
    hover: colorScales.red[300],
    active: colorScales.red[500],
    light: colorScales.red[900],
    lighter: colorScales.red[900],
  },

  warning: {
    main: colorScales.amber[400],
    hover: colorScales.amber[300],
    active: colorScales.amber[500],
    light: colorScales.amber[900],
    lighter: colorScales.amber[900],
  },

  info: {
    main: colorScales.blue[400],
    hover: colorScales.blue[300],
    active: colorScales.blue[500],
    light: colorScales.blue[900],
    lighter: colorScales.blue[900],
  },

  // Surfaces & Backgrounds
  background: {
    default: colorScales.navy[950], // Current background (dark)
    paper: colorScales.slate[800],
    elevated: colorScales.slate[700],
    alt: colorScales.navy[900], // Current backgroundAlt (dark)
    section: colorScales.navy[850], // Current sectionAlt (dark)
  },

  surface: {
    default: colorScales.slate[800], // Current surface (dark)
    hover: colorScales.slate[700],
    active: colorScales.slate[600],
    alt: colorScales.navy[800], // Current surfaceAlt (dark)
  },

  // Text Colors
  text: {
    primary: colorScales.gray[50], // Current primary text (dark)
    secondary: colorScales.slate[200], // Current secondary text (dark)
    tertiary: colorScales.slate[400], // Current muted text (dark)
    disabled: colorScales.slate[500],
    inverse: colorScales.gray[900], // Current inverse text (dark)
    onPrimary: "#FFFFFF", // Text on primary color
    onAccent: "#FFFFFF",
    onDanger: "#FFFFFF",
    link: colorScales.blue[400],
    linkHover: colorScales.blue[300],
    // Semantic text colors
    brand: colorScales.orange[400], // Current brand text (dark)
    accent: colorScales.green[500], // Current accent text (dark)
    success: colorScales.green[500], // Current success text (dark)
    danger: colorScales.red[400], // Current danger text (dark)
    error: colorScales.red[400], // Current error text (dark - alias)
    muted: colorScales.slate[400], // Alias for tertiary
  },

  // Borders & Dividers
  border: {
    default: colorScales.slate[600], // Current divider (dark)
    strong: colorScales.slate[500],
    subtle: colorScales.slate[700],
    hover: colorScales.slate[500],
    focus: colorScales.orange[400],
    divider: colorScales.slate[600], // Alias for default
  },

  divider: colorScales.slate[600], // Current divider (dark)

  // Interactive States
  interactive: {
    hover: "rgba(255, 255, 255, 0.05)",
    active: "rgba(255, 255, 255, 0.1)",
    focus: colorScales.orange[400],
    focusRing: colorScales.orange[700],
    disabled: colorScales.slate[700],
  },

  // Overlays
  overlay: {
    light: "rgba(5, 10, 25, 0.6)",
    medium: "rgba(5, 10, 25, 0.8)", // Current overlay (dark)
    heavy: "rgba(5, 10, 25, 0.95)",
  },

  // Special Colors
  heroText: "#ffffff", // Current hero text (dark)

  // Brand Aliases (backward compatibility)
  brand: {
    primary: colorScales.orange[400], // Main brand color (dark)
    secondary: colorScales.blue[500], // Secondary brand (dark)
    tertiary: colorScales.green[500], // Tertiary/accent brand (dark)
    main: colorScales.orange[400], // Alias
    hover: colorScales.orange[500],
    text: colorScales.orange[400],
    bg: "#1C1F2B", // Current brand.bg (dark)
  },
} as const;

// Type Definitions
export type SemanticColors = typeof semanticColorsLight;
export type SemanticColorKey = keyof SemanticColors;
