import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
export function ConsentCallSchedulerCard() {
  return (
    <IonCard color="tertiary">
      <IonCardHeader>
        <IonCardSubtitle>Consent call</IonCardSubtitle>
        <IonCardTitle style={{ fontWeight: 700 }}>
          Your state requires a consent call
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>
          You'll need you to schedule a consent call with us in order to get
          tested.
        </p>
      </IonCardContent>
      <IonToolbar color="tertiary">
        <IonButtons slot="end">
          <IonButton
            href="https://calendly.com/preconception/consent-approval"
            className="ion-padding-end"
          >
            Schedule
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonCard>
  );
}
