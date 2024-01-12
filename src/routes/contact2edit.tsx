import { Elysia, t } from 'elysia'
import Form from '@/components/click2edit/form'
import View from '@/components/click2edit/view'

export default new Elysia({ prefix: '/contact/1' })
  .state('contact', {
    firstname: 'Joe',
    lastname: 'Blow',
    email: 'joe@blow.com',
  })
  .get('/edit', (c) => <Form contact={c.store.contact} />)
  .get('/', (c) => <View contact={c.store.contact} />)
  .put(
    '/',
    ({ body: { firstname, email, lastname }, store: { contact } }) => {
      contact.email = email
      contact.lastname = lastname
      contact.firstname = firstname

      console.log({ contact })
      return <View contact={contact} />
    },
    {
      body: t.Object({
        firstname: t.String(),
        email: t.String({ format: 'email' }),
        lastname: t.String(),
      }),
    }
  )
