import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonFooter,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import Layout from "../../../components/Layout";
import { faqList } from "../faqs";

export function FAQPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>FAQ</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Layout.Column style={{ maxWidth: 600 }}>
          <IonCard color="tertiary">
            <IonCardHeader>
              <IonCardTitle>You probably have questions</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p className="ion-padding-bottom" style={{ fontWeight: 700 }}>
                We've got answers.
              </p>
            </IonCardContent>
          </IonCard>
          <IonList>
            {faqList.map((faq, index) => (
              <IonItem key={index} routerLink={`/faq/${index}`}>
                <IonLabel className="ion-text-wrap">{faq.question}</IonLabel>
              </IonItem>
            ))}
            <IonFooter>
              <p className="ion-padding">
                If you don't see an answer to your question, send us an email!
                <br />
                Remember not to send any personal or medical information in your
                message.
              </p>
            </IonFooter>
          </IonList>
        </Layout.Column>
      </IonContent>
    </IonPage>
  );
}
