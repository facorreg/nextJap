import { gql } from '@apollo/client';

const DELETE_DECK = gql`
  mutation deleteDeck($id:String!) {
    deleteDeck(id:$id) {
      deleted
    }
  }
`;

export default DELETE_DECK;
