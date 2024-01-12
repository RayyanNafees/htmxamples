import Elysia from 'elysia'
import Base from '@/layouts/base'

export default new Elysia().get('/', async () => {
  const scannedFiles = await Array.fromAsync(
    new Bun.Glob('*.html').scan({ cwd: './public' })
  )
  const links = scannedFiles.map(async (file: string) => {
    const fileContent = await Bun.file('./public/' + file).text()
    const title = fileContent.match(/<title>(.+)<\/title>/)![1]
    return { title, href: file }
  })
  console.log(links)

  return (
    <Base>
      <main class='container'>
        <aside>
          <ul>
            {links.map(async (link) => (
              <li style={{ display: 'list-item', listStyleType: `"\\1F517"` }}>
                <a href={(await link).href}>{(await link).title}</a>
                <small>
                  <a class='secondary' href='htmx.org'>
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
})
