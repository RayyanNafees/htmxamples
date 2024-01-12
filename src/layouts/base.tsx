import { Html } from '@elysiajs/html'
export default (props: Html.PropsWithChildren) => (
  <html lang='en'>
    <head>
      <meta charset='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>Document</title>
      <link
        rel='stylesheet'
        href='https://unpkg.com/@picocss/pico@1.5.11/css/pico.min.css'
      />
    </head>
    <body>{props.children}</body>
  </html>
)
