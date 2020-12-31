import { gql } from '@apollo/client';

const GET_EXAMPLES = gql`
  query getExamples($ids: [String]!){
    getExamples(ids: $ids) {
      type
      word
      furigana
      meaning
      audio {
        audio
        format
      }
    }
  }
`;

export default GET_EXAMPLES;
