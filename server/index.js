const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(
  bodyParser({
    extendTypes: ['json', 'form', 'text']
  })
)

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

// const user = require('./api/user')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  await nuxt.ready()
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // app.use(user.routes()).use(user.allowedMethods())

  // app.use((ctx) => {
  //   ctx.status = 200
  //   ctx.respond = false // Bypass Koa's built-in response handling
  //   ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
  //   nuxt.render(ctx.req, ctx.res)
  // })
  app.use((ctx) => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset
    // global.console.log(new Date(),47)
    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, (promise) => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
