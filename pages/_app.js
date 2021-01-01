import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { SharedStyle, Header } from 'components/shared';
import AuthProvider from 'components/AuthProvider';
import { useApollo } from 'ownHooks';
import { WithModal } from 'HoC';
import KanjiPage from 'cpages/kanji';

function MyApp({ Component, pageProps }) {
  const WithModalProvider = WithModal({ kanji: KanjiPage })
  const { initialApolloState, cookieHandlers, ...props } = pageProps?.props || {};
  const client = useApollo(initialApolloState, cookieHandlers);

  return (
    <ApolloProvider client={client}>
      <AuthProvider client={client}>
        <SharedStyle />
        <WithModalProvider>
          <Header />
          <Component {...pageProps.props} />
        </WithModalProvider>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default MyApp;
