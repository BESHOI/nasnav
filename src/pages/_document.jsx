import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover"
      />
      <meta charSet="utf-8" />
      <Head>
        <link
          rel="preload"
          href="/fonts/montserrat-latin-variable-wghtOnly-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
