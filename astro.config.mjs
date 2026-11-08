import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://paulobarbosa-dev.github.io',
  i18n: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    routing: { prefixDefaultLocale: false },
  },
})
