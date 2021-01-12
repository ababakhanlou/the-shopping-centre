import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, Store  } from "redux";
import { reducer } from "./reducers/checkout";
import "./index.css";
import App from "./App";
import { State, Action } from "./types";

const store: Store<State, Action> & {
  dispatch: any
} = createStore(
  // @ts-ignore
  reducer,
  (window && (window as any)).__REDUX_DEVTOOLS_EXTENSION__ &&  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION__())
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
