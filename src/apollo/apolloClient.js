import {
  ApolloClient, HttpLink, InMemoryCache, concat, ApolloLink,
} from '@apollo/client';
import { concatPagination } from '@apollo/client/utilities';
import { getCookie, isServerSide } from 'utils';

let apolloClient;

const createApolloClient = () => {
  const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql', // Server URL (must be absolute)
    // credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  });

  const authMiddleWare = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    const { jwt } = getCookie('user', {});

    if (jwt) {
      operation.setContext({
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
    }

    return forward(operation);
  });

  return new ApolloClient({
    ssrMode: isServerSide(),
    link: concat(authMiddleWare, httpLink),
    cache: new InMemoryCache({}),
  });
};

const initializeApollo = (initialState) => {
  const client = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = client.extract();
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    client.cache.restore({ ...existingCache, ...initialState });
  }
  // For SSG and SSR always create a new Apollo Client
  if (isServerSide()) return client;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = client;

  return client;
};

export default initializeApollo;
