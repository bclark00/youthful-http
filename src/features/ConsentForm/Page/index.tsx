import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import React from "react";
import Loadable from "react-loadable";
import Layout from "../../../components/Layout";

const ConsentsCard = Loadable({
  loader: () => import("../Signer/Card"),
  loading: () => <IonLoading isOpen />
});

export function ConsentFormPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerLink="/profile" routerDirection="back">
              <IonIcon icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonTitle>Consent Forms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Layout.Column>
          <Layout.Block>
            <ConsentsCard />
          </Layout.Block>
        </Layout.Column>
      </IonContent>
    </IonPage>
  );
}
