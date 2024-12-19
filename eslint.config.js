import pluginJs from "@eslint/js";
import globals from "globals";
import prettierConfig from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["build/**/*"],
  },
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: { ...globals.browser },
    },
  },
  {
    files: ["**/*.js"],
    ignores: ["src/**/*.js"],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
  pluginJs.configs.recommended,
  prettierConfig,
];
