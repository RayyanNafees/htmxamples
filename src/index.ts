import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { bulkUpdate, edit, click2load } from '@/routes'
import home from './routes/home'
import staticPlugin from '@elysiajs/static'

const app = new Elysia()
  .use(html())
  .use(staticPlugin({prefix:''}))
  .use(home)
  .use(edit)
  .use(bulkUpdate)
  .use(click2load)

  .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.url}`)
