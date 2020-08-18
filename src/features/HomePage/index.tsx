import {
  IonBadge,
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
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonText,
  IonToolbar
} from "@ionic/react";
import {
  calendar,
  call,
  checkmarkCircleOutline,
  clipboard,
  create,
  happy,
  walk,
  woman
} from "ionicons/icons";
import React from "react";
import Lab from "../../api/Lab";
import purpleBackground from "../../assets/images/purple_background.svg";
import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import Store from "../../store";
import ProgressTracker from "../ProgressTracker";
import CheckInCard from "./ConditonalCards/CheckInCard";
import LabFinderCard from "./ConditonalCards/LabFinderCard";

export default function HomePage() {
  const {
    attributes,
    readyToOrder,
    initialize,
    consentFormsSigned,
    auth,
    consentCallRequired,
    consentCallScheduled,
    profileComplete,
    loading,
    updateAttributes,
    device
  } = Store.useContainer();

  const handleSubmit = async () => {
    loading.setPending(true);
    let { data, status } = await Lab.placeOrder(auth.accessToken, auth.userId);
    switch (status) {
      case "succeeded":
        initialize();
        return;
      case "failed":
        console.log(data);
        return;
    }
    updateAttributes((draft: any) => {
      draft.user_progress_level = "ordered";
    });
  };

  return (
    <IonPage>
      <PageHeader.WithMenu pageTitle="Home" />
      <IonContent>
        <IonRefresher
          slot="fixed"
          onIonRefresh={e => {
            if (e.type !== "ionRefresh") window.location.reload(true);
            else initialize(e);
          }}
        >
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <Layout.Grid>
          <Layout.Block>
            <IonCard color="white">
              <img alt="purple background" src={purpleBackground} />
              <IonCardHeader>
                <IonFab edge horizontal="center" vertical="top">
                  <IonFabButton color="primary">
                    <IonIcon icon={woman} size="large" />
                    {/*
                    <IonAvatar>
                        <img alt="profile avatar" src={profilePic} />
                        </IonAvatar>
                      */}
                  </IonFabButton>
                  {/*
                  <IonFabList side="start">
                    <IonFabButton color="primary">
                      <IonIcon icon={mail} />
                    </IonFabButton>
                    <IonFabButton color="primary">
                      <IonIcon icon={heart} />
                    </IonFabButton>
                  </IonFabList>
                 */}
                  <IonFabList side="end">
                    {/*
                      <IonFabButton routerLink="/call" color="primary">
                        <IonIcon icon={call} />
                      </IonFabButton>
                    */}
                    <IonFabButton routerLink="/profile" color="tertiary">
                      <IonIcon icon={create} />
                    </IonFabButton>
                  </IonFabList>
                </IonFab>
                <IonCardSubtitle>
                  Hey {attributes?.profile?.first_name}
                </IonCardSubtitle>
                <IonCardTitle style={{ color: "#003366" }} color="black">
                  Welcome to PreConception
                </IonCardTitle>
              </IonCardHeader>
            </IonCard>
          </Layout.Block>
          {readyToOrder && attributes.user_progress_level === "purchased" && (
            <Layout.Block>
              <IonCard color="primary">
                <IonCardHeader>
                  <IonCardSubtitle>Get tested</IonCardSubtitle>
                  <IonCardTitle>Let's get your tests done</IonCardTitle>
                </IonCardHeader>
                <IonToolbar color="primary">
                  <IonButtons slot="end">
                    <IonButton
                      onClick={handleSubmit}
                      className="ion-padding-end"
                    >
                      Start
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonCard>
            </Layout.Block>
          )}

          {readyToOrder && attributes.user_progress_level === "processed" && (
            <Layout.Block>
              <IonCard color="primary">
                <IonCardHeader>
                  <IonCardTitle>
                    Preconception testing is recommended for everyone¹
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
                <IonToolbar color="primary">
                  <IonButtons slot="end">
                    <IonButton routerLink="/order" className="ion-padding-end">
                      Order now
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonCard>
            </Layout.Block>
          )}
          {attributes.user_progress_level === "registered" && (
            <Layout.Block>
              <IonCard color="primary">
                <IonCardHeader>
                  <IonCardTitle>
                    Preconception testing is recommended for everyone¹
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
                <IonToolbar color="primary">
                  <IonButtons slot="end">
                    <IonButton routerLink="/order" className="ion-padding-end">
                      Order now
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonCard>
            </Layout.Block>
          )}
          {attributes.user_progress_level === "purchased" && !profileComplete && (
            <Layout.Block>
              <IonCard color="primary">
                <IonCardHeader>
                  <IonCardSubtitle>What's next?</IonCardSubtitle>
                  <IonCardTitle style={{ fontWeight: 700 }}>
                    Complete your profile
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    In order to get tested, we need you to have a complete
                    profile
                  </p>
                </IonCardContent>
                <IonToolbar color="primary">
                  <IonButtons slot="end">
                    <IonButton
                      routerLink="/profile"
                      className="ion-padding-end"
                    >
                      Complete profile
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonCard>
            </Layout.Block>
          )}
          {attributes.user_progress_level === "purchased" &&
            !consentFormsSigned && (
              <Layout.Block>
                <IonCard color="secondary">
                  <IonCardHeader>
                    <IonCardSubtitle>What's next?</IonCardSubtitle>
                    <IonCardTitle style={{ fontWeight: 700 }}>
                      Please sign our consent forms
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>
                      In order to get tested, we need you to sign our consent
                      forms
                    </p>
                  </IonCardContent>
                  <IonToolbar color="secondary">
                    <IonButtons slot="end">
                      <IonButton
                        routerLink="/consentform"
                        className="ion-padding-end"
                      >
                        Sign forms
                      </IonButton>
                    </IonButtons>
                  </IonToolbar>
                </IonCard>
              </Layout.Block>
            )}

          {attributes.user_progress_level === "purchased" &&
            consentCallRequired &&
            !consentCallScheduled && (
              <Layout.Block>
                <IonCard color="tertiary">
                  <IonCardHeader>
                    <IonCardSubtitle>Consent call</IonCardSubtitle>
                    <IonCardTitle style={{ fontWeight: 700 }}>
                      Your state requires a consent call
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <p>
                      You'll need you to schedule a consent call with us in
                      order to get tested.
                    </p>
                  </IonCardContent>
                  <IonToolbar color="tertiary">
                    <IonButtons slot="end">
                      <IonButton
                        href="https://calendly.com/preconception/consent-approval"
                        className="ion-padding-end"
                      >
                        Schedule
                      </IonButton>
                    </IonButtons>
                  </IonToolbar>
                </IonCard>
              </Layout.Block>
            )}
          {attributes.user_progress_level === "purchased" &&
            consentCallRequired &&
            consentCallScheduled && (
              <Layout.Block>
                <IonCard color="tertiary">
                  <IonCardHeader>
                    <IonCardSubtitle>What's next?</IonCardSubtitle>
                    <IonCardTitle style={{ fontWeight: 700 }}>
                      Scheduled Call
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonRow>
                      <IonItem color="tertiary">
                        <IonIcon slot="start" icon={checkmarkCircleOutline} />
                        <IonLabel className="ion-text-wrap">
                          {attributes?.consent_calls?.[0]?.calendy_event_name}
                        </IonLabel>
                      </IonItem>
                      <IonCardContent>
                        Before we submit your order to the lab, we need to talk
                        with you about some of our tests. It's no big deal, just
                        a legal requirement in your state.
                      </IonCardContent>
                    </IonRow>
                    <IonRow>
                      <IonRow>
                        <IonItem color="tertiary">
                          <IonIcon slot="start" icon={call} />
                          <IonLabel className="ion-text-wrap">
                            State required review
                          </IonLabel>
                        </IonItem>
                        <IonCardContent>
                          Your state requires additional verbal consent
                          regarding HIV testing. Our call should only take 5
                          minutes. After the call, we'll submit your order to
                          the lab.
                        </IonCardContent>
                      </IonRow>
                      <IonRow>
                        <IonItem color="tertiary">
                          <IonIcon slot="start" icon={calendar} />
                          <IonLabel className="ion-text-wrap">
                            {
                              attributes?.consent_calls?.[0]
                                ?.invitee_start_time_pretty
                            }
                          </IonLabel>
                        </IonItem>
                        <IonCardContent>
                          You should have gotten an email with the schedule
                          details for this verbal consent call. We'll call you
                          at the time and date you chose above.
                        </IonCardContent>
                      </IonRow>
                    </IonRow>
                  </IonCardContent>
                </IonCard>
              </Layout.Block>
            )}
          {attributes.user_progress_level === "ordered" && (
            <Layout.Block>
              <IonCard color="white">
                <IonCardHeader>
                  <IonCardSubtitle>What's next?</IonCardSubtitle>
                  <IonCardTitle>It's time to go to a lab</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonRow>
                    <IonCol>
                      <IonItem>
                        <IonIcon slot="start" icon={walk} />
                        <IonLabel>Walk-in</IonLabel>
                      </IonItem>
                      <IonCardContent>
                        <IonText>
                          <p>
                            Walk ins can be more flexible and convenient than a
                            scheduled appointment.
                          </p>
                        </IonText>
                      </IonCardContent>
                      <IonButtons>
                        <IonButton
                          href="https://appointment.questdiagnostics.com/patient/confirmation"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ion-padding-start"
                          style={{ fontWeight: 700 }}
                          color="primary"
                        >
                          Find a location
                        </IonButton>
                      </IonButtons>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <IonItem>
                        <IonIcon slot="start" icon={calendar} />
                        <IonLabel>Appointment</IonLabel>
                      </IonItem>
                      <IonCardContent>
                        <IonText>
                          <p>
                            Having a scheduled appointment helps you plan the
                            day your way.
                          </p>
                          <p className="ion-padding-top">
                            When scheduling an appointment online, make sure to
                            select "Medical Professional" and "All Other Tests"
                            when prompted.
                          </p>
                        </IonText>
                      </IonCardContent>
                      <IonButtons>
                        <IonButton
                          href="https://appointment.questdiagnostics.com/patient/appointment"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ion-padding-start"
                          style={{ fontWeight: 700 }}
                          color="primary"
                        >
                          Schedule an appointment
                        </IonButton>
                      </IonButtons>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </Layout.Block>
          )}
          {attributes.user_progress_level === "visited" && (
            <Layout.Block>
              <IonCard color="primary">
                <IonCardHeader>
                  <IonCardTitle style={{ fontWeight: 700 }}>
                    We're processing your tests
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonRow>
                    <IonItem color="primary">
                      <IonIcon slot="start" icon={clipboard} />
                      <IonLabel>We'll have your results soon</IonLabel>
                    </IonItem>
                    <IonCardContent>
                      <p className="ion-padding-bottom">
                        We'll create your personalized report and make sure
                        everything looks right
                      </p>
                      <p className="ion-padding-bottom">
                        You may receive a call about your results before we
                        release them to you
                      </p>
                      <p className="ion-padding-bottom">
                        It should only take a couple of days to get your results
                      </p>
                    </IonCardContent>
                  </IonRow>
                </IonCardContent>
                <IonToolbar color="primary">
                  <IonLabel>
                    <p className="ion-padding-start">Has it been too long?</p>
                  </IonLabel>
                  <IonButtons slot="end">
                    {device.isIos ? (
                      <IonButton
                        onClick={() => {
                          window.location.href =
                            "mailto:support@preconceptiontest.com?subject=Results%20are%20taking%20a%20While&body=Please%20include%20your:%20Last%20Name,%20Date%20of%20Birth,%20and%20your%20ZIP%20code%20for%20verification.";
                          return;
                        }}
                      >
                        Contact us
                      </IonButton>
                    ) : (
                      <IonButton
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:support@preconceptiontest.com?subject=Results%20are%20taking%20a%20While&body=Please%20include%20your:%20Last%20Name,%20Date%20of%20Birth,%20and%20your%20ZIP%20code%20for%20verification."
                      >
                        Contact us
                      </IonButton>
                    )}
                  </IonButtons>
                </IonToolbar>
              </IonCard>
            </Layout.Block>
          )}
          {attributes.user_progress_level === "processed" && (
            <Layout.Block>
              <IonCard color="primary">
                <IonCardHeader>
                  <IonCardTitle style={{ fontWeight: 700 }}>
                    Your results are ready
                  </IonCardTitle>
                </IonCardHeader>

                <IonToolbar color="primary">
                  <IonButtons slot="end">
                    <IonButton
                      routerLink="/results"
                      className="ion-padding-end"
                    >
                      Results
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonCard>
            </Layout.Block>
          )}
          {attributes.user_progress_level === "ordered" && (
            <Layout.Block>
              <LabFinderCard />
            </Layout.Block>
          )}
          {attributes.user_progress_level === "ordered" && (
            <Layout.Block>
              <CheckInCard />
            </Layout.Block>
          )}
          {attributes.user_progress_level === "registered" && (
            <Layout.Block>
              <IonCard color="secondary">
                <IonCardHeader>
                  <IonCardTitle>Preconception means Pre-pregnancy</IonCardTitle>
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
          )}

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
              <IonToolbar color="tertiary">
                <IonLabel>
                  <p className="ion-padding-start">Have questions?</p>
                </IonLabel>
                <IonButtons slot="end">
                  <IonButton routerLink="/faq" className="ion-padding-end">
                    Read our FAQ
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="secondary">
              <IonCardHeader>
                <IonCardSubtitle>Learn. Communicate. Plan.</IonCardSubtitle>
                <IonCardTitle>
                  PreConception is your go-to resource
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonItem color="secondary">
                  <IonCheckbox checked slot="start" />
                  <IonLabel>Recommended tests</IonLabel>
                </IonItem>
                <IonItem color="secondary">
                  <IonCheckbox checked slot="start" />
                  <IonLabel>One-on-One call</IonLabel>
                </IonItem>
                <IonItem color="secondary">
                  <IonCheckbox checked slot="start" />
                  <IonLabel>Comprehensive report</IonLabel>
                </IonItem>
                <IonItem color="secondary">
                  <IonBadge color="tertiary" slot="start">
                    soon
                  </IonBadge>
                  <IonLabel>PreConception 101</IonLabel>
                </IonItem>
                <p className="ion-padding-top">
                  Our tests come with a one-on-one educational call and an easy
                  to understand digital report. Alongside these resources, we
                  will soon offer real-time direct messaging for whenever you
                  need information, an online community of other women planning
                  their pregnanccies together, and content centering around all
                  things PreConception.
                </p>
                <IonItem routerLink="/tab5" color="secondary">
                  <IonIcon icon={happy} slot="start" />
                  <IonLabel className="ion-text-wrap">
                    <strong>
                      If you don't mind, we'd like to ask for your feedback.
                    </strong>
                  </IonLabel>
                </IonItem>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="white">
              <IonCardHeader>
                <IonCardSubtitle>Plan Ahead</IonCardSubtitle>
                <IonCardTitle>Preconception Checklist</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <p>
                  Every woman should be thinking about her health whether or not
                  she is planning pregnancy. Experts agree that women need to be
                  healthier
                  <strong> before </strong>
                  becoming pregnant. By taking action on health issues and risks
                  before pregnancy, you can prevent problems that might affect
                  you or your baby later.
                </p>
              </IonCardContent>
              <IonToolbar color="white">
                <IonLabel className="ion-padding-bottom ion-padding-start">
                  <strong>Smart. Healthy. Proactive.</strong>
                </IonLabel>
                <IonButtons slot="end" className="ion-padding-end ">
                  <IonButton routerLink="/checklist">Get started</IonButton>
                </IonButtons>
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
                <IonItem color="primary">
                  <IonBadge color="tertiary" slot="start">
                    1
                  </IonBadge>
                  <IonLabel>Order your test online</IonLabel>
                </IonItem>
                <IonItem color="primary">
                  <IonBadge color="tertiary" slot="start">
                    3
                  </IonBadge>
                  <IonLabel>Get your tests done</IonLabel>
                </IonItem>
                <IonItem color="primary">
                  <IonBadge color="tertiary" slot="start">
                    3
                  </IonBadge>
                  <IonLabel>View your results</IonLabel>
                </IonItem>
              </IonCardContent>
              <IonToolbar color="white">
                <IonLabel className="ion-padding-bottom ion-padding-start">
                  <strong>It's that easy.</strong>
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
          {/*
            <Layout.Block>
              <IonCard color="secondary">
                <IonCardHeader>
                  <IonCardSubtitle>We're reliable</IonCardSubtitle>
                  <IonCardTitle>
                    <strong>Upfront pricing</strong>
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonItem color="secondary">
                    <IonCheckbox checked color="primary" slot="start" />
                    <IonLabel>No surprise bills</IonLabel>
                  </IonItem>
                  <IonText>
                    <p className="ion-padding-top">
                      It's very difficult (if not impossible!) to know how much
                      labs cost through your insurance (it's true, try asking your
                      doctor!)
                    </p>
                    <p className="ion-padding-top">
                      When getting these tests done at your doctor's office, they
                      may not be covered by your insurance
                    </p>
                    <p className="ion-padding-top">
                      Available at a lower price than you would likely pay at a
                      doctor's office (even if you were paying cash there!)
                    </p>
                  </IonText>
                </IonCardContent>
              </IonCard>
            </Layout.Block>
          */}
        </Layout.Grid>
      </IonContent>
      <ProgressTracker />
    </IonPage>
  );
}
