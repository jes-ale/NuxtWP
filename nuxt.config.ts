// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    //'@nuxtjs/i18n',
  ],
  runtimeConfig: {
    apiSecret: '',
    apiUrl: '',
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  }
})
