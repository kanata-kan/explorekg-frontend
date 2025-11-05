"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* Theme Tokens as CSS Variables v2.0 */
  :root {
    /* Brand Colors */
    --color-primary: ${({ theme }) => theme.colors.primary.main};
    --color-primary-hover: ${({ theme }) => theme.colors.primary.hover};
    --color-primary-light: ${({ theme }) => theme.colors.primary.light};
    --color-secondary: ${({ theme }) => theme.colors.secondary.main};
    --color-secondary-hover: ${({ theme }) => theme.colors.secondary.hover};
    --color-accent: ${({ theme }) => theme.colors.accent.main};
    --color-accent-hover: ${({ theme }) => theme.colors.accent.hover};

    /* Status Colors */
    --color-success: ${({ theme }) => theme.colors.success.main};
    --color-danger: ${({ theme }) => theme.colors.danger.main};
    --color-warning: ${({ theme }) => theme.colors.warning.main};
    --color-info: ${({ theme }) => theme.colors.info.main};

    /* Surfaces & Backgrounds */
    --color-background: ${({ theme }) => theme.colors.background.default};
    --color-background-alt: ${({ theme }) => theme.colors.background.alt};
    --color-surface: ${({ theme }) => theme.colors.surface.default};
    --color-surface-alt: ${({ theme }) => theme.colors.surface.alt};
    --color-surface-hover: ${({ theme }) => theme.colors.surface.hover};

    /* Text Colors */
    --color-text-primary: ${({ theme }) => theme.colors.text.primary};
    --color-text-secondary: ${({ theme }) => theme.colors.text.secondary};
    --color-text-tertiary: ${({ theme }) => theme.colors.text.tertiary};
    --color-text-muted: ${({ theme }) => theme.colors.text.tertiary};
    --color-text-inverse: ${({ theme }) => theme.colors.text.inverse};
    --color-text-on-primary: ${({ theme }) => theme.colors.text.onPrimary};
    --color-text-brand: ${({ theme }) => theme.colors.text.brand};
    --color-text-accent: ${({ theme }) => theme.colors.text.accent};

    /* Borders & Dividers */
    --color-border: ${({ theme }) => theme.colors.border.default};
    --color-border-strong: ${({ theme }) => theme.colors.border.strong};
    --color-divider: ${({ theme }) => theme.colors.divider};

    /* Interactive States */
    --color-hover: ${({ theme }) => theme.colors.interactive.hover};
    --color-active: ${({ theme }) => theme.colors.interactive.active};
    --color-focus: ${({ theme }) => theme.colors.interactive.focus};

    /* Shadows */
    --shadow-xs: ${({ theme }) => theme.shadows.xs};
    --shadow-sm: ${({ theme }) => theme.shadows.sm};
    --shadow-md: ${({ theme }) => theme.shadows.md};
    --shadow-lg: ${({ theme }) => theme.shadows.lg};
    --shadow-xl: ${({ theme }) => theme.shadows.xl};
    --shadow-card: ${({ theme }) => theme.shadows.card};
    --shadow-card-hover: ${({ theme }) => theme.shadows.cardHover};
    --shadow-button: ${({ theme }) => theme.shadows.button};
    --shadow-focus: ${({ theme }) => theme.shadows.focus};

    /* Gradients */
    --gradient-primary: ${({ theme }) => theme.gradients.primaryToAccent};
    --gradient-hero: ${({ theme }) => theme.gradients.hero};
    --gradient-surface: ${({ theme }) => theme.gradients.surface};

    /* Typography tokens */
    --font-base: ${({ theme }) => theme.typography.fontFamily.base};
    --font-heading: ${({ theme }) => theme.typography.fontFamily.heading};

    --font-size-h1: ${({ theme }) => theme.typography.fontSizes.h1};
    --font-size-h2: ${({ theme }) => theme.typography.fontSizes.h2};
    --font-size-h3: ${({ theme }) => theme.typography.fontSizes.h3};
    --font-size-body: ${({ theme }) => theme.typography.fontSizes.body};
    --font-size-caption: ${({ theme }) => theme.typography.fontSizes.caption};

    --line-height-tight: ${({ theme }) => theme.typography.lineHeights.tight};
    --line-height-normal: ${({ theme }) => theme.typography.lineHeights.normal};
    --line-height-relaxed: ${({ theme }) => theme.typography.lineHeights.relaxed};

    /* Spacing tokens */
    --spacing-xs: ${({ theme }) => theme.spacing.xs};
    --spacing-sm: ${({ theme }) => theme.spacing.sm};
    --spacing-md: ${({ theme }) => theme.spacing.md};
    --spacing-lg: ${({ theme }) => theme.spacing.lg};
    --spacing-xl: ${({ theme }) => theme.spacing.xl};

    /* Layout tokens */
    --container-max-lg: ${({ theme }) => theme.layout.container.maxWidth.lg};
    --container-max-xl: ${({ theme }) => theme.layout.container.maxWidth.xl};
    --section-spacing-default-md: ${({ theme }) => theme.layout.section.spacing.default.md};
  }

  /* 🧩 Modern Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
      height: 100%;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden; /* 🔥 يمنع الانزلاق الجانبي */
  margin: 0;
  padding: 0;
  }

  /* 🧠 Base Typography System */
  body {
    font-family: var(--font-base);
    line-height: var(--line-height-relaxed);
    background-color: var(--color-background);
    color: var(--color-text-primary);
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* 🏗️ Headings follow heading font */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    color: var(--color-text-primary);
    line-height: var(--line-height-tight);
    margin-bottom: 0.5em;
  }

  h1 { font-size: var(--font-size-h1); font-weight: 700; }
  h2 { font-size: var(--font-size-h2); font-weight: 600; }
  h3 { font-size: var(--font-size-h3); font-weight: 500; }

  /* 📝 Body Text */
  p {
    margin-bottom: 1rem;
    font-size: var(--font-size-body);
    color: var(--color-text-secondary);
  }

  small, .caption {
    font-size: var(--font-size-caption);
    color: var(--color-text-muted);
  }

  /* 🌐 Links */
  a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color 0.2s ease;
  }
  a:hover {
    text-decoration: underline;
  }

  /* 🔘 Form Elements */
  button, input, textarea, select {
    font: inherit;
    background: none;
    border: none;
    color: inherit;
  }

  /* ♿ Accessibility Focus */
  :focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

