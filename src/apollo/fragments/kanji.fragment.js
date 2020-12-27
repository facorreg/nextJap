import { gql } from '@apollo/client';

const kanjiFragment = gql`
  fragment kanjiFragment on Kanji {
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
  }
`;

export default kanjiFragment;
