import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonSegmentButton,
  IonText,
  IonToolbar
} from "@ionic/react";
import { arrowBack, checkmarkCircle } from "ionicons/icons";
import React, { useState } from "react";
import Layout from "../../../components/Layout";
import { faqList } from "../faqs";

export const FAQAnswerPage = (props: any) => {
  let faq = faqList[parseInt(props.match.params.id)];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerLink="/faq" routerDirection="back">
              <IonIcon icon={arrowBack} slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Layout.Column>
          <DetailsCard {...faq} />
        </Layout.Column>
      </IonContent>
    </IonPage>
  );
};

function DetailsCard(faq: any) {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{faq?.question}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonText color="dark" className="ion-padding-vertical">
          {faq?.answer?.map((detail: string, index: number) => (
            <p key={index} className="ion-padding-bottom">
              {detail}
            </p>
          ))}
        </IonText>
      </IonCardContent>
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
