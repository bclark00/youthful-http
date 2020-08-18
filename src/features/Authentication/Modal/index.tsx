import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonCol,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonModal,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import PublicTrueVaultAPI from "../../../api/Public/PublicTrueVaultAPI";
import Layout from "../../../components/Layout";
import Store from "../../../store";
import LogInForm from "./LogInForm";

export function Modal() {
  const { modal, auth, loading } = Store.useContainer();
  return (
    <IonModal
      isOpen={modal.authenticationOpen}
      onDidDismiss={() => modal.setAuthenticationOpen(false)}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>{auth.loggedIn ? "Log out" : "Log In"}</IonTitle>
          <IonButtons slot="primary">
            <IonButton onClick={() => modal.setAuthenticationOpen(false)}>
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Layout.Column>
          {auth.loggedIn ? (
            <LoggedInComponents />
          ) : (
            <>
              <Layout.Block>
                <LogInForm />
              </Layout.Block>
              <Layout.Block>
                <IonCard color="primary">
                  <IonCardHeader>
                    <IonCardSubtitle>Welcome Back</IonCardSubtitle>
                    <IonCardTitle>We're glad you're here</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent className="ion-margin-bottom">
                    <IonItem color="primary">
                      <IonCheckbox color="secondary" checked slot="start" />
                      <IonLabel>Get informed</IonLabel>
                    </IonItem>
                    <IonItem color="primary">
                      <IonCheckbox color="secondary" slot="start" />
                      <IonLabel>Get tested</IonLabel>
                    </IonItem>
                    <IonItem color="primary">
                      <IonCheckbox color="secondary" slot="start" />
                      <IonLabel>Plan ahead</IonLabel>
                    </IonItem>
                  </IonCardContent>
                </IonCard>
              </Layout.Block>
            </>
          )}
        </Layout.Column>
      </IonContent>
    </IonModal>
  );
}

function LoggedInComponents() {
  const { modal, loading, auth } = Store.useContainer();

  return (
    <>
      <IonCard color="white">
        <IonCardHeader>
          <IonCardTitle>We'll see you later</IonCardTitle>
        </IonCardHeader>
        <IonToolbar color="white">
          <IonCol className="ion-align-items-center ion-justify-content-between">
            <IonRow className=" ion-justify-content-end ion-margin-start ion-margin-end">
              <IonButton
                routerLink="/"
                routerDirection="none"
                onClick={async () => {
                  loading.setPending(true);
                  let { status } = await PublicTrueVaultAPI.logOut();
                  switch (status) {
                    case "succeeded":
                      auth.logOut();
                      modal.setAuthenticationOpen(false);
                      loading.setPending(false);
                      window.localStorage.removeItem("access_token");
                      return;
                    case "failed":
                      window.localStorage.removeItem("access_token");
                      modal.setAuthenticationOpen(false);
                      window.location.reload(true);
                      loading.setPending(false);
                  }
                }}
                shape="round"
              >
                Log out
              </IonButton>
            </IonRow>
          </IonCol>
        </IonToolbar>
      </IonCard>
      <IonCard color="tertiary">
        <IonCardHeader>
          <IonCardSubtitle>Until next time</IonCardSubtitle>
          <IonCardTitle>Live</IonCardTitle>
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
      <IonCard color="secondary">
        <IonCardHeader>
          <IonCardSubtitle>
            Know someone who should plan their pregnancy?
          </IonCardSubtitle>
          <IonCardTitle>Tell them about PreConception</IonCardTitle>
        </IonCardHeader>
        <IonToolbar color="secondary">
          <IonButtons color="white">
            <IonLabel className="ion-padding-bottom ion-padding-start">
              <strong>
                We want what all mothers want: healthy, happy, and successful
                kids.
              </strong>
            </IonLabel>
          </IonButtons>
        </IonToolbar>
      </IonCard>
    </>
  );
}
