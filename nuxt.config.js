export default {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Code With Mukesh',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Consultant software developer who has been building application using Nuxt and Vue since 2021.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/assets/images/mukeshphoto.jpg' }
    ]
  },
  loading:{color: '#F97F33',height: '5px',duration: 5000},
  loadingIndicator: {
    name: 'circle',
    color: '#F97F33',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/styles/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios','@nuxtjs/google-gtag'],
  axios: {
    baseURL: 'https://nuxt-portfolio-blog-default-rtdb.firebaseio.com/', // base URL for Firebase
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/, 'vueex'], // Add 'vueex' to the transpile array
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  'google-gtag': {
    id: 'G-LN72CJCKYH', // Your Google Analytics ID
    debug: true, // Enable to track in development
    config: {
      anonymize_ip: true, // Anonymizes IP addresses
      send_page_view: true, // Manually send page views
    }
  }
}
