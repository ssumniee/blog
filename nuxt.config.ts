import {fileURLToPath} from 'url';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'ssumniee 블로그',
    },
  },
  devtools: {enabled: true},
  srcDir: 'src/',
  ssr: true,
  modules: ['@vueuse/nuxt'],
  alias: {
    '@': fileURLToPath(new URL('./src/', import.meta.url)),
    '~': fileURLToPath(new URL('./', import.meta.url)),
  },
  compatibilityDate: '2024-07-31',
});
