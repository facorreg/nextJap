import React, { useContext } from 'react';
import Image from 'next/image';
import { DELETE_DECK } from 'mutations';
import { useMutation } from '@apollo/client';
import { ModalContext } from 'context';
import StyledDecksTable from './deckTable.style';

const Icon = (props) => (
  <div className="icon">
    <Image {...props} layout="fixed" height="20" width="20" />
  </div>
)

const DecksTable = ({ decks = [], refetchDecks }) => {
  const [deleteDeck] = useMutation(DELETE_DECK);
  const { openModal, closeModal } = useContext(ModalContext);

  if (!decks.length) return null;

  const delDeck = (deck) => () => openModal('dialog', {
    questionMsg: `Are you sure you want to delete ${deck.name}`,
    validateMsg: 'Agree',
    disagreeMsg: 'Cancel',
    dialogMsg: 'Delete decks',
    onValid: async () => {
      try {
        const data = await deleteDeck({ variables: { id: deck.id } });
        if (!data?.data?.deleteDeck?.deleted) throw new Error('An Error occured');
        closeModal();
        refetchDecks();
      } catch (err) {
      }
    }
  });

  return (
    <StyledDecksTable>
      <tr className="tabTitle">
        <th>Name</th>
        <th>Type</th>
        <th>Due</th>
        <th>Action</th>
      </tr>
      {
        decks.map((deck) => (
          <tr>
            <td>{deck.name}</td>
            <td>{deck.type}</td>
            <td>0</td>
            <td className="actions">
              <Icon src="/import.png" title="import file" onClick={() => console.log('toto')} />
              <Icon src="/trash.png" title="delete deck" onClick={delDeck(deck)} />
            </td>
          </tr>
        ))
      }
    </StyledDecksTable>
  );
};

export default DecksTable;

