// eslint.config.mjs
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "*.lock",
      "*.config.js",
      "*.config.ts",
      "*.log",
      "desktop.ini",
      "next-env.d.ts",
    ],
    settings: {
      "import/resolver": {
        typescript: {
          project: path.resolve(__dirname, "./tsconfig.json"),
        },
      },
    },
    rules: {
      // DOM props
      "react/no-unknown-property": ["warn", { ignore: ["^\\$.*"] }],

      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];

export default eslintConfig;
