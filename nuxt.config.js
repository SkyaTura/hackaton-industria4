module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'industria4',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
   * Load CSS
   */
  css: [
    'materialize-css/dist/css/materialize.min.css',
    '~/css/reset.css'
  ],
  /*
   * Load and config modules
   */
  modules: [
    '@nuxtjs/pwa'
  ],
  plugins: [
    '~/plugins/AppFirebase'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#ffca12' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
