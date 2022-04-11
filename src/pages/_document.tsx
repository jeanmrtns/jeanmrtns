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
          <script id="mcjs" dangerouslySetInnerHTML={{ __html: `
          !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/9fd3aba42c3b9153c9a48a234/16623333376276411a81def03.js");` }} />
          <script ></script>
        </body>
      </Html>
    )
  }
}