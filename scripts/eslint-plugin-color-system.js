/**
 * Custom ESLint Plugin: No Hardcoded Colors
 * ==========================================
 * Warns when hardcoded color values are used instead of theme tokens
 *
 * Usage: Add to eslint.config.mjs
 */

const noHardcodedColors = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow hardcoded color values in styled-components",
      category: "Best Practices",
      recommended: true,
    },
    messages: {
      hardcodedHex: "Avoid hardcoded hex colors. Use theme.colors.* instead",
      hardcodedRgba: "Avoid hardcoded rgba(). Use alpha() utility instead",
      hardcodedRgb: "Avoid hardcoded rgb(). Use theme colors instead",
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    // Hex color pattern: #RGB or #RRGGBB
    const hexPattern = /#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})\b/g;

    // rgba() pattern
    const rgbaPattern =
      /rgba\s*\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)/g;

    // rgb() pattern
    const rgbPattern = /rgb\s*\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/g;

    return {
      // Check template literals (for styled-components)
      TemplateLiteral(node) {
        node.quasis.forEach((quasi) => {
          const text = quasi.value.raw;

          // Check for hex colors
          const hexMatches = text.match(hexPattern);
          if (hexMatches) {
            context.report({
              node: quasi,
              messageId: "hardcodedHex",
              data: { color: hexMatches[0] },
            });
          }

          // Check for rgba()
          const rgbaMatches = text.match(rgbaPattern);
          if (rgbaMatches) {
            context.report({
              node: quasi,
              messageId: "hardcodedRgba",
            });
          }

          // Check for rgb()
          const rgbMatches = text.match(rgbPattern);
          if (rgbMatches) {
            context.report({
              node: quasi,
              messageId: "hardcodedRgb",
            });
          }
        });
      },

      // Check string literals
      Literal(node) {
        if (typeof node.value === "string") {
          const text = node.value;

          // Check for hex colors
          if (hexPattern.test(text)) {
            context.report({
              node,
              messageId: "hardcodedHex",
            });
          }

          // Check for rgba()
          if (rgbaPattern.test(text)) {
            context.report({
              node,
              messageId: "hardcodedRgba",
            });
          }

          // Check for rgb()
          if (rgbPattern.test(text)) {
            context.report({
              node,
              messageId: "hardcodedRgb",
            });
          }
        }
      },
    };
  },
};

const preferAlphaUtility = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Prefer alpha() utility over hardcoded rgba()",
      category: "Best Practices",
      recommended: true,
    },
    messages: {
      preferAlpha: "Use alpha(color, opacity) instead of rgba()",
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    const rgbaPattern = /rgba\s*\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)/;

    return {
      TemplateLiteral(node) {
        node.quasis.forEach((quasi) => {
          if (rgbaPattern.test(quasi.value.raw)) {
            context.report({
              node: quasi,
              messageId: "preferAlpha",
            });
          }
        });
      },
    };
  },
};

const preferThemeTokens = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Prefer theme tokens over direct color values",
      category: "Best Practices",
      recommended: true,
    },
    messages: {
      useThemeToken: "Use theme.colors.* instead of hardcoded value",
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    // Common hardcoded color values
    const commonColors = {
      "#F97316": "theme.colors.primary.main",
      "#EA580C": "theme.colors.primary.hover",
      "#FFFFFF": "theme.colors.surface.default or theme.colors.text.onPrimary",
      "#000000": "theme.colors.background.default (dark mode)",
      "#111827": "theme.colors.text.primary",
      "#6B7280": "theme.colors.text.tertiary",
    };

    return {
      Literal(node) {
        if (
          typeof node.value === "string" &&
          commonColors[node.value.toUpperCase()]
        ) {
          context.report({
            node,
            messageId: "useThemeToken",
            data: {
              suggestion: commonColors[node.value.toUpperCase()],
            },
          });
        }
      },
    };
  },
};

// Export the plugin
export default {
  rules: {
    "no-hardcoded-colors": noHardcodedColors,
    "prefer-alpha-utility": preferAlphaUtility,
    "prefer-theme-tokens": preferThemeTokens,
  },
};

/**
 * To use this plugin in eslint.config.mjs:
 *
 * import colorSystemPlugin from './scripts/eslint-plugin-color-system.js';
 *
 * export default [
 *   // ... other config
 *   {
 *     plugins: {
 *       'color-system': colorSystemPlugin,
 *     },
 *     rules: {
 *       'color-system/no-hardcoded-colors': 'warn',
 *       'color-system/prefer-alpha-utility': 'warn',
 *       'color-system/prefer-theme-tokens': 'warn',
 *     },
 *   },
 * ];
 */
