import { gql } from '@apollo/client';

const GET_USER_DECKS = gql`
  query getUserDecks {
    getUserDecks {
      name
      userId
      cardIds
      type
      id
    }
  }
`;

export default GET_USER_DECKS;
