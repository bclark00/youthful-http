import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { cart, clipboard, flask } from "ionicons/icons";
import React from "react";
import Layout from "../../../components/Layout";

export function ProcessPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>Our Process</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Layout.Grid>
          <Layout.Block>
            <IonCard color="tertiary">
              <IonCardHeader>
                <IonCardSubtitle>We aren't your doctors office</IonCardSubtitle>
                <IonCardTitle>We're simpler</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  We believe that you can either do many things well or do one
                  thing great, and we chose great. Up until now, the only way to
                  get preconception tests done was to schedule an appointment
                  with your doctor, only to wait weeks for results that need a
                  decoder to understand. We pride ourselves on making the
                  process faster and easier — giving you more time to do the
                  things you actually want to do.
                </p>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard>
              <IonItem>
                <IonIcon slot="start" icon={cart} />
                <IonLabel>Order your test package online</IonLabel>
              </IonItem>
              <IonCardContent>
                We know you’re busy, so we’ve made sure to keep the ordering
                process simple and quick. In less than 5 minutes you can be on
                your way to getting the results you’ve been looking for — you
                can order your genetic testing here too!
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard>
              <IonItem>
                <IonIcon slot="start" icon={flask} />
                <IonLabel>Get your labs done</IonLabel>
              </IonItem>
              <IonCardContent>
                To make your labs quick and easy we’ve partnered with Quest
                Diagnostics. With the most extensive network in the U.S., you
                can be assured there will be a lab right in your backyard. Use
                our scheduler to set up an appointment for your labs, or feel
                free to drop in whenever your schedule allows. With our
                innovative system you can have your labs drawn the same day.
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard>
              <IonItem>
                <IonIcon slot="start" icon={clipboard} />
                <IonLabel>View your personalized results</IonLabel>
              </IonItem>
              <IonCardContent>
                Lab results can be intimidating and confusing to read. We
                believe these reports should be easy to understand, so we make
                sure to personalize each one. Your report will come with all the
                information you need to educate yourself on your results.
              </IonCardContent>
            </IonCard>
          </Layout.Block>
        </Layout.Grid>
      </IonContent>
    </IonPage>
  );
}
