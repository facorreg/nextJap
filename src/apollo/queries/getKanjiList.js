import { gql } from '@apollo/client';
import { kanjiFragment } from 'fragments';

const GET_KANJI_LIST = gql`
  query getKanjiList($ids: [String]!) {
    getKanjiList(ids: $ids) {
      ...kanjiFragment
    }
  }
  ${kanjiFragment}
`;

export default GET_KANJI_LIST;
