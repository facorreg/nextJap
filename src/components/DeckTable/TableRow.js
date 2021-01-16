import React, { useContext } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import first from 'lodash/first';
import { DELETE_DECK, CREATE_CARDS } from 'mutations';
import { GET_CARDS_BY_IDS } from 'queries';
import { useMutation, useQuery } from '@apollo/client';
import { ModalContext } from 'context';
import { cachedCardReview } from '../../apollo/cache';

import Loader from '../Loader';

const Icon = (props) => (
  <div className="icon">
    <Image {...props} layout="fixed" height="20" width="20" />
  </div>
);

const TableRow = ({ deck, refetchDecks }) => {
  const { cardIds = [] } = deck;
  const { data, loading, error } = useQuery(GET_CARDS_BY_IDS, { variables: { ids: cardIds } });
  const [deleteDeck] = useMutation(DELETE_DECK);
  const [importCards] = useMutation(CREATE_CARDS);
  const { openModal, closeModal } = useContext(ModalContext);
  const router = useRouter();

  const newCards = data?.getCardsByIds?.length;

  const delDeck = (deck) => () => openModal('dialog', {
    questionMsg: `Are you sure you want to delete ${deck.name}`,
    validateMsg: 'Agree',
    disagreeMsg: 'Cancel',
    dialogMsg: 'Delete decks',
    onValid: async () => {
      try {
        const deleteData = await deleteDeck({ variables: { id: deck.id } });
        if (!deleteData?.data?.deleteDeck?.deleted) throw new Error('An Error occured');
        closeModal();
        refetchDecks();
      } catch (err) {
      }
    }
  });

  const upload = (deckId) => (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = async () => {
      try {
        const { result } = fileReader;
        const values = result.split('\n').filter(e => e);

        await importCards({
          variables: {
            input: {
              deckId,
              values,
            }
          }
        });
      } catch (err) {
      }
    };
    fileReader.readAsText(file);
  };

  const handleReroute = (e) => {
    e.preventDefault();
    const cards = data?.getCardsByIds || [];
    if (!cards.length) return;

    const card = first(cards);

    cachedCardReview({ deckId: deck?.id, cards: data?.getCardsByIds });
    // console.log('toto', cachedCardReview());
    router.push(`http://localhost:3000/${card.type || deck.type}/${card.value}`)
  }

  return (
    <tr>
      <td>{deck.name}</td>
      <td>{deck.type}</td>
      <td>0</td>
      <td>{newCards}</td>
      <td className="actions">
        {!loading ? (
          <>
            <Icon src="/book.png" title="review cards" onClick={handleReroute} />
            <form>
              <label htmlFor="import">
                <Icon src="/import.png" title="import file" />
              </label>
              <input type="file" id="import" name="import" onChange={upload(deck.id)} />
            </form>
            <Icon src="/trash.png" title="delete deck" onClick={delDeck(deck)} />
          </>
        ) : <Loader />
        }
      </td>
    </tr>
  );
};

export default TableRow;