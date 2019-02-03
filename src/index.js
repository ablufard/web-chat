import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { viewsReducer } from "./reducers";
import App from "./App";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(viewsReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
