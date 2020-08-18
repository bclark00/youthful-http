import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonToolbar
} from "@ionic/react";
import React from "react";
import { AiOutlineRead } from "react-icons/ai";
import Profile from "..";
import Layout from "../../../components/Layout";
import PageHeader from "../../../components/PageHeader";
import Store from "../../../store";
import ConsentForm from "../../ConsentForm";
import { ProfilePictureModal } from "../Picture/Modal/index";

const customAlertOptions = {
  header: "Confirm",
  message: "Did you complete your visit?",
  translucent: true
};

export function ProfilePage() {
  const {
    attributes,
    consentFormsSigned,
    profileComplete,
    additionalVerbalHIVConsentState,
    consentCallScheduled
  } = Store.useContainer();
  return (
    <IonPage>
      <PageHeader.WithMenu pageTitle="Profile" />
      <IonContent fullscreen>
        <Layout.Grid>
          <Layout.Block>
            <Profile.ShortcutCard />
          </Layout.Block>
          <Layout.Block>
            <Profile.InformationCard />
          </Layout.Block>

          <Layout.Block>
            <IonCard color="primary">
              <IonCardHeader>
                <IonCardSubtitle>
                  We aren't your doctor's office
                </IonCardSubtitle>
                <IonCardTitle style={{ color: "#bf9ed6" }}>
                  <strong>We're simpler.</strong>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem color="primary">
                  <IonCheckbox
                    checked={
                      attributes.user_progress_level !== "purchased"
                        ? true
                        : false
                    }
                    color="tertiary"
                    slot="start"
                  />
                  <IonLabel className="ion-text-wrap">
                    Order your test online
                  </IonLabel>
                </IonItem>
                <IonItem color="primary">
                  <IonCheckbox color="tertiary" slot="start" />
                  <IonLabel className="ion-text-wrap">
                    Get your tests done
                  </IonLabel>
                </IonItem>
                <IonItem color="primary">
                  <IonCheckbox color="tertiary" slot="start" />
                  <IonLabel className="ion-text-wrap">
                    View your personalized results
                  </IonLabel>
                </IonItem>
              </IonCardContent>
              <IonToolbar color="white">
                <IonLabel className="ion-padding-bottom ion-padding-start">
                  It's that easy
                </IonLabel>
              </IonToolbar>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="white">
              <IonCardHeader>
                <IonCardSubtitle>Why test with us?</IonCardSubtitle>
                <IonCardTitle style={{ color: "#003366" }} color="black">
                  We're Experts.
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent style={{ paddingTop: 0 }}>
                <p>
                  Unfortunately, most providers aren't up to date on
                  preconception care and the ones who are may not know which
                  tests to recommend. This is why we started PreConception. Many
                  women see providers before their pregnancy but aren't provided
                  with the appropriate tests or information they need and
                  deserve.{" "}
                  <strong>
                    Women often only find out once they've become pregnant that
                    they have medical problems that could have been prevented.
                  </strong>{" "}
                  This is unacceptable. And that's why we're here - to help you
                  start your pregnancy and your child's life the best way
                  possible: healthy, educated, and empowered.
                </p>
              </IonCardContent>
              <IonToolbar color="white">
                <IonLabel
                  color="primary"
                  className="ion-padding-bottom ion-padding-start"
                >
                  <strong>We care.</strong>
                </IonLabel>
                <IonButtons slot="end" className="ion-padding-end ">
                  <IonButton routerLink="/ourstory">Our Story</IonButton>
                </IonButtons>
              </IonToolbar>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="tertiary">
              <IonCardHeader>
                <IonCardTitle>
                  <strong>We all want the best for our kids</strong>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  The healthiest childhoods start before pregnancy and a healthy
                  pregnancy starts before conception.
                  <strong> Preconception testing </strong>
                  gives you the information you need to give your child their
                  best start possible and act early - making corrections and
                  optimizations before it's too late.
                </p>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="white">
              <IonCardHeader>
                <IonCardSubtitle>Our Purpose</IonCardSubtitle>
                <IonCardTitle style={{ color: "#003366" }} color="black">
                  Why are we here?
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent style={{ paddingTop: 0 }}>
                <p>
                  Too many of the circumstances that determine a child's
                  lifelong health outcomes, success, well-being, and
                  socioeconomic status are shaped before they themselves have
                  any power to change it. Every child deserves the best start;
                  uncompromised by a potentially unknown disease, hunger, a lack
                  of education, resources, opportunity, undue maternal stress,
                  or a correctable imbalance before pregnancy. As the study of
                  biology, genetics, and epigentics advances, we learn more and
                  more about how small things early on - even before we are born
                  ourselves - have a powerful and lasting impact on our own
                  lives and our future children's lives. We're here to make sure
                  every life can be lived the best it can be, and that starts
                  with you. The choices you make now will cascade through the
                  lives of your children and grandchildren, potentially for
                  generations to come.
                  <br />
                  <br />
                  <strong>Let's give them the best start we can.</strong>
                </p>
                <IonItem
                  target="blank"
                  href="https://www.economist.com/international/2015/04/04/unequal-beginnings"
                >
                  <AiOutlineRead />
                  <IonIcon />
                  <IonLabel>Unequal beginnings</IonLabel>
                </IonItem>
                <IonItem
                  target="blank"
                  href="https://www.thelancet.com/pdfs/journals/lancet/PIIS0140-6736(18)30311-8.pdf"
                >
                  <AiOutlineRead />
                  <IonIcon />
                  <IonLabel className="ion-text-wrap">
                    Before the beginning: nutrition and lifestyle in the
                    preconception period and its importance for future health
                  </IonLabel>
                </IonItem>
                <IonItem
                  target="blank"
                  href="https://www.thelancet.com/pdfs/journals/lancet/PIIS0140-6736(18)30312-X.pdf"
                >
                  <AiOutlineRead />
                  <IonIcon />
                  <IonLabel className="ion-text-wrap">
                    Origins of lifetime health around the time of conception:
                    causes and consequences
                  </IonLabel>
                </IonItem>
                <IonItem
                  target="blank"
                  href="https://www.thelancet.com/pdfs/journals/lancet/PIIS0140-6736(18)30313-1.pdf"
                >
                  <AiOutlineRead />
                  <IonIcon />
                  <IonLabel className="ion-text-wrap">
                    Intervention strategies to improve nutrition and health
                    behaviours before conception
                  </IonLabel>
                </IonItem>
              </IonCardContent>
              <IonToolbar color="white">
                <IonLabel
                  color="primary"
                  className="ion-padding-bottom ion-padding-start"
                >
                  Resources and Articles
                </IonLabel>
              </IonToolbar>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <ConsentForm.Archive.Card />
          </Layout.Block>
        </Layout.Grid>
      </IonContent>
      <ProfilePictureModal />
    </IonPage>
  );
}
