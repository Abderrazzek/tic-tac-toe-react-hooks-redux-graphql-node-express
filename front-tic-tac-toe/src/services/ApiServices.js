import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export const calculateWinner = gql`
  query ($board: [String!]!, $round: Int!) {
    calculateWinner(board: $board, round: $round)
  }
`;
