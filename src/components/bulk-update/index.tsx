import Base from '@/layouts/base'
export default ({ children }: Html.PropsWithChildren) => (
  <Base>
    <link rel='stylesheet' href='./flash.css' />
    <main class='container'>
      <article>
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
            <tbody id='tbody'>{children}</tbody>
          </table>
        </form>
        <div class='grid' hx-include='#checked-contacts' hx-target='#tbody'>
          <button hx-put='/bulk/activate'>Activate</button>
          <button class='outline' hx-put='/bulk/deactivate'>
            Deactivate
          </button>
        </div>
      </article>
    </main>
  </Base>
)
