import DeleteRow from '@/components/delete-row'
import getContacts, { Contact } from '@/utils/contacts'
import { faker } from '@faker-js/faker'
import Elysia, { t } from 'elysia'

export default new Elysia()
  .state(
    'contacts',
    getContacts(5, {
      status: () => faker.datatype.boolean(),
    }) as Array<Contact>
  )
  .get('/get/contacts', (c) => <DeleteRow contacts={c.store.contacts} />)
  .delete(
    '/contact',
    ({ query, store }) => {
      try {
        delete store.contacts[
          store.contacts.findIndex(
            (contact: Contact) => contact?.id == +query.id
          )
        ]
      } catch (e) {
        console.error(e)
      }
    },
    {
      query: t.Object({
        id: t.String(),
      }),
    }
  )
