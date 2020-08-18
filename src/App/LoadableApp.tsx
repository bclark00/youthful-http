import React from "react";
import Loadable from "react-loadable";
import App from ".";
import Spinner from "../features/LoadingScreens/Spinner";
import Store from "../store";

// Sean was testing Code Splitting with React-Loadable but didn't have luck

// const LoadableApp = Loadable.Map({
//   loader: {
//     Store: () => import("../store"),
//     App: () => import("./index")
//   },
//   render(loaded) {
//     let App = loaded.App.default;
//     let Store = loaded.Store.default;
//     return (
//       <Store.Provider>
//         <App />
//       </Store.Provider>
//     );
//   },
//   loading: Spinner
// });

const LoadableApp = Loadable({
  loader: () => import("./index"),
  loading: Spinner
});

function LoadableStore() {
  return (
    <Store.Provider>
      <App />
    </Store.Provider>
  );
}

export default LoadableStore;
