import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import Layout from "../../../components/Layout";
import Store from "../../../store";
import CompareCard from "../CompareCard";

export const tests = [
  { name: "ABO", essential: true, plus: true },
  { name: "Rh Type", essential: true, plus: true },
  { name: "Antibody Screen", essential: true, plus: true },
  { name: "Reactive Plasma Reagin", essential: true, plus: true },
  { name: "HIV", essential: true, plus: true },
  { name: "Hepatitis", essential: true, plus: true },
  { name: "Rubella IgG", essential: true, plus: true },
  { name: "Varicella IgG", essential: true, plus: true },
  { name: "Complete Blood Count", essential: true, plus: true },
  { name: "Hepatitis C Antibody", essential: true, plus: true },
  { name: "Chlamydia", essential: false, plus: true },
  { name: "Gonorrhea", essential: false, plus: true },
  { name: "Lipid Panel", essential: false, plus: true },
  { name: "Hemoglobin A1c", essential: false, plus: true },
  { name: "TSH", essential: false, plus: true },
  { name: "Vitamin D", essential: false, plus: true }
];

export function DirectOrderPage() {
  const { auth, modal } = Store.useContainer();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
            {!auth.loggedIn && <IonBackButton defaultHref="/" />}
          </IonButtons>
          <IonTitle>Order</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Layout.Grid>
          <Layout.Block>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Our Test Package</IonCardSubtitle>
                <IonCardTitle style={{ color: "#003366", fontWeight: 700 }}>
                  Preconception care for everyone
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent style={{ paddingTop: 0, fontWeight: 700 }}>
                <p>
                  Each test was selected based on national guidelines and
                  current research.
                </p>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          {/*<Layout.Block>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Our Tests</IonCardSubtitle>
                <IonCardTitle style={{ color: "#003366", fontWeight: 700 }}>
                  Which package is right for you?
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent style={{ paddingTop: 0 }}>
                <p>
                  PreConception offers two test packages so you can find the
                  package that fits your needs and pregnancy goals.
                </p>
              </IonCardContent>
              <IonToolbar color="white">
                <IonLabel
                  style={{ color: "black" }}
                  className="ion-padding-bottom ion-padding-start"
                >
                  <strong>Know your options.</strong>
                </IonLabel>
              </IonToolbar>
            </IonCard>
          </Layout.Block>*/}
          {/*
            <Layout.Block>
              <IonCard style={{ height: "100%" }} color="secondary">
                <IonCardHeader>
                  <IonCardSubtitle>$399</IonCardSubtitle>
                  <IonCardTitle>Plus +</IonCardTitle>
                  <IonLabel>Comprehensive Preconception Testing</IonLabel>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    This package is for
                    <strong> women who want more.</strong> This includes all of
                    the essential preconception tests backed by national
                    guidelines, plus several additional tests supported by some of
                    the newer research.
                  </p>
                  <br />
                  <p>Know more. Do more.</p>
                  <br />
                  <p>
                    <strong>
                      This package provides an expanded overview of your health.
                    </strong>
                  </p>
                </IonCardContent>
                <IonToolbar color="secondary">
                  <IonButtons slot="end">
                    <IonButton routerLink="/order/plus">Learn more</IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonCard>
            </Layout.Block>
          */}
          <Layout.Block>
            <IonCard color="primary">
              <IonCardHeader>
                <IonCardSubtitle>$299</IonCardSubtitle>
                <IonCardTitle style={{ fontWeight: 700 }}>
                  Essential
                </IonCardTitle>
                <IonLabel>The test package for every woman</IonLabel>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  This package is for women who want the
                  <strong> essential preconception tests</strong>— that means
                  the tests that are recommended for every woman before
                  pregnancy.
                </p>
                <br />
                <p>
                  Backed by national guidelines, these tests are a great way to
                  start your pregnancy or begin a preconception conversation
                  with your provider.
                </p>
              </IonCardContent>
              {/*
                <IonToolbar color="primary">
                  <IonButtons slot="end">
                    <IonButton routerLink="/order/essential">
                      Learn more
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              */}
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <CompareCard />
          </Layout.Block>

          {/*
            <Layout.Block>
              <IonCard style={{ height: "100%" }} color="tertiary">
                <IonCardHeader>
                  <IonCardSubtitle>$99</IonCardSubtitle>
                  <IonCardTitle>Close the Gap</IonCardTitle>
                  <IonLabel>
                    For those who purchased our original package
                  </IonLabel>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    <br />
                    This package is for women who purchase our
                    <strong> One</strong> package and want to purchase additional
                    tests found in our
                    <strong> Plus +</strong> package
                  </p>
                </IonCardContent>
                <IonToolbar color="tertiary">
                  <IonButtons slot="end">
                    <IonButton>Order Now</IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonCard>
            </Layout.Block>
          */}
          <Layout.Block>
            <IonCard color="tertiary">
              <IonCardHeader>
                <IonCardTitle>Healthy History</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <strong>
                  Healthy women are more likely to have successful pregnancies
                  and healthy children.
                </strong>
                <p className="ion-padding-top">
                  Studies show strong links between pre-conception health and
                  maternal and child health outcomes.
                </p>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="secondary">
              <IonCardHeader>
                <IonCardSubtitle>Do More</IonCardSubtitle>
                <IonCardTitle>
                  <strong>Acting early and effectively is our thing</strong>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem color="secondary">
                  <IonLabel className="ion-text-wrap">
                    Your results should be easy to read, so we'll do more than
                    send you off with a confusing lab report. Our personalized
                    results break down what your result means to you so you can
                    act.
                  </IonLabel>
                </IonItem>
                <IonItem color="secondary">
                  <IonLabel className="ion-text-wrap">
                    Want to discuss your results or anything preconception with
                    us? You can schedule the One-on-One call that's included
                    with every order.
                  </IonLabel>
                </IonItem>
                <IonItem color="secondary">
                  <IonLabel className="ion-text-wrap">
                    You'll always have access to PreConception's ever-growing
                    resources and an archive of your past results, so you know
                    what's changed, and what to do about it.
                  </IonLabel>
                </IonItem>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="primary">
              <IonCardHeader>
                <IonCardSubtitle>Know More</IonCardSubtitle>
                <IonCardTitle style={{ color: "#bf9ed6" }}>
                  <strong>All of our tests come with:</strong>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem color="primary">
                  <IonCheckbox checked={true} color="secondary" slot="start" />
                  <IonLabel className="ion-text-wrap">
                    Personalized, easy-to-understand explanation of results
                  </IonLabel>
                </IonItem>
                <IonItem color="primary">
                  <IonCheckbox checked={true} color="secondary" slot="start" />
                  <IonLabel className="ion-text-wrap">
                    One-on-one educational call
                  </IonLabel>
                </IonItem>
                <IonItem color="primary">
                  <IonCheckbox checked={true} color="secondary" slot="start" />
                  <IonLabel className="ion-text-wrap">
                    Lifetime access to PreConception's education center
                  </IonLabel>
                </IonItem>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle color="primary" style={{ fontWeight: 700 }}>
                  Are you ready to start your pregnancy?
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonText>
                  <p style={{ fontWeight: 700 }}>
                    Take the preconception tests recommended by the CDC and ACOG
                    and make sure you start your pregnancy off prepared,
                    informed, and empowered.
                  </p>
                </IonText>
              </IonCardContent>
              {/*
                <IonToolbar color="white">
                  <IonButtons slot="end">
                    <IonButton
                      onClick={() => modal.setOrderModalOpen(true)}
                      style={{ color: "black" }}
                    >
                      Add to cart
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              */}
            </IonCard>
          </Layout.Block>
          {/*
            <Layout.Block>
              <IonCard style={{ height: "100%" }} color="tertiary">
                <IonCardHeader>
                  <IonCardSubtitle>$99</IonCardSubtitle>
                  <IonCardTitle>Close the Gap</IonCardTitle>
                  <IonLabel>
                    For those who purchased our original package
                  </IonLabel>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    <br />
                    This package is for women who purchase our
                    <strong> One</strong> package and want to purchase additional
                    tests found in our
                    <strong> Plus +</strong> package
                  </p>
                </IonCardContent>
                <IonToolbar color="tertiary">
                  <IonButtons slot="end">
                    <IonButton>Order Now</IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonCard>
            </Layout.Block>
          */}
          {/*
            <Layout.Block>
              <IonCard style={{ height: "100%" }} color="tertiary">
                <IonCardHeader>
                  <IonCardSubtitle>$99</IonCardSubtitle>
                  <IonCardTitle>Close the Gap</IonCardTitle>
                  <IonLabel>
                    For those who purchased our original package
                  </IonLabel>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    <br />
                    This package is for women who purchase our
                    <strong> One</strong> package and want to purchase additional
                    tests found in our
                    <strong> Plus +</strong> package
                  </p>
                </IonCardContent>
                <IonToolbar color="tertiary">
                  <IonButtons slot="end">
                    <IonButton>Order Now</IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonCard>
            </Layout.Block>
          */}
          {/*
          
            <Layout.Block>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Compare</IonCardSubtitle>
                  <IonCardTitle>Our Packages</IonCardTitle>
                </IonCardHeader>
                <IonCardContent className="ion-no-padding">
                  <IonSlides scrollbar={true}>
                    <IonSlide>
                      <Layout.Block>
                        <IonCard style={{ height: "100%" }} color="primary">
                          <IonCardHeader>
                            <IonCardSubtitle>$299</IonCardSubtitle>
                            <IonCardTitle>Essential</IonCardTitle>
                            <IonLabel>Basic Preconception Testing</IonLabel>
                          </IonCardHeader>
                          <IonCardContent>
                            <p>
                              This package is for women who want just the
                              <strong> essential preconception tests</strong>—
                              that means the tests that are recommended for
                              <strong> EVERY</strong> woman before pregnancy.
                            </p>
                            <br />
   
                            <p>
                              Backed by national guidelines, these tests are a
                              great way to start your pregnancy or begin a
                              preconception conversation with your provider.
                            </p>
                          </IonCardContent>
                          <IonToolbar color="primary">
                            <IonButtons slot="end">
                              <IonButton>Order Now</IonButton>
                            </IonButtons>
                          </IonToolbar>
                        </IonCard>
                      </Layout.Block>
                    </IonSlide>
                    <IonSlide>
                      <Layout.Block>
                        <IonCard style={{ height: "100%" }} color="secondary">
                          <IonCardHeader>
                            <IonCardSubtitle>$399</IonCardSubtitle>
                            <IonCardTitle>Plus +</IonCardTitle>
                            <IonLabel>Expanded Preconception Testing</IonLabel>
                          </IonCardHeader>
                          <IonCardContent>
                            <p>
                              This package is for
                              <strong> women who want more.</strong> This includes
                              all of the essential preconception tests backed by
                              national guidelines, plus several additional tests
                              supported by some of the newer research!
                            </p>
                            <br />
                            <br />
                            <p>
                              <strong>
                                This package provides a more comprehensive
                                overview of your health.
                              </strong>
                            </p>
                          </IonCardContent>
                          <IonToolbar color="secondary">
                            <IonButtons slot="end">
                              <IonButton>Order Now</IonButton>
                            </IonButtons>
                          </IonToolbar>
                        </IonCard>
                      </Layout.Block>
                    </IonSlide>
                    <IonSlide>
                      <Layout.Block>
                        <IonCard style={{ height: "100%" }} color="tertiary">
                          <IonCardHeader>
                            <IonCardSubtitle>$99</IonCardSubtitle>
                            <IonCardTitle>Close the Gap</IonCardTitle>
                            <IonLabel>
                              For those who purchased our original package
                            </IonLabel>
                          </IonCardHeader>
                          <IonCardContent>
                            <p>
                              <br />
                              This package is for women who purchase our
                              <strong> One</strong> package and want to purchase
                              additional tests found in our
                              <strong> Plus +</strong> package
                            </p>
                            <br />
                            <br />
                            <p>Know more. Do more.</p>
                          </IonCardContent>
                          <IonToolbar color="tertiary">
                            <IonButtons slot="end">
                              <IonButton>Order Now</IonButton>
                            </IonButtons>
                          </IonToolbar>
                        </IonCard>
                      </Layout.Block>
                    </IonSlide>
                  </IonSlides>
                </IonCardContent>
              </IonCard>
            </Layout.Block>
          */}
        </Layout.Grid>
      </IonContent>
    </IonPage>
  );
}
