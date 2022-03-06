import Document, { Html, Head, NextScript, Main } from "next/document";

export default class myDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="logo_sm.svg" type="image/svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <NextScript />
          <Main />
        </body>
      </Html>
    )
  }
}