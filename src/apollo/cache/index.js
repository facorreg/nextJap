import {
  InMemoryCache, makeVar
} from '@apollo/client';

export const cachedCardReview = makeVar({
  deckId: null,
  cards: [],
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        cachedCard: {
          read() {
            return cachedCardReview();
          }
        },
      },
    },
  }
});

export default cache;
