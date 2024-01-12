import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { bulkUpdate, edit } from '@/routes'
import home from './routes/home'

const app = new Elysia()
  .use(html())

  .use(home)
  .use(edit)
  .use(bulkUpdate)

  .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.url}`)
