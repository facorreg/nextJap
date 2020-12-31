import { initializeApollo } from 'apollo';
import { GET_KANJI_LIST } from 'queries';

const dynamicPaths = async () => {
  try {
    const client = initializeApollo();

    const kanjiListData = await client.query({ query: GET_KANJI_LIST });

    const { kanjiList } = kanjiListData?.data;

    const paths = kanjiList.map(({ character: kanji }) => ({ params: { kanji } }));

    return Promise.resolve({ paths });
  } catch (err) {
    return Promise.reject(err);
  }
};

export default dynamicPaths;