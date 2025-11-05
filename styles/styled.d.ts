// types/styled.d.ts
// ---------------------------------------------------------
// Kanata UI v2.0 — Enhanced Styled Components Type Definition
// Complete type safety for new token system + backward compat
// ---------------------------------------------------------

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    isDark: boolean;

    // === NEW: Enhanced Color System ===
    colors: {
      primary: {
        main: string;
        hover: string;
        active: string;
        light: string;
        lighter: string;
        dark: string;
      };
      secondary: {
        main: string;
        hover: string;
        active: string;
        light: string;
        lighter: string;
      };
      accent: {
        main: string;
        hover: string;
        active: string;
        light: string;
        lighter: string;
      };
      success: {
        main: string;
        hover: string;
        active: string;
        light: string;
        lighter: string;
      };
      danger: {
        main: string;
        hover: string;
        active: string;
        light: string;
        lighter: string;
      };
      warning: {
        main: string;
        hover: string;
        active: string;
        light: string;
        lighter: string;
      };
      info: {
        main: string;
        hover: string;
        active: string;
        light: string;
        lighter: string;
      };
      background: {
        default: string;
        paper: string;
        elevated: string;
        alt: string;
        section: string;
      };
      surface: {
        default: string;
        hover: string;
        active: string;
        alt: string;
      };
      text: {
        primary: string;
        secondary: string;
        tertiary: string;
        disabled: string;
        inverse: string;
        onPrimary: string;
        onAccent: string;
        onDanger: string;
        link: string;
        linkHover: string;
        brand: string;
        accent: string;
        danger: string;
        success: string;
        muted: string;
      };
      border: {
        default: string;
        strong: string;
        hover: string;
        focus: string;
        divider: string;
        subtle: string;
      };
      overlay: {
        light: string;
        medium: string;
        heavy: string;
      };
      brand: {
        primary: string;
        secondary: string;
        tertiary: string;
        main: string;
        hover: string;
        text: string;
        bg: string;
      };
      [key: string]: any;
    };

    // === NEW: Direct scale access ===
    scales: {
      [scale: string]: {
        [shade: string]: string;
      };
    };

    // === NEW: Opacity tokens ===
    opacity: {
      [key: string]:
        | number
        | { light: number; medium: number; heavy: number }
        | { xs: number; sm: number; md: number; lg: number; xl: number };
    };

    // === NEW: Gradients ===
    gradients: {
      // Brand gradients
      primaryToAccent: string;
      primaryLight: string;
      primaryDark: string;
      primaryBright: string;
      accentLight: string;
      accentBright: string;
      accentGreen: string;

      // Status gradients
      success: string;
      danger: string;
      warning: string;
      info: string;

      // Shortcuts
      hero: string;
      surface: string;
      overlayBottom: string;
      overlayFull: string;
      shimmer: string;
    };

    // === NEW: Enhanced Shadows ===
    shadows: {
      // Basic elevations
      none: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;

      // Semantic shadows
      card: string;
      cardHover: string;
      button: string;
      buttonHover: string;
      modal: string;
      dropdown: string;
      navbar: string;
      footer: string;

      // Inner shadows
      innerXs: string;
      innerSm: string;
      innerMd: string;
      innerLg: string;

      // Colored shadows
      primaryGlow: string;
      primaryGlowStrong: string;
      accentGlow: string;
      accentGlowStrong: string;
      dangerGlow: string;
      dangerGlowStrong: string;
      successGlow: string;
      infoGlow: string;

      // Focus states
      focus: string;
      focusAccent: string;
      focusDanger: string;
    };

    // === Spacing (unchanged) ===
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    // === Radii (unchanged) ===
    radii: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      full: string;
    };

    // === Breakpoints (unchanged) ===
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
    };

    // === Layout (unchanged) ===
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

    // === Typography (unchanged) ===
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

    // === Backward Compatibility Layer ===
    _legacy?: {
      colors: any;
      oldShadows: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
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
