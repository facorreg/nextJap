import { gql } from '@apollo/client';

const GET_KANJI = gql`
  query getKanji($kanji: String, $ids: [String]) {
    getKanji(word: $kanji, ids: $ids) {
      character
      examples
      meaning
      onyomi
      kunyomi
      strokes {
        images
        count
      }
      references {
        grade
        kodansha
        jlpt
        classic_nelson
      }
      video {
        poster
        video
      }
      partIds
    }
  }
`;

export default GET_KANJI;
