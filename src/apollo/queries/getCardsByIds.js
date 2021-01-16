
import { gql } from '@apollo/client';

const GET_CARDS_BY_IDS = gql`
  query getCardsByIds($ids:[String]!) {
    getCardsByIds(ids: $ids) {
      value
      new
      value
    }
  }
`;

export default GET_CARDS_BY_IDS;
