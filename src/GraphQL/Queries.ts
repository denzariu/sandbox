import { QueryResult, gql, useQuery } from "@apollo/client";

export const GET_ALL_ACCOUNTS =  gql`
  query {
    getAllAccounts {
      id,
      username,
      password,
      email
    }
  }
`

export const ACCOUNT_EXISTS = gql`
  query 
    accountExists(
      $email: String!, 
      $password: String!
    ) {
      accountExists(email: $email, password: $password)
    }
`

export const MAIL_EXISTS = gql`
  query 
    mailExists(
      $email: String!, 
    ) {
      mailExists(email: $email)
    }
`

export const CAN_LOGIN = gql`
  query
    canLogIn(
      $email: String!,
      $password: String!,
      $google_auth: String!
    ) {
      canLogIn(
        email: $email,
        password: $password,
        google_auth: $google_auth
      )
    }
`

export const ENCODE_TOKEN = gql`
  query 
    encodeToken(
      $token: String!
    ) {
      encodeToken(
        session_token: $token
      )
    }
`

export const DECODE_TOKEN = gql`
  query 
    decodeToken(
      $token: String!
    ) {
      decodeToken(
        session_token: $token
      )
    }
`