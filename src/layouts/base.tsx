import { Html } from '@elysiajs/html'
export default (props: Html.PropsWithChildren<{ title?: string }>) => (
  <html lang='en'>
    <head>
      <meta charset='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>{props.title || 'HTMX Examples'}</title>
      <script src='https://unpkg.com/htmx.org@1.9.10'></script>
      <link
        rel='stylesheet'
        href='https://unpkg.com/@picocss/pico@1.5.11/css/pico.min.css'
      />
    </head>
    <body>{props.children}</body>
  </html>
)
