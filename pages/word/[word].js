import React from 'react';
import { getStaticPages, getInitialProps } from 'static';
import Word from 'cpages/word';

const WordPages = (props) => <Word {...props} />

WordPages.getInitialProps = getInitialProps();
WordPages.getStaticPages = getStaticPages();


export default WordPages;
