import { gql } from '@apollo/client';

const me = gql`
  query me {
    me {
      id
      username
      email
    }
  }
`;

export default me;
