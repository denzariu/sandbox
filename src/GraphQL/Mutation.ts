import { gql } from '@apollo/client';

export const CREATE_ACCOUNT = gql`
  mutation 
    createAccount(
      $email: String!,
      $password: String!  
      $first_name: String!,
      $last_name: String!,
      $credential: String!
    ) {
      createAccount(
        email: $email,
        password: $password,
        first_name: $first_name,
        last_name: $last_name,
        credential: $credential
      ) { 
        successful,
        message
      }
    
  } 
`