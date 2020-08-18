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
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { arrowBack } from "ionicons/icons";
import React from "react";
import Layout from "../../../components/Layout";
import { essentialTests } from "../../PackageComparison/tests";

export function EssentialPackagePage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerLink="/order" routerDirection="back">
              <IonIcon slot="icon-only" icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonTitle>Essential</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Layout.Grid>
          <Layout.Block>
            <IonCard color="primary">
              <IonCardHeader>
                <IonCardSubtitle>$299</IonCardSubtitle>
                <IonCardTitle>Essential</IonCardTitle>
                {/*
                  <IonCardSubtitle>Basic Preconception Testing</IonCardSubtitle>
                */}
                <IonCardSubtitle>
                  Recommended Preconception Testing
                </IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  This package is for women who want the
                  <strong> essential preconception tests</strong>— that means
                  the tests that are recommended for every woman before
                  pregnancy.
                </p>
              </IonCardContent>
              {/*
              
                <IonCardContent>
                  <p className="ion-padding-bottom">
                    This package is for women who want just the essential
                    preconception tests — that means the tests that are
                    recommended for EVERY woman before pregnancy.
                  </p>
                  <p>
                    <strong>
                      Backed by national guidelines, these tests are a great place
                      to start a preconception conversation.
                    </strong>
                  </p>
                </IonCardContent>
              */}

              <IonToolbar color="primary">
                <IonRow className="ion-justify-content-between ion-align-items-center ion-padding-bottom ion-padding-start">
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
                    <strong>Essential</strong>
                  </IonButton>
                </IonRow>
              </IonToolbar>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="secondary">
              <IonCardHeader>
                <IonCardSubtitle>Which package is for you?</IonCardSubtitle>
                <IonCardTitle>Health History</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <strong>
                  Healthy women are more likely to have successful pregnancies
                  and healthy children.
                </strong>
                <p className="ion-padding-top">
                  Studies show strong links between pre-conception health and
                  maternal and child health outcomes. If you have any of the
                  conditions below, we'd like you to order our
                  <strong> Plus +</strong> package - giving you the most
                  comprehensive medical test coverage we offer.
                </p>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle color="primary">
                  Do you have a history of pregnancy complications?
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
              <IonToolbar color="tertiary">
                <IonButtons slot="end">
                  <IonButton routerLink="/order/plus">Learn more</IonButton>
                </IonButtons>
              </IonToolbar>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>What's included?</IonCardSubtitle>
                <IonCardTitle>
                  <strong>9 total tests</strong>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="ion-no-padding ion-padding-vertical">
                <IonList>
                  {essentialTests.map(test => (
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
                {/*
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
                    {essentialTests.map(test => (
                      <IonItem color="primary">
                        <IonLabel>{test.name}</IonLabel>
                      </IonItem>
                    ))}
                  </IonCol>
                </IonCard>
                <IonRow className="ion-align-items-center ion-justify-content-center ion-padding-bottom">
                  <IonItem>
                    <IonIcon slot="start" icon={addCircle} />
                    <IonLabel>Optional</IonLabel>
                  </IonItem>
                </IonRow>
                <IonCard
                  color="secondary"
                  className="ion-no-margin ion-margin-bottom ion-margin-horizontal"
                >
                  <IonCardHeader>
                    <IonCardSubtitle>Expanded tests</IonCardSubtitle>
                    <IonCardTitle>
                      <strong>
                        Additional tests included with the purchase of Plus +
                      </strong>
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCol>
                    {plusTests.map(test => (
                      <IonItem color="secondary">
                        <IonLabel>{test.name}</IonLabel>
                      </IonItem>
                    ))}
                  </IonCol>
                </IonCard>
                    */}
                <IonToolbar color="white">
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
                    <IonButton color="primary" shape="round">
                      Essential
                    </IonButton>
                    <IonButton
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
