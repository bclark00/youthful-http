import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonToolbar
} from "@ionic/react";
import { mail } from "ionicons/icons";
import React, { useState } from "react";
import Store from "../../../store/index";

const customAlertOptions = {
  header: "Confirm",
  message: "Did you complete your visit?",
  translucent: true
};

export default function() {
  const {
    setUpdating,
    updateAttributes,
    loading,
    device
  } = Store.useContainer();
  const [visitConfirmed, setVisitConfirmed] = useState(false);

  const handleSubmit = () => {
    loading.setPending(true);
    setUpdating(true);
    updateAttributes((draft: any) => {
      draft.user_progress_level = "visited";
    });
  };

  // const handleSubmit = async () => {
  //   loading.setPending(true);
  //   let { data, status } = await Lab.placeOrder(auth.accessToken, auth.userId);
  //   switch (status) {
  //     case "succeeded":
  //       initialize();
  //       return;
  //     case "failed":
  //       console.log(data);
  //       return;
  //   }
  //   updateAttributes((draft: any) => {
  //     draft.user_progress_level = "ordered";
  //   });
  // };
  return (
    <IonCard color="secondary">
      <IonCardHeader>
        <IonCardSubtitle>Let us know</IonCardSubtitle>
        <IonCardTitle>Did you complete your visit?</IonCardTitle>
      </IonCardHeader>
      <IonToolbar color="secondary">
        <IonRow className="ion-justify-content-between ion-align-items-center ion-padding-bottom ion-padding-start">
          <div>
            <IonLabel style={{ fontWeight: 700 }}>Confirm:</IonLabel>
            <IonSelect
              onIonChange={(e: any) => {
                setVisitConfirmed(e.target.value);
              }}
              value={visitConfirmed}
              className="ion-no-padding ion-padding-end"
              interfaceOptions={customAlertOptions}
            >
              <IonSelectOption value={true}>Visit complete</IonSelectOption>
              <IonSelectOption value={false}>Visit incomplete</IonSelectOption>
            </IonSelect>
          </div>
          <IonButton
            disabled={!visitConfirmed}
            onClick={handleSubmit}
            color="light"
            className="ion-padding-end"
          >
            Submit
          </IonButton>
        </IonRow>
      </IonToolbar>
      <IonCardContent>
        <IonItem color="secondary">
          <IonLabel className="ion-text-wrap">
            You can always contact us if you have any problems
          </IonLabel>
          <IonButtons slot="end">
            {device.isIos ? (
              <IonButton
                onClick={() => {
                  window.location.href =
                    "mailto:support@preconceptiontest.com?subject=Issue%20at%20the%20Lab&body=Please%20include%20your:%20Last%20Name,%20Date%20of%20Birth,%20and%20your%20ZIP%20code%20for%20verification.";
                  return;
                }}
              >
                <IonIcon icon={mail} />
              </IonButton>
            ) : (
              <IonButton
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:support@preconceptiontest.com?subject=Issue%20at%20the%20Lab&body=Please%20include%20your:%20Last%20Name,%20Date%20of%20Birth,%20and%20your%20ZIP%20code%20for%20verification."
              >
                <IonIcon icon={mail} />
              </IonButton>
            )}
          </IonButtons>
        </IonItem>
      </IonCardContent>
    </IonCard>
  );
}
