import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Disable the rule for 'any' type
      "@typescript-eslint/no-empty-interface": "off", // Disable the empty interface rule
      "@typescript-eslint/no-empty-object-type": "off", // Disable the empty object type rule
      "@typescript-eslint/no-require-imports": "off", // Disable the empty object type rule
    },
  },
];
