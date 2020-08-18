import { defineCustomElements } from "@ionic/pwa-elements/loader";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./store";

// const LoadableTest = Loadable({
//   loader: () => import("./App/LoadableApp"),
//   loading: Spinner
// });

ReactDOM.render(
  <Store.Provider>
    <App />
  </Store.Provider>,
  document.getElementById("root")
);

defineCustomElements(window);
