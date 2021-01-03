import React, { useContext } from 'react';
import { DELETE_DECK } from 'mutations';
import { useMutation } from '@apollo/client';
import { ModalContext } from 'context';
import StyledDecksTable from './deckTable.style';

const Icon = (props) => (
  <div>
    <img {...props} />
  </div>
)

const DecksTable = ({ decks = [], refetchDecks }) => {
  const [deleteDeck] = useMutation(DELETE_DECK);
  const { openModal, closeModal } = useContext(ModalContext);

  if (!decks.length) return null;
  const headers = [['Name'], ['Type'], ['Due'], ['Actions']];

  const columns = decks.reduce((acc, deck) => {
    const { name, type, cardIds } = deck;
    const [names, types, toReview, actions] = [0, 1, 2, 3];

    acc[names].push(name);
    acc[types].push(type);
    acc[toReview].push(cardIds.length);
    acc[actions].push('delete');

    return acc;
  }, headers);

  const schema = [{}, {}, {}, {
    component: Icon,
    cProps: {
      src: '/trash.png',
    },
    onClick: ({ deck }) => () => openModal('dialog', {
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
    }),
  }];

  return (
    <StyledDecksTable>
      {
        columns.map((column, indexCol) => (
          <div className="col"> {
            column.map((elem, indexRow) => {
              const { component: Component, onClick, cProps = {} } = schema[indexCol];
              const deck = decks[indexRow - 1];
              const isValidCell = indexRow > 0 && deck;
              const onClickHandler = onClick && isValidCell
                ? onClick({ deck })
                : null;

              return (
                Component && isValidCell
                  ? <Component {...cProps} elem={elem} onClick={onClickHandler} />
                  : <div onClick={onClickHandler}>{elem}</div>
              );
            })}
          </div>
        ))
      }
    </StyledDecksTable>
  );
};

export default DecksTable;

