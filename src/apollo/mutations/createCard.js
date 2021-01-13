import { gql } from '@apollo/client';

const CREATE_CARD = gql`
  mutation createCard($input:CreateCardInput) {
    createCard(input:$input){
      id
      type
      value
      new
    }
  }
`;

export default CREATE_CARD;

