const Router = require('koa-router')

const router = new Router({
  prefix: '/user'
})

router.get('/info', async (ctx) => {
  const res = await new Promise((resolve) => {
    const list = []
    for (let index = 0; index < 3; index++) {
      list.push({
        id: index,
        name: `test--${index}`,
        des: `中软国际事业${index}部`
      })
    }
    setTimeout(() => {
      resolve(list)
    }, 200)
  })
  ctx.body = {
    list: res
  }
})

router.post('/detail', async (ctx) => {
  //   const { id } = ctx.request.body
  const res = await new Promise((resolve) => {
    const list = []
    for (let index = 0; index < 20; index++) {
      list.push({
        key: index,
        name: `张三--${index}`,
        age: index,
        address: `雁塔区---${index}`,
        tags: ['成功', '失败']
      })
    }
    setTimeout(() => {
      resolve(list)
    }, 200)
  })
  ctx.body = {
    list: res
  }
})

module.exports = router
