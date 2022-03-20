import React from "react";
import ReactDom from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import Game from "./components/Game";
import { client } from "./services/ApiServices";
import configureStore from "./store/configureStore";
import "./index.css";

const store = configureStore();

ReactDom.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Game />
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
