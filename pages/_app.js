import React from 'react';
import { SharedStyle, Header } from 'components/shared';
import { WithModal } from 'HoC';
import KanjiPage from 'cpages/kanji';

function MyApp({ Component, pageProps }) {
  const WithModalProvider = WithModal({ kanji: KanjiPage })
  return (
    <>
      <SharedStyle />
      <WithModalProvider>
        <Header />
        <Component {...pageProps.props} />
      </WithModalProvider>
    </>
  )
}

export default MyApp;
