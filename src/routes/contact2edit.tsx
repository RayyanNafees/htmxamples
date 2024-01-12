import { Elysia, t } from 'elysia'
import Form from '@/components/click2edit/form'
import View from '@/components/click2edit/view'
import { faker } from '@faker-js/faker'

export default new Elysia({ prefix: '/contact/1' })
  .state('contact', {
    firstname: faker.person.firstName(),
    lastname: faker.person.lastName(),
    email: faker.internet.exampleEmail(),
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
