import { gql } from '@apollo/client';

const typeDefs = gql`
  type CachedDeck {
    deckId: String
    cards: [Card]
  }

  extend type Query {
    cachedDeck: CachedDeck
  }
`;

export default typeDefs;
