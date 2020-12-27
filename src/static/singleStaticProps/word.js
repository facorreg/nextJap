import uniq from 'lodash/uniq';
import uniqBy from 'lodash/uniqBy';
import flattenDeep from 'lodash/flattenDeep';

import { GET_WORD, GET_KANJI_LIST } from 'queries';
import { initializeApollo } from 'apollo';

const fetchWordPageContent = async (args) => {
  try {
    const { word } = args?.ctx?.query || {};
    const client = initializeApollo();

    const data = await client.query({
      query: GET_WORD,
      variables: { word },
    });

    const words = data?.data?.getWord
    const rawKanjiIds = words.map(({ kanjiIds }) => kanjiIds)
    const kanjiIds = rawKanjiIds ? uniq(flattenDeep(rawKanjiIds)) : [];

    let kanjiList = [];

    if (kanjiIds.length) {
      const extractedWords = flattenDeep(
        words
          .map((({ japanese }) => japanese
            .map(({ word: jw }) => jw)
            .filter(e => e)))
      );

      const findCharacterIndex = (character) => (
        extractedWords.findIndex((w) => (
          // console.log(w, character, w.includes(character))
          w?.includes(character)
        ))

      )

      kanjiList = uniqBy(
        await client.query({
          query: GET_KANJI_LIST,
          variables: { ids: kanjiIds }
        })
          .then(({ data }) => data?.getKanjiList),
        ({ character }) => character
      );

      kanjiList = kanjiList.sort(({ character }, { character: character2 }) => (
        findCharacterIndex(character) - findCharacterIndex(character2)
      ));
    }

    return Promise.resolve({
      word: data?.data?.getWord,
      kanjiList,
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

export default fetchWordPageContent;