/* 🧩 Utility Classes */
.mb-strong {
  margin-bottom: 2rem !important;
}

/* ✂️ Clamp text to 2 lines (hide overflow) */
.text-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* عدد الأسطر المسموح بها */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

section, main, header, footer {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

@media (min-width: 1024px) {
  .main-container {
    padding-top: var(--navbar-height);
  }
}
html {
  --navbar-height: 60px;
}

/* 🎛️ Scrollbar Styling */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: ${({ theme }) =>
    theme.isDark
      ? "rgba(15, 23, 42, 0.95)" // الخلفية الغامقة (نفس لون الموقع)
      : "rgba(250, 250, 250, 0.95)"};
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: ${({ theme }) =>
    theme.isDark
      ? "linear-gradient(180deg, rgba(251, 146, 60, 0.85), rgba(234, 88, 12, 0.9))" // برتقالي متدرج
      : "linear-gradient(180deg, rgba(16, 185, 129, 0.85), rgba(5, 150, 105, 0.9))"}; // أخضر متدرج
  border-radius: 999px;
  border: 2px solid
    ${({ theme }) =>
      theme.isDark ? "rgba(15, 23, 42, 1)" : "rgba(250, 250, 250, 1)"};
  transition: all 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) =>
    theme.isDark
      ? "linear-gradient(180deg, rgba(251, 146, 60, 1), rgba(234, 88, 12, 1))"
      : "linear-gradient(180deg, rgba(16, 185, 129, 1), rgba(5, 150, 105, 1))"};
}

/* Firefox Support */
* {
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) =>
    theme.isDark
      ? "rgba(251, 146, 60, 0.8) rgba(15, 23, 42, 0.95)"
      : "rgba(16, 185, 129, 0.8) rgba(250, 250, 250, 0.95)"};
}


`;
