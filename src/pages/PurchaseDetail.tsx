import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonPage,
  IonToolbar
} from "@ionic/react";
import React from "react";

const PurchaseDetail: React.FC = (props: any) => {
  return (
    <IonPage id="detail">
      <IonCardHeader>
        <IonCardTitle>Purchase #{props.match.params.id}</IonCardTitle>
      </IonCardHeader>
      <IonContent>
        <IonCard color="card-white">
          <IonCardHeader>
            <IonCardTitle>{props.match.params.id}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>{props.match.params.id}</IonCardContent>
          <IonToolbar color="card-white">
            <IonButtons slot="end">
              <IonButton>Test</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PurchaseDetail;
