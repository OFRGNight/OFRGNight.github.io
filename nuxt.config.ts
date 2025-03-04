// https://nuxt.com/docs/api/configuration/nuxt-config
import siteMeta from "./siteMeta";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  app: {
    head: {
      title: siteMeta.siteName,
      link: [
        {
          rel: "icon",
          href: "/favicon.svg",
          type: "image/svg+xml",
        },
      ],
      meta: [
        {
          name: "description",
          content: siteMeta.description,
        },
        {
          property: "og:title",
          content: siteMeta.siteName,
        },
        {
          property: "og:locale",
          content: "pt_BR",
        },
        {
          property: "og:description",
          content: siteMeta.description,
        },
        {
          property: "og:url",
          content: "https://ofrgnight.github.io",
        },
        {
          property: "og:site_name",
          content: siteMeta.siteName,
        },
        {
          property: "og:image",
          content: "/images/default.webp",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          property: "twitter:image",
          content: "/images/default.webp",
        },
        {
          property: "twitter:title",
          content: siteMeta.siteName,
        },
      ],
    },
  },

  tailwindcss: {
    viewer: false,
    config: {
      theme: {
        extend: {
          fontFamily: {
            custom: ["Open Sans"],
          },
        },
      },
    },
  },
});
