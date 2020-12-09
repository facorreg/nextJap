import { GET_WORDS } from 'queries';
import flattenDeep from 'lodash/flattenDeep';
import uniq from 'lodash/uniq';
import { initializeApollo } from 'apollo';

const dynamicPaths = async () => {
  try {
    const client = initializeApollo();

    const getWords = async (from) => {
      const limit = 10;

      const wordListData = await client.query({
        query: GET_WORDS,
        variables: {
          from,
          limit
        }
      });

      const { wordList = {}, countDb } = wordListData?.data?.getWords || {};
      const { total, words } = wordList;

      if (!total) return words;

      const recursedData = await getWords(from + limit);
      const extractedWords = flattenDeep(
        words
          .map(({ japanese }) => (
            japanese.map(({ word, reading }) => word || reading)
          ))
      );
      return [...extractedWords, ...recursedData];
    };

    const words = await getWords(0);
    const paths = uniq(words).map((word) => ({ params: { word } }));

    return Promise.resolve({ paths });
  } catch (err) {
    return Promise.reject(err);
  }
};

export default dynamicPaths;
