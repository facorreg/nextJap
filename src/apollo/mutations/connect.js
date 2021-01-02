import { gql } from '@apollo/client';

const CONNECT = gql`
  mutation connect($input: ConnectUserInput!) {
    connect(input:$input) {
      user {
        id
        username
        email
      }
      jwt
    }
  }
`

export default CONNECT;
