import { Elysia, t } from 'elysia'
import { faker } from '@faker-js/faker'
import List from '@/components/bulk-update'
import getContacts, { type Contact } from '@/utils/contacts'

export default new Elysia()
  .state(
    'contacts',
    getContacts(5, {
      status: () => faker.datatype.boolean(),
      class: () => '',
    }) as Array<Contact>
  )
  .get('/bulk/contact', (c) => <List contacts={c.store.contacts} />)
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
