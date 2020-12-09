import { GET_WORD } from 'queries';
import { initializeApollo } from 'apollo';

const fetchWordPageContent = async ({ context }) => {
  try {
    const { word } = context?.params || {};
    const client = initializeApollo();

    const data = await client.query({
      query: GET_WORD,
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
