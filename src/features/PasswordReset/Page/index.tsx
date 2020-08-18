import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import React from "react";
import Layout from "../../../components/Layout";
import { UpdateForm } from "../UpdateForm";

export function PasswordResetPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerLink="/" routerDirection="back">
              <IonIcon icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Layout.Column>
          <Layout.Block>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Update your password</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <UpdateForm />
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>What next?</IonCardSubtitle>
                <IonCardTitle>Try signing in</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                If it doesn't work the first time for some reason, try again.
                And if it doesn't work again, let us know.
              </IonCardContent>
            </IonCard>
          </Layout.Block>
        </Layout.Column>
      </IonContent>
    </IonPage>
  );
}
