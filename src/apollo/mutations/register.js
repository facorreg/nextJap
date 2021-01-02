import { gql } from '@apollo/client';

const REGISTER = gql`
  mutation createUser($input:CreateUserInput!){
    createUser(input:$input){
        jwt
        user {
          id
          username
          password
          email
        }
        error
      }
   }
`;

export default REGISTER;
