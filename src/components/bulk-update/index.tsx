export default ({
  contacts,
}: {
  contacts: Array<{
    name: string
    email: string
    status: boolean
  }>
}) => (
  <div>
    <div hx-include='#checked-contacts' hx-target='#tbody'>
      <button class='btn' hx-put='/activate'>
        Activate
      </button>
      <button class='btn' hx-put='/deactivate'>
        Deactivate
      </button>
    </div>

    <form id='checked-contacts'>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody id='tbody'>
          {contacts.map((contact, id) => (
            <tr>
              <td>
                <input type='checkbox' name='id' value={id + ''} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.status ? 'Active' : 'Inactive'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  </div>
)
