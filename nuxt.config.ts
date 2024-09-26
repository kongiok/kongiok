// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/styles/main.css", "~/assets/styles/fonts.css"],
  modules: [
    "@nuxt/eslint",
    "@nuxt/test-utils/module",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/icon",
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  tailwindcss: {
    cssPath: "~/assets/styles/main.css",
  },
});