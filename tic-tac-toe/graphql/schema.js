const { gql } = require("apollo-server-express");

module.exports = gql`
  type Query {
    calculateWinner(board: [String!]!, round: Int!): String!
  }
`;
