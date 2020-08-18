import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonList,
  IonRow
} from "@ionic/react";
import React, { useMemo } from "react";
import Store from "../../../store";
import { tests } from "../tests";

export default function() {
  const { modal } = Store.useContainer();
  return useMemo(
    () => (
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>What tests are included?</IonCardSubtitle>
          <IonCardTitle>Our Package</IonCardTitle>
        </IonCardHeader>
        <IonCardContent className="ion-no-padding">
          <IonList className="ion-padding-end ion-padding-bottom">
            <IonCardSubtitle className="ion-padding-start" color="primary">
              <strong>Essential</strong>
            </IonCardSubtitle>
            {/*
              <IonCardSubtitle className="ion-padding-start" color="secondary">
                <strong>Plus +</strong>
              </IonCardSubtitle>
            */}
            {tests.map(test => (
              <IonItem key={test.name} routerLink={`/order/${test.name}`}>
                <IonCheckbox
                  color="primary"
                  checked={test.essential}
                  slot="start"
                />
                {/*
                
                
                <IonCheckbox
                  color="secondary"
                  checked={test.plus}
                  slot="start"
                />
                */}
                <IonLabel>{test.name}</IonLabel>
              </IonItem>
            ))}
          </IonList>
          <IonRow className="ion-justify-content-end ion-align-items-center ion-padding-bottom ion-padding-horizontal">
            <IonButton
              color="primary"
              shape="round"
              onClick={() => modal.setauthenticatedOrderModalOpen(true)}
            >
              Add to cart
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
    ),
    [tests]
  );
}
