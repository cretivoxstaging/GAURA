// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {

      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app:{
    // pageTransition: { name: 'Loader', mode: 'out-in' },
    // components: true,
    head: {
      link: [
        {rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Platypi:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"'},
      ],
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/vivus/0.4.6/vivus.min.js',
          defer: true
        }
      ]
    }
  },
  // plugins: [
  //   '~/plugins/vivus.js'
  // ],
  ssr: false,
  modules: ['nuxt-marquee', 'nuxt-aos', 'nuxt-swiper'],
  
})

