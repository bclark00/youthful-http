import {
  IonButton,
  IonButtons,
  IonHeader,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import Store from "../../../store";

interface IProps {
  pageTitle: string;
}

export function WithoutMenu(props: IProps) {
  const { auth, loading } = Store.useContainer();
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>{props.pageTitle}</IonTitle>
        <IonButtons slot="end">
          <IonButton
            onClick={() => {
              loading.setLoggingIn(true);
              setTimeout(() => {
                auth.logIn();
              }, 500);
              setTimeout(() => {
                loading.setLoggingIn(false);
              }, 1000);
            }}
            shape="round"
            style={{ marginRight: 12 }}
          >
            Log In
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
}
