

import Elysia from 'elysia'
import Base from '@/layouts/base'

export default new Elysia().get('/', async () => {
  const scannedFiles = await Array.fromAsync(
    new Bun.Glob('*.html').scan({ cwd: './public' })
  )
  const links = scannedFiles.map(async (file: string) => {
    const fileContent = await Bun.file('./public/' + file).text()
    const title = fileContent.match(/<title>(.+)<\/title>/)![1]

    const htmxlink = await fetch('https://htmx.org/examples/')
      .then((r) => r.text())
      .then((text) => {
        const anchors = text.match(
          new RegExp('<a href="https://htmx.org/examples/(.+)/">(.+)</a>', 'g')
        )
        const hrefs = anchors?.map(
          (s) => s.match(/<a href="(.+)">.+<\/a>/)![1]
        )!
        const dashedTitle = title.toLowerCase().split(' ').join('-')
        const htmxlink = hrefs.find((i) => i.includes(dashedTitle))
        return htmxlink || 'javascript:void()'
      })
    return { title, href: file, htmx: htmxlink }
  })

  return (
    <Base>
      <main class='container'>
        <aside>
          <ul>
            {links.map(async (link) => (
              <li style={{ display: 'list-item', listStyleType: `"\\1F517"` }}>
                <a href={(await link).href}>{(await link).title}</a>
                <small>
                  <a class='secondary' href={(await link).htmx || ''}>
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
