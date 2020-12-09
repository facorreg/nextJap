import React, { Fragment } from 'react';
import SharedStyle from 'components/shared/shared.style';
// import { Helmet } from 'react-helmet';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,400&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200&display=swap" rel="stylesheet" /> */}
      <SharedStyle />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;
