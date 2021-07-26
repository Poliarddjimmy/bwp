/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */
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

          <script src="/js/vendor/modernizr-3.6.0.min.js"></script>

          <script src="/js/vendor/jquery-3.3.1.min.js"></script>

          <script src="/js/vendor/popper.min.js"></script>

          <script src="/js/vendor/bootstrap.min.js"></script>

          <script src="/js/plugins/slick.min.js"></script>

          <script src="/js/plugins/nice-select.min.js"></script>

          <script src="/js/plugins/plyr.min.js"></script>

          <script src="/js/plugins/perfect-scrollbar.min.js"></script>

          <script src="/js/plugins/lightgallery-all.min.js"></script>

          <script src="/js/plugins/imagesloaded.pkgd.min.js"></script>

          <script src="/js/plugins/isotope.pkgd.min.js"></script>

          <script src="/js/main.js"></script>
        </body>
      </Html >
    )
  }
}

export default MyDocument