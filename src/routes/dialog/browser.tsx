import Elysia from 'elysia'

export default new Elysia().post(
  '/browser',
  ({ headers }) => `User entered ${headers['hx-prompt']}`
)
