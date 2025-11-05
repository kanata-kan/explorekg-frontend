// types/styled.d.ts
// ---------------------------------------------------------
// Kanata UI v2 — Styled Components Type Definition
// Updated to match the new color system (light/dark + brand aliases)
// ---------------------------------------------------------

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    isDark: boolean;

    colors: {
      // --- Brand & Core ---
      primary: string;
      primaryHover: string;
      secondary: string;
      accent: string;

      // --- Background & Surfaces ---
      background: string;
      backgroundAlt: string;
      surface: string;
      surfaceAlt: string;
      sectionAlt: string;

      // --- Functional ---
      danger: string;
      success: string;
      heroText: string;

      // --- Text Palette ---
      text: {
        primary: string;
        secondary: string;
        muted: string;
        inverse: string;
        accent: string;
        success: string;
        error: string;
        onPrimary: string;
        brand: string; // new tone for text brand usage
      };

      // --- Utility ---
      divider: string;
      overlay: string;

      // --- Brand Aliases (optional usage in components) ---
      brand: {
        main: string;
        hover: string;
        text: string;
        bg: string;
      };
    };

    // --- Spacing ---
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    // --- Radii ---
    radii: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      full: string;
    };

    // --- Breakpoints ---
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
    };

    // --- Layout ---
    layout: {
      container: {
        padding: {
          mobile: string;
          md: string;
          lg: string;
        };
        maxWidth: {
          md: string;
          lg: string;
          xl: string;
          "2xl": string;
        };
      };
      section: {
        spacing: {
          tight: { mobile: string; md: string; lg: string };
          default: { mobile: string; md: string; lg: string };
          loose: { mobile: string; md: string; lg: string };
        };
      };
      nav: {
        height: {
          sm: string;
          md: string;
          lg: string;
        };
      };
    };

    // --- Shadows ---
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    // --- Typography ---
    typography: {
      fontFamily: {
        base: string;
        heading: string;
      };
      fontSizes: {
        h1: string;
        h2: string;
        h3: string;
        body: string;
        caption: string;
      };
      fontWeights: {
        bold: number;
        semiBold: number;
        medium: number;
        regular: number;
      };
      lineHeights: {
        tight: number;
        normal: number;
        relaxed: number;
      };
    };
  }
}

// --- JSX polymorphic safety fix (for as={motion.div}) ---
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}
