import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { edit, links } from '@/routes'
import staticPlugin from '@elysiajs/static'

const app = new Elysia()
  .use(html())
  .use(staticPlugin({ prefix: '' }))

  .use(links)
  .use(edit)

  .listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.url}`)
