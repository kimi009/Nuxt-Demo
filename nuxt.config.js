const path = require('path')
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  // css: ['ant-design-vue/dist/antd.css'],
  css: [
    'ant-design-vue/lib/row/style/css',
    'ant-design-vue/lib/col/style/css',
    'ant-design-vue/lib/button/style/css',
    'ant-design-vue/lib/menu/style/css',
    'ant-design-vue/lib/table/style/css',
    'ant-design-vue/lib/tag/style/css',
    'ant-design-vue/lib/divider/style/css',
    'ant-design-vue/lib/card/style/css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/antd-ui'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias['@ant-design/icons/lib/dist$'] = path.resolve(
        __dirname,
        './assets/icon/antd-icon.js'
      ) // 引入需要的
      // config.module.rules.push({
      //   test: /\.less$/,
      //   use: [
      //     {
      //       loader: 'less-loader',
      //       options: {
      //         // modifyVars: {
      //         //   'primary-color': '#2EA9DF',
      //         //   'link-color': '#2EA9DF',
      //         //   'border-radius-base': '4px'
      //         // },
      //         javascriptEnabled: true
      //       }
      //     }
      //   ]
      // })
    },
    // productionSourceMap: false,
    // productionGzip: true,
    // productionGzipExtensions: ['js', 'css']
    // analyze: true,
    // assetFilter(assetFilename) {
    //   return assetFilename.endsWith('.js')
    // }
  }
}
