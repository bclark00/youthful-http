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
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonToolbar
} from "@ionic/react";
import React, { useEffect, useMemo, useState } from "react";
import { AiOutlineRead } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import DirectSignUp from "../DirectSignUp";
import { essentialTests, tests } from "../PackageComparison/tests";

export default function LandingPage() {
  const [ref, inView, entry] = useInView();
  let [checked, setCheck] = useState(false);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setCheck(true);
      }, 2000);
    } else setCheck(false);
  }, [inView]);

  return (
    <IonPage>
      <PageHeader.WithMenu pageTitle="Hi there" />
      <IonContent fullscreen>
        <Layout.Grid>
          <Layout.Block>
            <IonCard id="signup" color="primary">
              <IonCardHeader>
                <IonCardTitle>Preconception means Prepregnancy</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  Our tests are recommended for every woman who is planning a
                  pregnancy in the next
                  <strong> 12 months</strong>. We call this the
                  <strong> Preconception Period</strong>.
                </p>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <DirectSignUp.PrimaryCard />
          </Layout.Block>
          <Layout.Block>
            <IonCard color="secondary">
              <IonCardHeader>
                <IonCardTitle style={{ fontWeight: 700 }}>
                  Preconception testing is recommended for everyone
                </IonCardTitle>
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
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Be healthy</IonCardSubtitle>
                <IonCardTitle>Preconception Checklist</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem>
                  <IonCheckbox slot="start" />
                  <IonLabel>Get to an ideal weight</IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start" />
                  <IonLabel className="ion-text-wrap">
                    Discuss prescriptions wtih my doctor
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start" />
                  <IonLabel>Stop smoking</IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start" />
                  <IonLabel>Stop drinking alcohol</IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start" />
                  <IonLabel className="ion-text-wrap">
                    Start taking prenatal vitamins
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start" />
                  <IonLabel>Know your blood type</IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start" />
                  <IonLabel>Know father's blood type</IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start" />
                  <IonLabel className="ion-text-wrap">
                    Create a prenatal family history
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start" checked />
                  <IonLabel>Get tested</IonLabel>
                </IonItem>
              </IonCardContent>
              <IonToolbar color="white">
                <IonLabel
                  slot="end"
                  color="primary"
                  className="ion-padding-bottom ion-padding-end"
                >
                  <strong>Be ready.</strong>
                </IonLabel>
              </IonToolbar>
            </IonCard>
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
                <IonText>
                  <p style={{ fontWeight: 700 }}>No waiting.</p>
                  <p style={{ fontWeight: 700 }}>No unexpected bills.</p>
                  <p style={{ fontWeight: 700 }}>No misinformation.</p>
                  <p style={{ fontWeight: 700 }} className="ion-padding-bottom">
                    Just preconception experts here to help you.
                  </p>
                </IonText>
                <IonItem color="primary">
                  <IonCheckbox checked color="tertiary" slot="start" />
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
                <IonItem color="primary">
                  <IonCheckbox color="tertiary" slot="start" />
                  <IonLabel className="ion-text-wrap">
                    Talk to us - learn what you can do
                  </IonLabel>
                </IonItem>
                <IonItem color="primary">
                  <IonCheckbox color="tertiary" slot="start" />
                  <IonLabel className="ion-text-wrap">
                    Take control of your health
                  </IonLabel>
                </IonItem>
                <IonItem color="primary">
                  <IonCheckbox color="tertiary" slot="start" />
                  <IonLabel className="ion-text-wrap">
                    Plan your future
                  </IonLabel>
                </IonItem>
              </IonCardContent>
              <IonToolbar color="white">
                {/*
                  <IonLabel className="ion-padding-bottom ion-padding-start">
                    <strong>It's that easy.</strong>
                  </IonLabel>
                */}
                <IonButtons slot="end" className="ion-padding-end ">
                  <IonButton
                    onClick={() =>
                      document
                        .querySelector("ion-content")
                        ?.scrollToPoint(0, 170, 500)
                    }
                  >
                    Sign up
                  </IonButton>
                </IonButtons>
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
            <IonCard color="secondary">
              <IonCardHeader>
                <IonCardTitle>
                  We're big fans of preventative medicine
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <strong>
                  Reactive healthcare doesn't cut it. Especially with our kids.
                </strong>
                <p className="ion-padding-top">
                  The healthcare system in the United States is outdated,
                  inefficient, and lets preventative opportunities for more
                  healthy and well-lived lives slip through the cracks.
                </p>
                <p className="ion-padding-top">
                  We're here to help you act early, be proactive, and be ready
                  for your pregnancy.
                </p>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
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
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>What to expect</IonCardSubtitle>
                <IonCardTitle>Life's costs</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonText>
                  <p>
                    Raising kids is one of life's greatests joys. We all know it
                    can be expensive, but how expensive?
                  </p>
                  <br />
                  <p className="ion-padding-bottom" style={{ fontWeight: 700 }}>
                    Here's a short list of some of the things you'll probably
                    need
                  </p>
                </IonText>
                <IonItem>
                  <IonCheckbox color="primary" checked slot="start" />
                  <IonLabel className="ion-text-wrap">
                    $20/month - Prenatal vitamins
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox
                    ref={ref}
                    checked={checked}
                    color="primary"
                    slot="start"
                  />
                  <IonLabel className="ion-text-wrap">
                    $299 - PreConception tests
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start" />
                  <IonLabel className="ion-text-wrap">
                    $1000 - Nursery furniture
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start" />
                  <IonLabel className="ion-text-wrap">$199 - Car seat</IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start" />
                  <IonLabel className="ion-text-wrap">
                    $399 - Travel stroller
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start" />
                  <IonLabel className="ion-text-wrap">
                    $400 - 12 months of diapers
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start" />
                  <IonLabel className="ion-text-wrap">
                    $199 - Electric breast pump
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start" />
                  <IonLabel className="ion-text-wrap">
                    $16,065 - 1/2 time childcare in Santa Monica, CA
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start" />
                  <IonLabel className="ion-text-wrap">$5,000 - Braces</IonLabel>
                </IonItem>
                <IonItem>
                  <IonCheckbox slot="start" />
                  <IonLabel className="ion-text-wrap">
                    $13,226/year - in-state UCLA tuition
                  </IonLabel>
                </IonItem>
              </IonCardContent>
              <IonToolbar color="white">
                <IonLabel
                  slot="end"
                  color="primary"
                  className="ion-padding-bottom ion-padding-end"
                >
                  <strong>Plan ahead.</strong>
                </IonLabel>
              </IonToolbar>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="primary">
              <IonCardHeader>
                <IonCardSubtitle>Know More</IonCardSubtitle>
                <IonCardTitle>All of our tests come with:</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem color="primary">
                  <IonCheckbox checked={true} color="secondary" slot="start" />
                  <IonLabel className="ion-text-wrap">
                    Personalized and easy to understand explanation of results
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
              <IonToolbar>
                <IonButtons slot="end" className="ion-padding-end ">
                  <IonButton
                    onClick={() =>
                      document
                        .querySelector("ion-content")
                        ?.scrollToPoint(0, 170, 1200)
                    }
                  >
                    Sign up
                  </IonButton>
                </IonButtons>
              </IonToolbar>
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
                    <IonButton routerLink="/order" style={{ color: "black" }}>
                      Order now
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              */}
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
                <br />
                <p>
                  We're here to give you access to the tests and information you
                  need to start off on the right track. Information that only
                  preconception experts know about, and tests only preconception
                  experts know to recommend. We are your go-to resource for all
                  things preconception.
                </p>
              </IonCardContent>
              <IonToolbar color="tertiary">
                <IonButtons slot="end">
                  <IonButton className="ion-padding-end" routerLink="/faq">
                    FAQ
                  </IonButton>
                </IonButtons>
              </IonToolbar>
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
                <p className="ion-padding-bottom">
                  Too many of the circumstances that determine a child's
                  lifelong health outcomes, success, well-being, and eventual
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
                    behaviors before conception
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
        </Layout.Grid>
      </IonContent>
    </IonPage>
  );
}

