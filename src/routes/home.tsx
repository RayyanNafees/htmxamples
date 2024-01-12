import Elysia from 'elysia'
import Home from '@/components/home'

const links = [
  {
    title: 'Click To Edit',
    href: '/contact/1',
    htmx: 'https://htmx.org/examples/click-to-edit/',
  },
  {
    title: 'Bulk Update',
    htmx: 'https://htmx.org/examples/bulk-update/',
    href: '/contact',
  },
]

export default new Elysia().get('/', () => <Home links={links} />)
