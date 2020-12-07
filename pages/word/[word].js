import React from 'react';
import getStaticUniversal from 'static';

const Jisho = (props) => {
  console.log(props)
  return <div>toto2</div>
}

export const getStaticProps = (context) => getStaticUniversal({ pathname: '/word/[word]', type: 'props', args: { context } })();
export const getStaticPaths = getStaticUniversal({ pathname: '/word/[word]', type: 'paths' });


export default Jisho;
