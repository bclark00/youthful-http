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
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonToolbar
} from "@ionic/react";
import { checkmarkCircleOutline, list } from "ionicons/icons";
import React, { useState } from "react";
import Store from "../../store";

export default function() {
  const {
    attributes,
    profileComplete,
    consentFormsSigned,
    consentCallScheduled,
    additionalVerbalHIVConsentState
  } = Store.useContainer();
  const [showPopover, setShowPopover] = useState(false);
  return (
    <>
      <IonFab vertical="bottom" horizontal="end">
        <IonFabButton onClick={() => setShowPopover(true)} color="warning">
          <IonIcon icon={checkmarkCircleOutline} />
        </IonFabButton>

        <IonModal
          isOpen={showPopover}
          onDidDismiss={e => setShowPopover(false)}
        >
          <IonHeader>
            <IonToolbar color="white">
              <IonCardHeader color="white">
                <IonCardSubtitle>Progress Tracker</IonCardSubtitle>
                <IonCardTitle color="primary">
                  <strong>You're on your way</strong>
                </IonCardTitle>
              </IonCardHeader>
              <IonButtons slot="end" className="ion-margin-bottom">
                <IonButton
                  onClick={e => setShowPopover(false)}
                  className="ion-padding-bottom"
                >
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonCardContent>
              <IonList>
                <IonItem className="ion-no-padding">
                  <IonCheckbox checked slot="start" />
                  <IonLabel>Signed up</IonLabel>
                </IonItem>
                {attributes.user_progress_level === "registered" && (
                  <>
                    <IonItem
                      className="ion-no-padding"
                      onClick={() => setShowPopover(false)}
                      routerLink="/order"
                    >
                      <IonCheckbox slot="start" />
                      <IonLabel>Order</IonLabel>
                    </IonItem>
                    <IonItem className="ion-no-padding">
                      <IonCheckbox slot="start" />
                      <IonLabel>Get your tests done</IonLabel>
                    </IonItem>
                  </>
                )}
                {attributes.user_progress_level === "purchased" && (
                  <>
                    <IonItem className="ion-no-padding">
                      <IonCheckbox checked slot="start" />
                      <IonLabel>Test package ordered</IonLabel>
                    </IonItem>
                    {profileComplete ? (
                      <IonItem className="ion-no-padding">
                        <IonCheckbox checked slot="start" />
                        <IonLabel>Profile completed</IonLabel>
                      </IonItem>
                    ) : (
                      <IonItem
                        onClick={() => setShowPopover(false)}
                        routerLink="/profile"
                        className="ion-no-padding"
                      >
                        <IonCheckbox slot="start" />
                        <IonLabel>Complete profile</IonLabel>
                      </IonItem>
                    )}
                    {consentFormsSigned ? (
                      <IonItem className="ion-no-padding">
                        <IonCheckbox slot="start" />
                        <IonLabel>Consent forms signed</IonLabel>
                      </IonItem>
                    ) : (
                      <IonItem
                        onClick={() => setShowPopover(false)}
                        routerLink="/consentform"
                        className="ion-no-padding"
                      >
                        <IonCheckbox slot="start" />
                        <IonLabel>Sign your consent forms</IonLabel>
                      </IonItem>
                    )}
                    {!additionalVerbalHIVConsentState ? null : consentCallScheduled ? (
                      <IonItem className="ion-no-padding">
                        <IonCheckbox checked slot="start" />
                        <IonLabel>Consent call scheduled</IonLabel>
                      </IonItem>
                    ) : (
                      <IonItem
                        href="https://calendly.com/preconception/consent-approval"
                        className="ion-no-padding"
                      >
                        <IonCheckbox slot="start" />
                        <IonLabel>Schedule your consent call</IonLabel>
                      </IonItem>
                    )}
                    <IonItem className="ion-no-padding">
                      <IonCheckbox slot="start" />
                      <IonLabel>Get your tests done</IonLabel>
                    </IonItem>
                  </>
                )}
                {["ordered", "visited", "processed"].find(
                  progress_level =>
                    progress_level === attributes.user_progress_level
                ) && (
                  <IonItem className="ion-no-padding">
                    <IonCheckbox checked slot="start" />
                    <IonLabel>Ordered</IonLabel>
                  </IonItem>
                )}
                {["ordered", "visited", "processed"].find(
                  progress_level =>
                    progress_level === attributes.user_progress_level
                ) && (
                  <IonItem
                    onClick={() => setShowPopover(false)}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://appointment.questdiagnostics.com/patient/appointment"
                    className="ion-no-padding"
                  >
                    <IonCheckbox checked slot="start" />
                    <IonLabel>Find and visit a local lab</IonLabel>
                  </IonItem>
                )}

                <IonItem className="ion-no-padding">
                  <IonCheckbox slot="start" />
                  <IonLabel>View your results</IonLabel>
                </IonItem>
                <IonItem className="ion-no-padding">
                  <IonCheckbox slot="start" />
                  <IonLabel>Optional One-on-One call</IonLabel>
                </IonItem>
                <IonItem className="ion-no-padding">
                  <IonCheckbox slot="start" />
                  <IonLabel>Make a plan</IonLabel>
                </IonItem>
              </IonList>
              <IonCard color="tertiary" className="ion-no-margin">
                <IonCardHeader>
                  <IonCardSubtitle>Congratulations</IonCardSubtitle>
                  <IonCardTitle>
                    You've started your PreConception Journey
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    We want what's best for you and your pregnancy. Our
                    preconception test packages are backed by national
                    guidelines and research. Included with our package is an
                    easy to understand digital report that explains your
                    results, what they mean, and what you can do next. Alongside
                    our digital report, we offer access to a 30 minute
                    One-on-One call with a preconception expert to answer any
                    questions you may have and to help you make a plan for your
                    pregnancy. Take the time to learn more about PreConception,
                    or purchase a test package.
                  </p>
                </IonCardContent>
                <IonToolbar color="tertiary">
                  <IonButtons slot="end">
                    <IonButton
                      onClick={() => setShowPopover(false)}
                      routerLink="/faq"
                    >
                      FAQ
                    </IonButton>
                    <IonButton
                      onClick={() => setShowPopover(false)}
                      routerLink="/order"
                    >
                      Order now
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonCard>
              <IonCard color="primary" className="ion-no-margin ion-margin-top">
                <IonCardHeader>
                  <IonCardSubtitle>Prepare</IonCardSubtitle>
                  <IonCardTitle>PreConception Checklist</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>
                    Every woman should have a plan for her health. By taking
                    action before pregnancy, you can prevent helath problems
                    that might affect your baby later.
                  </p>
                  <IonItem
                    onClick={() => setShowPopover(false)}
                    color="primary"
                    routerLink="/checklist"
                  >
                    <IonIcon icon={list} slot="start" />
                    <IonLabel>PreConception Checklist</IonLabel>
                  </IonItem>
                </IonCardContent>
              </IonCard>
              <IonCard
                color="secondary"
                className="ion-no-margin ion-margin-top"
              >
                <IonCardHeader>
                  <IonCardTitle>Your PreConception Journey</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p>Have questions on what you need to do next?</p>
                  <p className="ion-padding-top">
                    Everything you need to know about our process and what
                    you'll need to do next will be here in this pop-up as you go
                    through your preconception journey.
                  </p>
                  <p className="ion-padding-top">
                    Check back into this pop-up if you need to know what's next
                    after you start the journey to your best pregnancy.
                  </p>
                </IonCardContent>
              </IonCard>
            </IonCardContent>
          </IonContent>
        </IonModal>
      </IonFab>
    </>
  );
}
