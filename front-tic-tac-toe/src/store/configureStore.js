process.env.REACT_APP_ENV === "production"
  ? (module.exports = require("./configureStore.prod"))
  : (module.exports = require("./configureStore.dev"));
