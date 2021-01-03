import React, { useContext, useEffect } from 'react';
import { GET_USER_DECKS } from 'queries';
import { useQuery } from '@apollo/client';
import StyledHomePage from './homepage.style';
import { AuthContext } from 'context';
import ActionButton from 'components/ActionButton';
import DecksTable from 'components/DeckTable';


/*
@todo think of a better way to update the data after the deck creation
*/

const Homepage = () => {
  const { data, loading: decksLoading, error: decksError, refetch } = useQuery(GET_USER_DECKS);
  const { isAuthenticated, loading: authLoading, error: authError } = useContext(AuthContext);
  const [loading, error] = [decksLoading || authLoading, decksError || authError];

  useEffect(() => {
    refetch();
  }, [isAuthenticated])

  return (
    <StyledHomePage>
      <div className="dashboard" >
        <div className="dashboardMenu">
          <ActionButton en="Create Deck" jp="デッキを作成する" toOpen="createDeck" modalTopOpenProps={{ refetchDecks: refetch }} />
          <ActionButton en="Add Card" jp="カードを追加" toOpen="createDeck" />
        </div>
        {
          !loading && !error && <DecksTable decks={data?.getUserDecks} refetchDecks={refetch} />
        }
      </div>

    </StyledHomePage>
  );
}

export default Homepage;
