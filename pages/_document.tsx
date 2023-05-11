import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends React.Component {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add any meta tags, stylesheets, or scripts that should be included */}
          <meta charSet="UTF-8" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Arvo&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
