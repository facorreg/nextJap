
import { gql } from '@apollo/client';
import { initializeApollo } from 'apollo';

const query = gql`
  query getWord($word: String!){
    getWord(word:$word) {
      japanese {
        word
        reading
      }
      tags
      definitions
      partsOfSpeech
    }
  }
`;

const fetchWordPageContent = async ({ context }) => {
  try {
    console.log(context)
    const { word } = context?.params || {};
    console.log(context.params)
    const client = initializeApollo();

    const data = await client.query({
      query,
      variables: { word },
    });

    return Promise.resolve({
      word: data?.data?.getWord,
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

export default fetchWordPageContent;
