export default ({
  contact,
}: {
  contact: {
    firstname: string
    lastname: string
    email: string
  }
}) => (
  <article hx-target='this' hx-swap='outerHTML'>
    <form hx-put='/contact/1'>
      <section>
        <p class='grid'>
          <label for='firstname'>
            <strong> First Name:</strong>
          </label>
          <input id='firstname' name='firstname' value={contact.firstname} />
        </p>

        <p class='grid'>
          <label for='lastname'>
            <strong>Last Name:</strong>
          </label>
          <input name='lastname' id='lastname' value={contact.lastname} />
        </p>
        <p class='grid'>
          <label for='email'>
            <strong>Email:</strong>
          </label>
          <input type='email' id='email' name='email' value={contact.email} />
        </p>
      </section>
      <div class='grid'>
        <button hx-get='contact/1' class='secondary outline'>
          Cancel
        </button>
        <input type='submit' value='Confirm'></input>
      </div>
    </form>
  </article>
)
