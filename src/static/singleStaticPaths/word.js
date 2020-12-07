import { gql } from '@apollo/client';
import flattenDeep from 'lodash/flattenDeep';
import uniq from 'lodash/uniq';
import { initializeApollo } from 'apollo';

const query = gql`
  query getWords($from: Int, $limit: Int){
    getWords(from:$from, limit:$limit) {
      countDb
      wordList {
        total
        words {
          japanese {
            word
            reading
          }
        }
      }
    }
  }
`;

const dynamicPaths = async () => {
  try {
    const client = initializeApollo();

    const getWords = async (from) => {
      const limit = 10;

      const wordListData = await client.query({
        query,
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
