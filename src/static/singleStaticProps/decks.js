import { GET_USER_DECKS } from 'queries';
import { initializeApollo } from 'apollo';
import { getCookie, isServerSide } from 'utils';

const fetchUserDecks = async () => {
  try {
    const client = initializeApollo();

    const data = await client.query({ query: GET_USER_DECKS });
    const decks = data?.data?.getUserDecks;
    const usr = getCookie('user', {});
    console.log(data, usr);
    return { decks };

  } catch (err) {
    return Promise.reject(err);
  }
}

export default fetchUserDecks;
