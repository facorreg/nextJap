import { gql } from '@apollo/client';

const GET_WORDS = gql`
  query getWords($from: Int, $limit: Int){
    getWords(from: $from, limit: $limit) {
      countDb
      kanjiIds
      wordList {
        total
        words {
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
    }
  }
`;

export default GET_WORDS;
