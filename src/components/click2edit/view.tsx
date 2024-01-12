export default ({
  contact,
}: {
  contact: {
    firstname: string
    email: string
    lastname: string
  }
}) => (
  <article hx-target='this' hx-swap='outerHTML'>
    <section>
      <p class='grid'>
        <strong>First Name:</strong>
        {contact.firstname}
      </p>

      <p class='grid'>
        <strong>Last Name:</strong>
        {contact.lastname}
      </p>
      <p class='grid'>
        <strong>Email:</strong>
        {contact.email}
      </p>
    </section>
    <button hx-get='/contact/1/edit'>Click To Edit</button>
  </article>
)
