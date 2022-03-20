const { ApolloServer } = require("apollo-server-express");
const parser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const resolvers = require("./graphql/resolver");
const typeDefs = require("./graphql/schema");

//LOADING THE ENVIRENMONET VARIABLES
dotenv.config();
// CREATING EXPRESS APP
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(parser.urlencoded({ extended: false }));

//CREATING APOLLOSERVER
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const main = async () => {
  //GURANTEE THE START OF APOLLOSERVER BEFORE CONFIGURING IT
  await server.start();
  server.applyMiddleware({
    app,
    path: "/graphql",
  });
};
main();

//STARTING THE EXPRESS SERVER
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is listening at port ${process.env.PORT}`);
});
