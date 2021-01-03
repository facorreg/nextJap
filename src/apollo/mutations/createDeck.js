import { gql } from '@apollo/client';

const CREATE_DECK = gql`
  mutation createDeck($input: CreateDeckInput!) {
    createDeck(input:$input){
      name
      type
      userId
      cardIds
    }
  }
`;

export default CREATE_DECK;
