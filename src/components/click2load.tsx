import { Contact } from '@/utils/contacts'
import { Suspense } from '@elysiajs/html'

export default ({
  contacts,
  page,
}: {
  page: number
  contacts: Array<Contact>
}) => (
  <>
    {contacts.map((contact) => (
      <tr>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td style={{ color: contact.status ? 'seagreen' : 'coral' }}>
          {contact.status ? 'Active' : 'Inactive'}
        </td>
      </tr>
    ))}
    <tr id='replaceMe'>
      <td colspan="3">
        <button
          hx-vals={`{"page":${page + 1}}`}
          hx-get='/load/contacts'
          hx-target='#replaceMe'
          hx-swap='outerHTML'
          hx-indicator='progress'
        >
          Load more
        </button>
        <progress class='htmx-indicator'></progress>
      </td>
    </tr>
  </>
)
