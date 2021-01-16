import React from 'react';
import Homepage from 'cpages/homePage';
import { getInitialProps } from '../src/static';

export default function Home() {
  return <Homepage />;
}

Home.getInitialProps = getInitialProps();