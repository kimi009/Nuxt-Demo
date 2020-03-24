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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: '/js/flexible.js',
        type: 'text/javascript',
        charset: 'utf-8'
      }
    ]
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
    '~assets/css/reset.css',
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
    // '@nuxtjs/proxy'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  // axios: {
  //   proxy: true,
  //   retry: {
  //     reties: 3
  //   },
  //   // 开发模式下开启debug
  //   debug: false, // process.env._ENV == 'production' ? false : true,
  //   // 设置不同环境的请求地址
  //   // baseURL:
  //   //   process.env._ENV == 'production'
  //   //     ? 'http://localhost:3000'
  //   //     : 'http://localhost:3000',
  //   // withCredentials: true,
  //   // headers: { 'Content-Type': 'application/json', crossDomain: true },
  //   timeout: 5000
  // },
  // proxy: [
  //   [
  //     '/api',
  //     {
  //       target: 'http://localhost:6010',
  //       pathRewrite: { '^/api': '' }
  //     }
  //   ]
  // ],
  /*
   ** Build configuration
   */
  build: {
    // transpile: [/ant-design-vue/],
    postcss: [
      require('postcss-px2rem')({
        remUnit: 100
      })
    ],
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
    }
    // cssSourceMap: false,
    // optimization: {
    //   minimize: true,
    //   minimizer: [
    //     // terser-webpack-plugin
    //     // optimize-css-assets-webpack-plugin
    //   ],
    //   splitChunks: {
    //     chunks: 'all',
    //     automaticNameDelimiter: '.',
    //     name: undefined,
    //     cacheGroups: {}
    //   }
    // }
    // productionSourceMap: false,
    // productionGzip: true,
    // productionGzipExtensions: ['js', 'css']
    // analyze: true,
    // assetFilter(assetFilename) {
    //   return assetFilename.endsWith('.js')
    // }
  }
}
