import tailwindcss from '@tailwindcss/vite'
import './env'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', 'shadcn-nuxt'],
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['@vueuse/core', 'class-variance-authority', 'reka-ui', 'clsx', 'tailwind-merge'],
    },
  },
  shadcn: {
    prefix: '',
    componentDir: '@/components/ui',
  },
})
