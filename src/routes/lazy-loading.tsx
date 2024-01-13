import Elysia from 'elysia'

export default new Elysia().get('/graph', () => (
  <img
    src='https://htmx.org/img/tokyo.png'
    alt='Tokiyo'
    height='400'
    width='600'
  />
))
