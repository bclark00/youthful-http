import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonFooter,
  IonHeader,
  IonIcon,
  IonLabel,
  IonModal,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { cart } from "ionicons/icons";
import React from "react";
import Layout from "../../../components/Layout";
import Store from "../../../store";
import { DirectOrdering } from "../Store";

export function DirectPurchasingModal() {
  const { modal } = Store.useContainer();
  const {
    testPackage,
    hivIncluded,
    setHIVIncluded
  } = DirectOrdering.useContainer();
  return (
    <>
      <IonFab vertical="bottom" horizontal="end">
        <IonFabButton
          onClick={() => modal.setDirectOrderModalOpen(true)}
          color="warning"
        >
          <IonIcon icon={cart} />
        </IonFabButton>
        <IonModal
          isOpen={modal.directOrderModalOpen}
          onDidDismiss={() => modal.setDirectOrderModalOpen(false)}
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Cart</IonTitle>
              <IonButtons slot="primary">
                <IonButton onClick={() => modal.setDirectOrderModalOpen(false)}>
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <Layout.Column>
              {testPackage === "essential" ? (
                <IonCard color="primary">
                  <IonCardHeader>
                    <IonCardTitle>Essential</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonRow className="ion-justify-content-between ion-align-items-center">
                      <div>
                        <IonLabel style={{ fontWeight: 700, color: "black" }}>
                          Options:
                        </IonLabel>
                        <IonSelect
                          value={hivIncluded}
                          className="ion-no-padding ion-padding-end"
                          onIonChange={(e: any) =>
                            setHIVIncluded(e.target.value)
                          }
                        >
                          <IonSelectOption value={true}>
                            Complete
                          </IonSelectOption>
                          <IonSelectOption value={false}>
                            Non-HIV
                          </IonSelectOption>
                        </IonSelect>
                      </div>
                      <IonButton color="primary" shape="round">
                        Checkout
                      </IonButton>
                      {/*
                <IonButton
                  onClick={() => plusRedirect("test")}
                  shape="round"
                  color="secondary"
                >
                  <strong> Plus +</strong>
                </IonButton>
              */}
                    </IonRow>
                  </IonCardContent>
                </IonCard>
              ) : (
                <IonCard>
                  <IonCardHeader>
                    <IonCardTitle>Nothing here yet</IonCardTitle>
                  </IonCardHeader>

                  <IonToolbar color="white">
                    <IonButtons slot="end">
                      <IonButton
                        onClick={() => {
                          modal.setDirectOrderModalOpen(false);
                          document
                            .querySelector("ion-content")
                            ?.scrollToPoint(0, 170, 500);
                        }}
                      >
                        Sign up
                      </IonButton>
                      <IonButton
                        routerLink="/order"
                        onClick={() => modal.setDirectOrderModalOpen(false)}
                      >
                        Order now
                      </IonButton>
                    </IonButtons>
                  </IonToolbar>
                </IonCard>
              )}
              {!hivIncluded && (
                <IonRow>
                  <IonCard color="warning">
                    <IonCardHeader>
                      <IonCardTitle>
                        I am opting out of HIV Testing
                      </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      I understand that HIV testing is an important part of
                      preconception testing. I understand that by declining HIV
                      testing I will not know if I am infected with HIV which
                      can result in an increased risk to myself and others
                      should I have HIV and become pregnant.
                    </IonCardContent>
                  </IonCard>
                </IonRow>
              )}
            </Layout.Column>
          </IonContent>
          {testPackage && (
            <IonFooter>
              <IonToolbar color="white">
                <IonRow className="ion-justify-content-between ion-padding-horizontal">
                  <div>
                    <IonLabel style={{ fontWeight: 700, color: "black" }}>
                      Options:
                    </IonLabel>
                    <IonSelect
                      value={hivIncluded}
                      className="ion-no-padding ion-padding-end"
                      onIonChange={(e: any) => setHIVIncluded(e.target.value)}
                    >
                      <IonSelectOption value={true}>Complete</IonSelectOption>
                      <IonSelectOption value={false}>Non-HIV</IonSelectOption>
                    </IonSelect>
                  </div>
                  <IonButton color="primary" shape="round">
                    Checkout
                  </IonButton>
                </IonRow>
              </IonToolbar>
            </IonFooter>
          )}
        </IonModal>
      </IonFab>
    </>
  );
}
