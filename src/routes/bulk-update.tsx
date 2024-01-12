import { Elysia, t } from 'elysia'
import BulkUpdate from '@/components/bulk-update'
import { faker } from '@faker-js/faker'
import List from '@/components/bulk-update/list'

export default new Elysia()
  .state(
    'contacts',
    Array(5)
      .fill(0)
      .map((_, n) => {
        const firstName = faker.person.firstName(),
          lastName = faker.person.lastName()

        return {
          id: n,
          name: firstName + ' ' + lastName,
          email: faker.internet.email({ firstName, lastName }),
          status: faker.datatype.boolean(),
          class: '' as '' | 'activate' | 'deactivate',
        }
      })
  )
  .get('/bulk/contact', (c) => (
    <BulkUpdate>
      <List contacts={c.store.contacts} />
    </BulkUpdate>
  ))
  .put(
    '/bulk/activate',
    ({ body: { ids }, store: { contacts } }) => {
      contacts
        .filter((contact) => {
          contact.class = ''
          return ids.includes(contact.id + '')
        })
        .map((contact) => {
          contact.status = true
          contact.class = 'activate'
        })
      return <List contacts={contacts} />
    },
    {
      body: t.Object({ ids: t.Array(t.String()) }),
    }
  )
  .put(
    '/bulk/deactivate',
    ({ body: { ids }, store: { contacts } }) => {
      contacts
        .filter((contact) => {
          contact.class = ''
          return ids.includes(contact.id + '')
        })
        .map((contact) => {
          contact.status = false
          contact.class = 'deactivate'
        })
      return <List contacts={contacts} />
    },
    {
      body: t.Object({ ids: t.Array(t.String()) }),
    }
  )
  .get('/bulk/flash.css', Bun.file('./src/components/bulk-update/flash.css'))
