import { gql } from '@apollo/client';

const GET_WORD = gql`
  query getWord($word: String!){
    getWord(word:$word) {
      japanese {
        word
        reading
      }
      senses {
        tags
        definitions
        partsOfSpeech
        examples
      }
    }
  }
`;

export default GET_WORD;
