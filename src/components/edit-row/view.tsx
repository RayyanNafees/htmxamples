import { Contact } from '@/utils/contacts'

export default ({ contacts }: { contacts: Array<Contact> }) => (
  <tbody
    hx-confirm='Are you sure?'
    hx-target='closest tr'
    hx-swap='outerHTML swap:1s'
  >
    {contacts.map((contact) => (
      <tr>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td style={{ color: contact.status ? 'seagreen' : 'coral' }}>
          {contact.status ? 'Active' : 'Inactive'}
        </td>
        <td>
          <button
            class='contrast outline'
            hx-put={'/contact?id='+contact.id}
          >
            Delete
          </button>
        </td>
      </tr>
    ))}
  </tbody>
)
