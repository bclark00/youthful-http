import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";

const Details2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab4" />
          </IonButtons>
          <IonTitle>Detail2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Details2</p>
      </IonContent>
    </IonPage>
  );
};

export default Details2;
