import { faker } from '@faker-js/faker'
import { Elysia, t } from 'elysia'
import getContacts from '@/utils/contacts'
import Click2load from '@/components/click2load'

const make5contacts = () =>
  getContacts(5, {
    status: () => faker.datatype.boolean(),
  })

export default new Elysia().state('contacts', make5contacts()).get(
  'load/contacts',
  ({ query: { page }, store }) => {
    if (store.contacts.length < 5 * +page)
      store.contacts = store.contacts.concat(make5contacts())

    return (
      <Click2load page={+page} contacts={store.contacts.slice((+page - 1) * 5) as any} />
    )
  },
  {
    query: t.Object({ page: t.String({ default: '1' }) }),
  }
)
