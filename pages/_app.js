import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { SharedStyle, Header } from 'components/shared';
import AuthProvider from 'components/AuthProvider';
import Dialog from 'components/Dialog';
import Modal from 'components/Modal';
import Login from 'components/Form/authForms/login.form';
import { useApollo } from 'ownHooks';
import KanjiPage from 'cpages/kanji';
import Register from 'components/Form/authForms/register.form';
import Forgot from 'components/Form/authForms/forgot.form';
import CreateDeck from 'components/Form/cardsForms/createDeck.form';
import CreateCard from 'components/Form/cardsForms/createCard.form';

function MyApp({ Component, pageProps }) {
  const modalComponents = {
    kanji: KanjiPage,
    login: Login,
    register: Register,
    forgot: Forgot,
    createDeck: CreateDeck,
    createCard: CreateCard,
    dialog: Dialog,
  }

  const { initialApolloState, cookieHandlers } = pageProps?.props || {};
  const client = useApollo(initialApolloState, cookieHandlers);

  return (
    <ApolloProvider client={client}>
      <AuthProvider client={client}>
        <Modal modalComponents={modalComponents} >
          <SharedStyle />
          <Header />
          <div id="content">
            <Component {...pageProps?.props} />
          </div>
        </Modal>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default MyApp;
