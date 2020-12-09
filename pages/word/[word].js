import React from 'react';
import getStaticUniversal from 'static';
import Word from 'cpages/word';

const WordPages = (props) => <Word {...props} />

export const getStaticProps = (context) => getStaticUniversal({ pathname: '/word/[word]', type: 'props', args: { context } })();
export const getStaticPaths = getStaticUniversal({ pathname: '/word/[word]', type: 'paths' });


export default WordPages;
