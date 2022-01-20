import config from './config/phaidra-ui'
const path = require('path')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'phaidra-ui-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/d3NetworkCustom.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios', mode: 'client' },
    { src: '~/plugins/svg-icon' },
    { src: '~/plugins/before-each.js' },
    { src: '~/plugins/after-each.js' },
    { src: '~/plugins/vue-meta.js' },
    { src: '~/plugins/lodash.js' },
    { src: '~/plugins/vuetify.js', mode: 'client' },
    { src: '~/plugins/phaidra-vue-components', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n',
    '@nuxtjs/axios',
    '@nuxt/http'
  ],
  i18n: {
    langDir: 'locales/',
    locales: [
      {
        name: 'English',
        code: 'eng',
        iso: 'eng',
        file: 'eng'
      },
      {
        name: 'Deutsch',
        code: 'deu',
        iso: 'deu',
        file: 'deu'
      }
    ],
    strategy: 'no_prefix',
    fallbackLocale: 'eng',
    defaultLocale: 'eng',
    vueI18n: {
      silentTranslationWarn: true,
      silentFallbackWarn: true
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: config.instances[config.defaultinstance].primary
        },
        dark: {
          primary: config.instances[config.defaultinstance].primary
        }
      }
    }
  },

  alias: {
    vue: path.resolve(path.join(__dirname, 'node_modules', 'vue')),
    vuetify: path.resolve(path.join(__dirname, 'node_modules', 'vuetify'))
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config, { isDev, isClient }) {
      config.node = {
        fs: 'empty'
      }
    },
    transpile: ['phaidra-vue-components']
  }
}