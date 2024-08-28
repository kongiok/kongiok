// @ts-check
import googleConfig from "gts";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  {
    ignores: ["node_modules", "public"],
  },
  {
    files: ["pages/**/*.vue", "server/**/*.ts"],
    plugins: { googleConfig },
  },
);
