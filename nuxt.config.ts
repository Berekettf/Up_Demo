import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'shadcn-nuxt'
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-11-09',
  

  
  ssr: false, // Disable server-side rendering, enabling static site generation
  generate: {
    routes: [], 
  },
 
})
