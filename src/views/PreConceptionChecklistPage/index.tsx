import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonPage,
  IonToolbar
} from "@ionic/react";
import React from "react";
import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import PreConceptionChecklist from "../../features/PreConceptionChecklist";

export default function() {
  return (
    <IonPage>
      <PageHeader.WithMenu pageTitle="Checklist" />
      <IonContent>
        <Layout.Grid>
          <Layout.Block>
            <IonCard color="secondary">
              <IonCardHeader>
                <IonCardTitle>Make a plan and take action</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  Whether or not you’ve written them down, you’ve probably
                  thought about your goals for having children. It’s really
                  important to take steps to achieve your goal: getting pregnant
                  and having a healthy baby!
                </p>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <PreConceptionChecklist />
          </Layout.Block>
          <Layout.Block>
            <IonCard color="primary">
              <IonCardContent>
                <p>
                  Take 400 to 800 micrograms (0.4 to 0.8 mg) of folic acid every
                  day if you are planning or capable of pregnancy to lower your
                  risk of some birth defects of the brain and spine, including
                  spina bifida. All women need folic acid every day.
                </p>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="white">
              <IonCardHeader>
                <IonCardTitle>Stop smoking and drinking alcohol</IonCardTitle>
              </IonCardHeader>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="tertiary">
              <IonCardContent>
                <p>
                  If you have a medical condition, be sure it is under control.
                  Some conditions that can affect pregnancy or be affected by it
                  include asthma, diabetes, oral health, obesity, or epilepsy.
                </p>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="primary">
              <IonCardContent>
                <p>
                  Talk to your doctor about any over-the-counter and
                  prescription medicines you are using. These include dietary or
                  herbal supplements.
                </p>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="white">
              <IonCardHeader>
                <IonCardTitle>
                  Be sure your vaccinations are up to date
                </IonCardTitle>
              </IonCardHeader>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="secondary">
              <IonCardContent>
                <p>
                  Avoid contact with toxic substances or materials that could
                  cause infection at work and at home.
                </p>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="white">
              <IonCardHeader>
                <IonCardTitle>Stay away from chemicals</IonCardTitle>
              </IonCardHeader>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="primary">
              <IonCardHeader>
                <IonCardTitle>Preconception tests for everyone</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  The most effective changes are made before you actually get
                  pregnant. Take the pre-pregnancy tests recommended by the
                  <strong> CDC</strong> and
                  <strong> ACOG </strong>
                  and make sure you're starting your pregnancy off right.
                </p>
              </IonCardContent>
              <IonToolbar color="primary">
                <IonButtons slot="end">
                  <IonButton routerLink="/order" className="ion-padding-end">
                    Order now
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonCard>
          </Layout.Block>
        </Layout.Grid>
      </IonContent>
    </IonPage>
  );
}
