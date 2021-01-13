import React, { useContext } from 'react';
import { useMutation } from '@apollo/client';
// import PropTypes from 'prop-types';
import { useGeneratedInputRefs } from 'ownHooks';
import { promesify } from 'utils';
import { CREATE_DECK } from 'mutations';
import { ModalContext } from 'context';
import Common from '../common.form';

const refsSchema = [{
  name: 'name',
  validator: (str) => promesify(str.length > 4, 'Your deckName must be at lest 4 characters long'),
}, {
  name: 'type',
  validator: (str) => str,
}];


const CreateDeck = ({ refetchDecks }) => {
  const { closeModal } = useContext(ModalContext);
  const [mutation] = useMutation(CREATE_DECK);

  const createDeck = async (args) => {
    try {
      await mutation(args);
      console.log(await refetchDecks());
      closeModal();
    } catch (err) {
      return promesify(false, 'Could not create deck');
    }

  }

  const {
    refs, handleSubmit, errorMessage,
  } = useGeneratedInputRefs(refsSchema, createDeck, { noWhite: true });

  return (
    <Common imgSrc="/traditional_cards.jpg">
      <form>
        <h2>Create Deck</h2>
        <div className="inputContainer">
          <input name="name" placeholder="Deck Name" type="text" ref={refs.name.ref} />
          <div className="select">
            <select name="type" ref={refs.type.ref}>
              <option value="">Chose card type</option>
              <option value="kanji">Kanji</option>
              <option value="word">Word</option>
              <option value="mixte">Mixte</option>

            </select>
          </div>
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

CreateDeck.propTypes = {
}

export default CreateDeck;