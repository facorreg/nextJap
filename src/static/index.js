import isArray from 'lodash/isArray';
import capitalize from 'lodash/capitalize';
import {
  word as wordStaticProps,
  kanji as kanjiStaticProps,
} from './singleStaticProps';
import {
  word as wordStaticPaths,
  kanji as kanjiStaticPaths,
} from './singleStaticPaths';
// staticPropsArray: [ft() => Promise]

const paths = [{
  path: ['/word/[word]'],
  staticPropsArray: [wordStaticProps],
  staticPathsArray: [wordStaticPaths],
  options: { revalidate: 1 },
}, {
  path: ['/kanji/[kanji]'],
  staticPropsArray: [kanjiStaticProps],
  staticPathsArray: [kanjiStaticPaths],
  options: { revalidate: 1 },
}];

const extractError = (data) => (
  data instanceof Error
    ? data.reason || data.message
    : ''
);

/*
  Errors are caught but their errors are extrated so they can then be
  handled by the components
*/

const resolveProps = (data, options = {}) => Promise.resolve({
  props: data instanceof Error
    ? { error: extractError(data) }
    : data,
  ...options,
});

const resolvePaths = (data) => {
  const err = extractError(data);
  return Promise.resolve(err ? { paths: [], fallback: true } : { ...data, fallback: true });
};

const buildStatic = async (staticPropsArray, options, args) => {
  try {
    const staticPropsPromises = await Promise.all(staticPropsArray.map((ft) => ft(args)));
    const staticProps = staticPropsPromises
      .reduce((allProps, currentProps) => ({ ...allProps, ...currentProps }), {});

    return Promise.resolve(staticProps, options);
  } catch (error) {
    return Promise.resolve(error, options);
  }
};

const getStaticUniversal = ({ type, args }) => async (ctx) => {
  const { pathname } = ctx;
  const getStaticArray = ({ path }) => (
    isArray(path) ? path.includes(pathname) : path === pathname
  );

  const staticArrayProp = `static${capitalize(type)}Array`;
  const { [staticArrayProp]: staticArray, options } = paths.find(getStaticArray) || {};

  if (!staticArray || !staticArray.length) return Promise.resolve({});

  const resolve = type === 'props' ? resolveProps : resolvePaths;
  const staticData = await buildStatic(staticArray, options, { ...args, ctx });
  return resolve(staticData);
};

const getInitialProps = (args) => getStaticUniversal({ type: 'props', args });
const getStaticPages = (args) => getStaticUniversal({ type: 'page', args });

export { getInitialProps, getStaticPages };
