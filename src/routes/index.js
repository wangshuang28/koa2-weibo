const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render("index", {
    title: 'hhhhhhh',
    msg: '你好',
    isMe: true,
    blogList: [
      {
        id:1,
        title: 'aaa'
      },
      {
        id:2,
        title: 'bbb'
      },
      {
        id:3,
        title: 'ccc'
      },
    ]
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
router.get('/profile/:userName', async (ctx, next) => {
  const { userName } = ctx.params
  ctx.body = {
    title: 'this is',
    userName
  }
})
router.get('/loadMore/:userName/:page', async (ctx, next) => {
  const { userName,page } = ctx.params
  ctx.body = {
    title: 'this is',
    userName,
    page
  }
})

module.exports = router
