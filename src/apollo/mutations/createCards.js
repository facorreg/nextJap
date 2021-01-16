import { gql } from '@apollo/client';

const CREATE_CARD = gql`
  mutation createCards($input:CreateCardsInput) {
    createCards(input:$input){
      id
      type
      value
      new
    }
  }
`;

export default CREATE_CARD;

