import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonInput,
  IonItem,
  IonLabel,
  IonRow
} from "@ionic/react";
import React from "react";

export function PrimaryCard() {
  return (
    <IonCard color="white">
      <IonCardHeader>
        <IonCardSubtitle>Get Started</IonCardSubtitle>
        <IonCardTitle style={{ color: "#003366" }} color="black">
          Welcome to PreConception
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent style={{ paddingTop: 0 }}>
        <SignUpForm />
      </IonCardContent>
    </IonCard>
  );
}

function SignUpForm() {
  return (
    <>
      <IonItem>
        <IonLabel position="floating">Email</IonLabel>
        <IonInput type="email" required />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Password</IonLabel>
        <IonInput type="password" required />
      </IonItem>
      <IonCol className="ion-align-items-center ion-justify-content-between">
        <IonRow className=" ion-justify-content-between">
          <IonButton type="submit" shape="round">
            Sign up
          </IonButton>
        </IonRow>
      </IonCol>
    </>
  );
}
