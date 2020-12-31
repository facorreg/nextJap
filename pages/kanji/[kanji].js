import React from 'react';
import { getStaticPages, getInitialProps } from 'static';
import Kanji from 'cpages/kanji';

const KanjiPages = (props) => <Kanji {...props} />

KanjiPages.getInitialProps = getInitialProps();
KanjiPages.getStaticPages = getStaticPages();


export default KanjiPages;
