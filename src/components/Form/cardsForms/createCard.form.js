import React, { useContext, useState } from 'react';
import { useMutation } from '@apollo/client';
// import PropTypes from 'prop-types';
import { useGeneratedInputRefs } from 'ownHooks';
import { promesify } from 'utils';
import { CREATE_CARD } from 'mutations';
import { ModalContext } from 'context';
import Common from '../common.form';

const refsSchema = [{
  name: 'value',
  validator: (str) => promesify(Boolean(str), 'Invalid value'),
}, {
  name: 'deckId',
  validator: (str) => str,
}, {
  name: 'type',
  validator: () => true,
}];


const CreateCard = ({ decks }) => {
  const { closeModal } = useContext(ModalContext);
  const [mutation] = useMutation(CREATE_CARD);
  const [currentType, setCurrentType] = useState('');

  const createCard = async (args) => {
    try {
      await mutation(args);
      // console.log(await refetchDecks());
      closeModal();
    } catch (err) {
      return promesify(false, 'Could not add card');
    }

  }// useConnectionDataHandler('createCard', 'Unable to create user')

  const {
    refs, handleSubmit, errorMessage,
  } = useGeneratedInputRefs(refsSchema, createCard, { noWhite: true });


  const onChange = (e) => {
    const id = e?.target?.value;
    const { type } = decks.find((deck) => deck.id === id) || {};
    setCurrentType(type);
  }

  return (
    <Common imgSrc="/cards.jpg">
      <form>
        <h2>Add Card</h2>
        <div className="inputContainer">
          <input name="value" placeholder="Card value" type="text" ref={refs.value.ref} />
          <div className="select">
            <select name="deckId" ref={refs.deckId.ref} onChange={onChange}>
              <option value="">Chose Deck</option>
              {
                decks.map(({ id, name }) => (
                  <option value={id}>{name}</option>
                ))
              }
            </select>
          </div>
          {
            currentType === 'mixte' && (
              <div className="select">
                <select name="type" ref={refs.type.ref}>
                  <option value="">Chose Card Type</option>
                  <option value="kanji">Kanji</option>
                  <option value="word">Word</option>
                </select>
              </div>
            )
          }
        </div>

        <div className="formError">
          <div className="errorMessage">{errorMessage}</div>
        </div>
        <div className="links"></div>
        <input className="submit" type="submit" value="Submit" onClick={handleSubmit} disabled={false} />
      </form>
    </Common>
  )
}

CreateCard.propTypes = {
}

export default CreateCard;