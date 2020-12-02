import isArray from 'lodash/isArray';
import capitalize from 'lodash/capitalize';
// import { } from './singleStaticProps';
// import { } from './singleStaticPaths';

/*
exemple of path
 {
   path: ['/product/[id]'],
   staticPropsArray: [getProductByIDData],
   staticPathsArray: [pathsPID],
   options: { revalidate: 1 }
 }
*/

const paths = [];


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
  return Promise.resolve(err ? {} : { ...data, fallback: true });
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

const getStaticUniversal = ({ pathname, args = {}, type = 'props' }) => async () => {
  const getStaticArray = ({ path }) => (
    isArray(path) ? path.includes(pathname) : path === pathname
  );

  const staticArrayProp = `static${capitalize(type)}Array`;
  const { [staticArrayProp]: staticArray, options } = paths.find(getStaticArray) || {};

  if (!staticArray || !staticArray.length) return Promise.resolve({});

  const resolve = type === 'props' ? resolveProps : resolvePaths;
  const staticData = await buildStatic(staticArray, options, args);
  return resolve(staticData);
};

export default getStaticUniversal;
