export default ({
  contacts,
}: {
  contacts: Array<{
    name: string
    email: string
    status: boolean
    class: 'activate' | 'deactivate' | ''
  }>
}) => (
  <tbody id='tbody' hx-swap='outerHTML'>
    {contacts.map((contact, id) => (
      <tr class={contact.class}>
        <td>
          <input type='checkbox' name='ids' value={id + ''} />
        </td>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td style={{ color: contact.status ? 'seagreen' : 'coral' }}>
          {contact.status ? 'Active' : 'Inactive'}
        </td>
      </tr>
    ))}
  </tbody>
)
