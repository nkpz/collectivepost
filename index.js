const Koa = require('koa');
const views = require('koa-views');
const app = new Koa();

app.use(views(__dirname + '/views'));

app.use(async ctx => {
  await ctx.render('index');
});

app.listen(8000);
