export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    ['@nuxtjs/i18n', {
      vueI18n: './i18n.config.ts'
    }],
  ],
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_API_URL,
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
