import Elysia from 'elysia'
import browser from './browser'

export default new Elysia({prefix:'/dialog'}).use(browser)
