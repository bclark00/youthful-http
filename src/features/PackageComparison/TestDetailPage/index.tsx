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
  IonLabel,
  IonPage,
  IonSegmentButton,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { arrowBack, checkmarkCircle } from "ionicons/icons";
import React, { useState } from "react";
import Layout from "../../../components/Layout";
import { tests } from "../tests";

export const TestDetailsPage = (props: any) => {
  let test = tests.find(result => result.name == props.match.params.id);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerLink="/order" routerDirection="back">
              <IonIcon icon={arrowBack} slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Layout.Column>
          <DetailsCard {...test} />
        </Layout.Column>
      </IonContent>
    </IonPage>
  );
};

function DetailsCard(test: any) {
  let [color, setColor] = useState();

  return (
    <IonCard>
      <IonToolbar color="primary">
        <IonTitle>{test?.group}</IonTitle>
      </IonToolbar>
      <IonCardHeader>
        <IonCardTitle>{test?.name}</IonCardTitle>
        <IonCardSubtitle>{test?.description}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonText color="dark" className="ion-padding-vertical">
          {test?.details?.map((detail: string, index: number) => (
            <p key={index} className="ion-padding-bottom">
              {detail}
            </p>
          ))}
        </IonText>
      </IonCardContent>
      {/*
        <IonFooter>
          <IonToolbar color="white">
            <IonButtons slot="primary">
              <IonButton
                routerLink="/order/essential"
                color={test.essential ? "primary" : ""}
                style={{ fontWeight: test.essential ? 700 : 400 }}
              >
                Essential
              </IonButton>
              <IonButton
                routerLink="/order/plus"
                color={test.plus ? "secondary" : ""}
              >
                <strong>Plus +</strong>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonFooter>
      */}
    </IonCard>
  );
}

function SegnmentTest() {
  let [color, setColor] = useState();

  return (
    <IonSegmentButton color="warning" value="NORMAL">
      <IonIcon icon={checkmarkCircle} />
      <IonLabel>Normal</IonLabel>
    </IonSegmentButton>
  );
}
