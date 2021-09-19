/* eslint-disable @next/next/google-font-display */

import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900" rel="stylesheet" />
          <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html >
    )
  }
}

export default MyDocument