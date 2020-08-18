import {
  IonBackButton,
  IonButtons,
  IonCardTitle,
  IonCol,
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import kristyPortrait from "../../../assets/images/kristy-portrait.png";
import kristySignature from "../../../assets/images/kristy-signature.png";
import Layout from "../../../components/Layout";

export function OurStoryPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Our Story</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Layout.Column>
          <Layout.Block className="ion-padding">
            <IonCardTitle
              className="ion-padding-bottom"
              style={{ fontWeight: 700 }}
            >
              Welcome to PreConception!
            </IonCardTitle>
            <IonText>
              <p className="ion-padding-bottom">
                We’re SO happy that you’re here. This company was built on the
                belief that women deserve access to evidence-based, quality
                information before pregnancy, so that they can enter pregnancy
                confident, empowered, and in the best health possible! We hope
                that you’ll find our services and information valuable no matter
                where you are on your pregnancy planning journey — whether
                you’re just considering it or have already started trying.
              </p>
              <p className="ion-padding-bottom">
                Before starting PreConception, I worked as a women’s health PA.
                Very early on in my career I noticed that there was a
                significant gap in preconception care in the U.S. After several
                years of working in Ob/Gyn I joined a fertility clinic and
                realized just how big of a problem this was. Hundreds of women
                were coming to us after years of trying to become pregnant,
                having had numerous visits with multiple healthcare providers,
                and yet, the overwhelming majority of these women had
                <strong> never </strong>
                received preconception testing! It made absolutely no sense! How
                could so many providers have missed this opportunity with their
                patients?
              </p>
              <p className="ion-padding-bottom">
                Hundreds of hours of research later and I couldn’t shake my
                frustration with this. The importance of preconception care
                seemed so obvious to me — there were reports dating back to 1989
                that demonstrated{" "}
                <a
                  href="https://eric.ed.gov/?id=ED334018"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  the benefits of preconception care.
                </a>{" "}
                The Center for Disease Control and Prevention (CDC) had even
                issued{" "}
                <a
                  href="https://www.cdc.gov/mmwr/preview/mmwrhtml/rr5506a1.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  a formal statement on this very topic.
                </a>{" "}
                <strong>
                  How had we entered the 21st century and left this piece out?
                </strong>
              </p>
              <p className="ion-padding-bottom">
                The more I spoke with women, the more I heard the same thing.
                From my friends. From my patients. From almost everyone! Women
                who were actively trying to get pregnant often had multiple
                visits with their primary care providers or Ob/Gyns and yet had
                never received anything more than a recommendation to start
                prenatal vitamins. And then it hit me — the majority of
                healthcare providers don’t actually know this information
                themselves. It turns out, society has been so focused on
                preventing pregnancy that we’ve forgotten how to plan for it!
              </p>
              <p className="ion-padding-bottom">
                Which is how MY baby, PreConception — an online service that
                provides direct access to preconception testing for women who
                are planning a pregnancy — was conceived (pun intended). My
                dream is that EVERY woman has the knowledge and resources to
                evaluate and understand her health status before pregnancy. Not
                at her first prenatal visit when the opportunity to improve
                pregnancy outcomes has already passed.
              </p>
              <p className="ion-padding-bottom">
                The{" "}
                <a
                  href="https://www.aafp.org/afp/2017/1015/p492.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  American Academy of Family Physicians
                </a>{" "}
                has stated that “transforming the way preconception care is
                delivered is critical to success.” At PreConception, we’re
                leading that transformation. Thank you for allowing us to join
                you on your journey towards a healthy pregnancy.
              </p>
            </IonText>
            <IonRow className="ion-justify-content-start">
              <IonCol>
                <IonImg style={{ height: 150 }} src={kristyPortrait} />
              </IonCol>
              <IonCol className="ion-justify-content-start">
                <IonImg src={kristySignature} />

                <p className="ion-no-margin ion-padding-start">
                  Kristy Goodman
                </p>
                <p className="ion-no-margin ion-padding-start">
                  Co-founder & CEO, PreConception
                </p>
              </IonCol>
            </IonRow>
          </Layout.Block>
        </Layout.Column>
      </IonContent>
    </IonPage>
  );
}
