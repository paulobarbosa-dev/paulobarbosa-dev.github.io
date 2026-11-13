import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://luizalvesdev.github.io',
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    routing: { prefixDefaultLocale: false },
  },
})
