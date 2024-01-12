import Base from '@/layouts/base'

export default ({
  links,
}: {
  links: Array<{
    title: string
    href: string
    htmx: string
  }>
}) => (
  <Base>
    <main class='container'>
      <aside>
        <h1>HTMX Examples using PicoCSS + Bun Elysia</h1>
        <ul>
          {links.map(async (link) => (
            <li style={{ display: 'list-item', listStyleType: `"\\1F517"` }}>
              <a href={link.href}>{link.title}</a>
              <small>
                <a class='secondary' href={link.htmx || ''}>
                  htmx example
                </a>
              </small>
            </li>
          ))}
        </ul>
      </aside>
    </main>
  </Base>
)
