import React from 'react';
import { SharedStyle, Header } from 'components/shared';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <SharedStyle />
      <Header />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;
