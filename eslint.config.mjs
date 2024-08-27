// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import googleConfig from "gts";

export default withNuxt(
  {
    ignores: ["node_modules", "public"],
  },
  {
    files: ["pages/**/*.vue", "server/**/*.ts"],
    rules: {
      ...googleConfig,
    },
  },
);
