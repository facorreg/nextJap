import { GET_KANJI, GET_EXAMPLES } from 'queries';
import { initializeApollo } from 'apollo';

const fetchKanjiPageContent = async (args) => {
  try {
    const { kanji } = args?.ctx?.query || {};
    const client = initializeApollo();

    const data = await client.query({ query: GET_KANJI, variables: { kanji } });
    const kanjiData = data?.data?.getKanji;
    const { examples: ids } = kanjiData;
    const examples = ids.length
      ? await client.query({ query: GET_EXAMPLES, variables: { ids } })
      : [];


    return {
      kanji: { ...kanjiData, examples: examples?.data?.getExamples },
      isPage: true,
    }

  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}

export default fetchKanjiPageContent;
