import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { book, checkmarkCircle, journal, medkit, trophy } from "ionicons/icons";
import React from "react";
import Layout from "../../../components/Layout";

export function SciencePage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonMenuButton slot="start" />
          <IonTitle>The Science</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Layout.Grid>
          <Layout.Block>
            <IonCard color="primary">
              <IonCardHeader>
                <IonCardTitle>We don't take shortcuts</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  We’ve never been one to take the easy route - shortcuts mean
                  missed steps and missed chances for proactive changes. All of
                  the tests included in our Essential package are backed by
                  national guidelines and research. Our unwavering commitment to
                  excellence helps provide you with the results you need to make
                  critical decisions.
                </p>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard>
              <IonItem>
                <IonIcon slot="start" icon={book} />
                <IonLabel>What does the research say?</IonLabel>
              </IonItem>
              <IonCardContent>
                All of the tests in our package are backed by national
                guidelines and/or research that has shown an association between
                preconception testing and pregnancy health. The CDC, AAFP, and
                ACOG recommend that any woman planning to become pregnant within
                12 months have testing before conception. By identifying
                abnormalities that may cause complications for you or your
                future pregnancy, you can take a proactive approach to improving
                your health.
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard>
              <IonItem>
                <IonIcon slot="start" icon={journal} />
                <IonLabel>Evidence-based and up-to-date</IonLabel>
              </IonItem>
              <IonCardContent>
                It’s estimated that it takes 17 years for research to reach
                clinical practice. That means the average provider won’t start
                using today’s research for almost two more decades! Crazy,
                right? That’s why we continue to stay up to date by performing
                monthly reviews of new research. We monitor today’s science so
                you stay in the loop.
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="tertiary">
              <IonRow>
                <IonItem color="tertiary">
                  <IonIcon slot="start" icon={medkit} />
                  <IonLabel>World's leading lab</IonLabel>
                </IonItem>
                <IonCardContent>
                  We’ve partnered with Quest, the world’s leading lab, to
                  provide you with quality tests and accurate results. We avoid
                  “no name” labs so you can feel confident making decisions
                  based on your results.
                </IonCardContent>
              </IonRow>
              <IonRow>
                <IonItem color="tertiary">
                  <IonIcon slot="start" icon={checkmarkCircle} />
                  <IonLabel>CLIA-certified</IonLabel>
                </IonItem>
                <IonCardContent>
                  All of the labs we work with are licensed and certified under
                  CLIA which means you can be sure that the results you’re
                  getting are based on the very highest standards.
                </IonCardContent>
              </IonRow>
              <IonRow>
                <IonItem color="tertiary">
                  <IonIcon slot="start" icon={trophy} />
                  <IonLabel>Top level accuracy</IonLabel>
                </IonItem>
                <IonCardContent>
                  Each test is backed by a robust quality control process to
                  help ensure that results will be accurate the first time.
                </IonCardContent>
              </IonRow>
            </IonCard>
          </Layout.Block>
        </Layout.Grid>
      </IonContent>
    </IonPage>
  );
}
