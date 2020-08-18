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
  IonImg,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { clipboard, eyeOff, lock } from "ionicons/icons";
import React from "react";
import Layout from "../../../components/Layout";

export function PrivacyPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>Privacy</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Layout.Grid>
          <Layout.Block>
            <IonCard color="primary">
              <IonCardHeader>
                <IonCardSubtitle>Your Privacy</IonCardSubtitle>
                <IonCardTitle>Built-in Security</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  Privacy is a basic human right, and we believe that it should
                  be protected. From developing our process to choosing our
                  partners, all of our decisions were made to ensure that your
                  information stays yours. After all, you trust us enough to
                  handle your data and we don’t want to break that trust. Think
                  of this page as our pinky promise to continue reviewing and
                  improving our security practices.
                </p>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard>
              <IonCardContent>
                <IonItem className="ion-no-padding">
                  <IonIcon icon={lock} slot="start" />
                  <IonLabel className="ion-text-wrap">
                    All of your personal health information and test results are
                    securely stored in a HIPAA-compliant database. Once your
                    information is added, access is only granted to essential
                    personnel.
                  </IonLabel>
                </IonItem>
                <IonItem className="ion-no-padding">
                  <IonIcon icon={clipboard} slot="start" />
                  <IonLabel className="ion-text-wrap">
                    Each lab will be drawn and processed through Quest
                    Diagnostics. As the world’s leading provider of diagnostic
                    information services, their policies ensure your data stays
                    protected.
                  </IonLabel>
                </IonItem>
                <IonItem className="ion-no-padding">
                  <IonIcon icon={eyeOff} slot="start" />
                  <IonLabel className="ion-text-wrap">
                    We will never sell, lease, or rent your personal health
                    information. We believe that your information is yours and
                    yours only, and we want to keep it that way. We don't share
                    your data with anyone.
                  </IonLabel>
                </IonItem>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="tertiary">
              <IonImg />
              <IonCardHeader>
                <IonCardTitle>HIPAA Compliance</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  Personal data privacy is our number one priority, so we’ve
                  partnered with TrueVault to deliver a completely
                  HIPAA-compliant solution, implementing industry best practices
                  like audit logging, layered defenses, and per-record
                  encryption.
                </p>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="secondary">
              <IonImg />
              <IonCardHeader>
                <IonCardTitle>Security Resources</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  Want more information about our privacy practices and how we
                  keep your data secure? Take a look at our privacy policy or
                  send us an email here with your questions.
                </p>
              </IonCardContent>
              <IonToolbar color="secondary">
                <IonButtons slot="end">
                  <IonButton>Privacy Policy</IonButton>
                </IonButtons>
              </IonToolbar>
            </IonCard>
          </Layout.Block>
        </Layout.Grid>
      </IonContent>
    </IonPage>
  );
}