function TestsCard() {
  return useMemo(
    () => (
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>What's included?</IonCardSubtitle>
          <IonCardTitle>Our Packages</IonCardTitle>
        </IonCardHeader>
        <IonCardContent className="ion-no-padding">
          <IonList className="ion-padding-bottom">
            {/*
            <IonCardSubtitle className="ion-padding-start" color="primary">
              <strong>Essential</strong>
            </IonCardSubtitle>
            <IonCardSubtitle className="ion-padding-start" color="secondary">
              <strong>Plus +</strong>
            </IonCardSubtitle>
            */}
            <IonCard color="primary">
              <IonCardHeader>
                <IonCardSubtitle>Know More</IonCardSubtitle>
                <IonCardTitle style={{ color: "#bf9ed6" }}>
                  <strong>All of our tests come with:</strong>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent className="ion-no-padding">
                <IonItem color="primary">
                  <IonCheckbox checked={true} color="secondary" slot="start" />
                  <IonLabel className="ion-text-wrap">
                    Personalized, prefessionally-reviewed, easy-to-understand
                    results
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
                  <IonCardTitle>I am opting out of HIV Testing</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  I understand that HIV testing is an important part of
                  preconception testing. I understand that by declining HIV
                  testing I will not know if I am infected with HIV which can
                  result in an increased risk to myself and others should I have
                  HIV and become pregnant.
                </IonCardContent>
              </IonCard>
            </IonRow>
          </IonToolbar>
        </IonCardContent>
      </IonCard>
    ),
    [tests]
  );
}
