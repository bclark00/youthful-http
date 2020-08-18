import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonModal,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import Layout from "../../../components/Layout";
import Store from "../../../store";
import { RequestForm } from "../FeatureRequestForm";

export function PasswordResetRequestModal() {
  const { modal, auth } = Store.useContainer();
  return (
    <IonModal
      isOpen={modal.passwordResetRequestOpen}
      onDidDismiss={() => modal.setPasswordResetRequestOpen(false)}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reset your password</IonTitle>
          <IonButtons slot="primary">
            <IonButton onClick={() => modal.setPasswordResetRequestOpen(false)}>
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Layout.Column>
          <Layout.Block>
            <RequestForm />
          </Layout.Block>
          <Layout.Block>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Check your inbox</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>You should be getting an email from us soon</p>
                <p className="ion-padding-top">
                  If not, please contact us and we'll see what's going on
                </p>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="tertiary">
              <IonCardHeader>
                <IonCardSubtitle>Live</IonCardSubtitle>
                <IonCardTitle>Always</IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="ion-margin-bottom">
                <IonItem color="tertiary">
                  <IonCheckbox color="primary" checked slot="start" />
                  <IonLabel>Healthy</IonLabel>
                </IonItem>
                <IonItem color="tertiary">
                  <IonCheckbox color="primary" checked slot="start" />
                  <IonLabel>Informed</IonLabel>
                </IonItem>
                <IonItem color="tertiary">
                  <IonCheckbox color="primary" checked slot="start" />
                  <IonLabel>Empowered</IonLabel>
                </IonItem>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
        </Layout.Column>
      </IonContent>
    </IonModal>
  );
}
