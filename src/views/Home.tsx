import { IonContent, IonPage, IonRow } from "@ionic/react";
import React from "react";
import PageHeader from "../components/PageHeader";

export default function() {
  return (
    <IonPage>
      <PageHeader.WithMenu pageTitle="Home" />
      <IonContent id="main">
        <IonRow className="ion-justify-content-center"></IonRow>
      </IonContent>
    </IonPage>
  );
}
