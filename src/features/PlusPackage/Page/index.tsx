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
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { addCircle, arrowBack } from "ionicons/icons";
import React from "react";
import Layout from "../../../components/Layout";

export function PlusPackagePage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerLink="/order" routerDirection="back">
              <IonIcon slot="icon-only" icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonTitle>Plus +</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Layout.Grid>
          <Layout.Block>
            <IonCard color="secondary">
              <IonCardHeader>
                <IonCardSubtitle>$399</IonCardSubtitle>
                <IonCardTitle>Plus +</IonCardTitle>
                <IonCardSubtitle>
                  Expanded Preconception Testing
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <p className="ion-padding-bottom">
                  This package is for women who want more! This includes ALL of
                  the essential preconception tests backed by national
                  guidelines, plus several additional tests supported by some of
                  the newer research.
                </p>
                <p>
                  <strong>
                    This package provides a more comprehensive overview of your
                    health.
                  </strong>
                </p>
              </IonCardContent>
              <IonToolbar color="secondary">
                <IonRow className="ion-justify-content-start ion-align-items-center ion-padding-bottom ion-padding-start">
                  <div>
                    <IonLabel style={{ fontWeight: 700 }}>Add to cart</IonLabel>
                    <IonSelect
                      value={true}
                      className="ion-no-padding ion-padding-end"
                    >
                      <IonSelectOption value={true}>Complete</IonSelectOption>
                      <IonSelectOption value={false}>Non-HIV</IonSelectOption>
                    </IonSelect>
                  </div>

                  <IonButton color="light" className="ion-padding-end">
                    <strong>Plus +</strong>
                  </IonButton>
                </IonRow>
              </IonToolbar>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="primary">
              <IonCardHeader>
                <IonCardSubtitle>Which package is for you?</IonCardSubtitle>
                <IonCardTitle>Health History</IonCardTitle>
              </IonCardHeader>
              <IonCardContent></IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle color="primary">
                  Do you have a history of any complications?
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonRow>
                  <IonCol>
                    <IonItem color="white">
                      <IonCheckbox slot="start" />
                      <IonLabel>Preclampsia</IonLabel>
                    </IonItem>
                    <IonItem color="white">
                      <IonCheckbox slot="start" />
                      <IonLabel>Infertility</IonLabel>
                    </IonItem>
                    <IonItem color="white">
                      <IonCheckbox slot="start" />
                      <IonLabel>Preterm Labor</IonLabel>
                    </IonItem>
                  </IonCol>
                  <IonCol>
                    <IonItem color="white">
                      <IonCheckbox slot="start" />
                      <IonLabel>Miscarriage</IonLabel>
                    </IonItem>
                    <IonItem color="white">
                      <IonCheckbox slot="start" />
                      <IonLabel>Gestational Diabetes</IonLabel>
                    </IonItem>
                    <IonItem color="white">
                      <IonCheckbox slot="start" />
                      <IonLabel>Anemia</IonLabel>
                    </IonItem>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle color="primary">
                  Do you have a history of personal health problems?
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonRow>
                  <IonCol>
                    <IonItem color="white">
                      <IonCheckbox slot="start" />
                      <IonLabel>Anemia</IonLabel>
                    </IonItem>
                    <IonItem color="white">
                      <IonCheckbox slot="start" />
                      <IonLabel>High Cholesterol</IonLabel>
                    </IonItem>
                  </IonCol>
                  <IonCol>
                    <IonItem color="white">
                      <IonCheckbox slot="start" />
                      <IonLabel>Low Vitamin D</IonLabel>
                    </IonItem>
                    <IonItem color="white">
                      <IonCheckbox slot="start" />
                      <IonLabel>History of STIs</IonLabel>
                    </IonItem>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle color="primary">
                  Do you have a family history of health problems?
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonRow>
                  <IonCol>
                    <IonItem color="white">
                      <IonCheckbox slot="start" />
                      <IonLabel>Obesity</IonLabel>
                    </IonItem>
                    <IonItem color="white">
                      <IonCheckbox slot="start" />
                      <IonLabel>High Cholesterol</IonLabel>
                    </IonItem>
                  </IonCol>
                  <IonCol>
                    <IonItem color="white">
                      <IonCheckbox slot="start" />
                      <IonLabel>Diabetes</IonLabel>
                    </IonItem>
                    <IonItem color="white">
                      <IonCheckbox slot="start" />
                      <IonLabel>Thyroid Problems</IonLabel>
                    </IonItem>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="tertiary">
              <IonCardHeader>
                <IonCardSubtitle>Health Check</IonCardSubtitle>
                <IonCardTitle>Check any boxes?</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  We recommend women with any of the health conditions or family
                  histories we listed order our <strong>Plus +</strong> package.
                </p>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>What's included?</IonCardSubtitle>
                <IonCardTitle>
                  <strong>16 total tests</strong>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="ion-no-padding ion-padding-vertical">
                <IonCard
                  color="primary"
                  className="ion-no-margin ion-margin-bottom ion-margin-horizontal"
                >
                  <IonCardHeader>
                    <IonCardSubtitle>Basic tests</IonCardSubtitle>
                    <IonCardTitle>
                      <strong>Essential</strong>
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCol>
                    <IonItem color="primary">
                      <IonLabel>Preclampsia</IonLabel>
                    </IonItem>
                    <IonItem color="primary">
                      <IonLabel>Infertility</IonLabel>
                    </IonItem>
                    <IonItem color="primary">
                      <IonLabel>Preterm Labor</IonLabel>
                    </IonItem>
                    <IonItem color="primary">
                      <IonLabel>Miscarriage</IonLabel>
                    </IonItem>
                    <IonItem color="primary">
                      <IonLabel>Gestational Diabetes</IonLabel>
                    </IonItem>
                    <IonItem color="primary">
                      <IonLabel>Anemia</IonLabel>
                    </IonItem>
                    <IonItem color="primary">
                      <IonLabel>Miscarriage</IonLabel>
                    </IonItem>
                    <IonItem color="primary">
                      <IonLabel>Gestational Diabetes</IonLabel>
                    </IonItem>
                    <IonItem color="primary">
                      <IonLabel>Anemia</IonLabel>
                    </IonItem>
                  </IonCol>
                </IonCard>
                <IonRow className="ion-align-items-center ion-justify-content-center ion-padding">
                  <IonIcon color="tertiary" size="large" icon={addCircle} />
                </IonRow>
                <IonCard
                  color="secondary"
                  className="ion-no-margin ion-margin-bottom ion-margin-horizontal"
                >
                  <IonCardHeader>
                    <IonCardSubtitle>Expanded tests</IonCardSubtitle>
                    <IonCardTitle>
                      <strong>Included with Plus +</strong>
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCol>
                    <IonItem color="secondary">
                      <IonLabel>Miscarriage</IonLabel>
                    </IonItem>
                    <IonItem color="secondary">
                      <IonLabel>Gestational Diabetes</IonLabel>
                    </IonItem>
                    <IonItem color="secondary">
                      <IonLabel>Anemia</IonLabel>
                    </IonItem>
                    <IonItem color="secondary">
                      <IonLabel>Miscarriage</IonLabel>
                    </IonItem>
                    <IonItem color="secondary">
                      <IonLabel>Gestational Diabetes</IonLabel>
                    </IonItem>
                    <IonItem color="secondary">
                      <IonLabel>Anemia</IonLabel>
                    </IonItem>
                    <IonItem color="secondary">
                      <IonLabel>Miscarriage</IonLabel>
                    </IonItem>
                  </IonCol>
                </IonCard>
                <IonToolbar className="ion-no-padding" color="white">
                  <IonRow className="ion-justify-content-around ion-align-items-center ion-padding-bottom">
                    <div>
                      <IonLabel style={{ fontWeight: 700, color: "black" }}>
                        Add to cart
                      </IonLabel>
                      <IonSelect
                        value={true}
                        className="ion-no-padding ion-padding-end"
                      >
                        <IonSelectOption value={true}>Complete</IonSelectOption>
                        <IonSelectOption value={false}>Non-HIV</IonSelectOption>
                      </IonSelect>
                    </div>
                    <IonButton
                      color="light"
                      shape="round"
                      className="ion-no-margin"
                    >
                      Essential
                    </IonButton>
                    <IonButton
                      className="ion-no-margin"
                      // onClick={() => plusRedirect("test")}
                      shape="round"
                      color="secondary"
                    >
                      <strong> Plus +</strong>
                    </IonButton>
                  </IonRow>
                  <IonRow>
                    <IonCard color="warning">
                      <IonCardHeader>
                        <IonCardTitle>
                          I am opting out of HIV Testing
                        </IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        I understand that HIV testing is an important part of
                        preconception testing. I understand that by declining
                        HIV testing I will not know if I am infected with HIV
                        which can result in an increased risk to myself and
                        others should I have HIV and become pregnant.
                      </IonCardContent>
                    </IonCard>
                  </IonRow>
                </IonToolbar>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
        </Layout.Grid>
      </IonContent>
    </IonPage>
  );
}
