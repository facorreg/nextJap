import { gql } from '@apollo/client';
import { kanjiFragment } from 'fragments';

const GET_KANJI = gql`
  query getKanji($kanji: String!) {
    getKanji(word: $kanji) {
      ...kanjiFragment
    }
  }
  ${kanjiFragment}
`;

export default GET_KANJI;
