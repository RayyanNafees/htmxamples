import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { bulkUpdate, edit, click2load, deleteRow, dialog, lazyLoading } from '@/routes'

import home from './routes/home'
import staticPlugin from '@elysiajs/static'

const app = new Elysia()
  .use(html())
  .use(staticPlugin({ prefix: '' }))
  .use(home)
  .use(edit)
  .use(bulkUpdate)
  .use(click2load)
  .use(deleteRow)
  .use(dialog)
  .use(lazyLoading)
  .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.url}`)
