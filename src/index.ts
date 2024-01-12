import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { edit } from '@/routes'
import home from './routes/home'

const app = new Elysia()
  .use(html())

  .use(home)
  .use(edit)

  .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.url}`)
