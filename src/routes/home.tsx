import Elysia from 'elysia'
import Home from '@/components/home'
import links from './routes.json'

export default new Elysia().get('/', () => <Home links={links} />)
