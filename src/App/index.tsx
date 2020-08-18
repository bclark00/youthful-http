import { IonApp, IonLoading, IonToast, setupConfig } from "@ionic/react";
import { useAppState } from "@ionic/react-hooks/app";
import { IonReactRouter } from "@ionic/react-router";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";
import "@ionic/react/css/display.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/float-elements.css";
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/typography.css";
import React, { useEffect } from "react";
import Authentication from "../features/Authentication";
import "../shame.css";
import Store from "../store";
/* Theme variables */
import "../theme/variables.css";
import ProtectedRoutes from "./ProtectedRoutes";

setupConfig({
  mode: "ios"
});

// export const ProtectedRoutes = Loadable({
//   loader: () => import("./ProtectedRoutes"),
//   loading: () => <IonLoading isOpen />
// });

// export const PublicRoutes = Loadable({
//   loader: () => import("./PublicRoutes"),
//   loading: Spinner
// });

// export const LoadingScreens = Loadable({
//   loader: () => import("./LoadingScreens"),
//   loading: () => <IonLoading isOpen />
// });

const App = () => {
  const {
    auth,
    initialize,
    attributes,
    updating,
    update,
    loading,
    device
  } = Store.useContainer();
  const { state } = useAppState();

  useEffect(() => {
    if (state === true) {
      initialize();
    }
    return;
  }, [initialize]);
  //optionall add state, it will reload on visiblility change

  useEffect(() => {
    if (updating === true) {
      update(attributes);
    } else return;
  }, [attributes]);

  return !auth.checkComplete ? (
    <IonLoading isOpen />
  ) : (
    <IonReactRouter>
      <IonApp>
        <Authentication.Modal />
        <IonLoading isOpen={loading.pending} />
        <IonToast
          isOpen={loading.updateMessage ? true : false}
          onDidDismiss={() => loading.setUpdateMessage("")}
          message={loading.updateMessage}
          buttons={
            loading.updateMessage === "Update failed"
              ? [
                  {
                    side: "start",
                    text: "Retry",
                    handler: () => {
                      update(attributes);
                    }
                  }
                ]
              : loading.updateMessage === "Update succeeded"
              ? [{}]
              : [
                  {
                    side: "start",
                    text: "Retry",
                    handler: () => {
                      window.location.reload(true);
                    }
                  }
                ]
          }
          color={
            loading.updateMessage === "Update succeeded"
              ? "tertiary"
              : "warning"
          }
          duration={loading.updateMessage === "Update succeeded" ? 2000 : 5000}
        />

        {auth.loggedIn ? <ProtectedRoutes /> : <ProtectedRoutes />}
      </IonApp>
    </IonReactRouter>
  );
};

export default App;
