import {
  IonButton,
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import Store from "../../../store";

interface IProps {
  pageTitle: string;
}

export function WithMenu(props: IProps) {
  const { auth, modal } = Store.useContainer();
  return (
    <IonHeader>
      <IonToolbar>
        <IonMenuButton slot="start" />
        <IonTitle>{props.pageTitle}</IonTitle>
        <IonButtons slot="end">
          {auth.loggedIn ? (
            <IonButton
              onClick={() => {
                modal.setAuthenticationOpen(true);
              }}
              shape="round"
              style={{ marginRight: 12 }}
            >
              Log Out
            </IonButton>
          ) : (
            <IonButton
              onClick={() => {
                modal.setAuthenticationOpen(true);
              }}
              shape="round"
              style={{ marginRight: 12 }}
            >
              Log In
            </IonButton>
          )}
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
}
