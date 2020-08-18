import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonRow,
  IonToolbar
} from "@ionic/react";
import React from "react";
import { useHistory } from "react-router-dom";
import TrueVaultAPI from "../../../../api/TrueVaultAPI";
import Store from "../../../../store";
import { consentFiles, MDConsentFiles } from "../../files";
import { Consents } from "../../Store";

export default function(props: any) {
  let history = useHistory();
  const {
    checkForBlobs,
    sensitiveResultTransmissionConsent,
    standardConsent,
    MDHIVTestingConsentForm
  } = Consents.useContainer();
  const {
    profile,
    auth,
    updateAttributes,
    setUpdating,
    loading,
    stripe_purchases,
    results,
    updating
  } = Store.useContainer();

  const handleSubmit = async () => {
    let document = {
      owner_id: auth.userId,
      owner_username: auth.username,
      date_created: Math.floor(Date.now() / 1000),
      date_updated: Math.floor(Date.now() / 1000),
      owner_first_name: profile?.first_name,
      owner_last_name: profile?.last_name,
      owner_dob: profile?.dob,
      stripe_purchase_id: stripe_purchases[0].stripe_purchase_id,
      // pwn_order_id: EVENTUAL NUMBER,
      list: []
    };

    try {
      setUpdating(true);
      loading.setPending(true);
      let {
        initialDocument,
        status
      } = await TrueVaultAPI.uploadUserConsentForms(
        //@ts-ignore
        localStorage.getItem("access_token"),
        auth.userId,
        document,
        standardConsent,
        sensitiveResultTransmissionConsent,
        MDHIVTestingConsentForm
      );

      switch (status) {
        case "succeeded":
          updateAttributes((draft: any) => {
            draft.legal_document_lists.unshift(initialDocument);
          });
          history.push("/home");
          return;
        case "failed":
          loading.setUpdateMessage(
            "For some reason, that didn't work. Please try again."
          );
        default:
          break;
      }
    } catch (error) {
      loading.setLoadingMessages(
        "For some reason, that didn't work. Try again."
      );
    }
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Sign Forms</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {profile?.state === "MD"
          ? MDConsentFiles.map((file, index) => (
              <IonItem key={index}>
                <IonLabel>{file.label}</IonLabel>
                <IonButton
                  routerLink={`/consentform/sign/${file.file_name}`}
                  shape="round"
                  slot="end"
                >
                  Sign
                </IonButton>
              </IonItem>
            ))
          : consentFiles.map((file, index) => (
              <IonItem key={index}>
                <IonLabel>{file.label}</IonLabel>
                <IonButton
                  routerLink={`/consentform/sign/${file.file_name}`}
                  shape="round"
                  slot="end"
                >
                  Sign
                </IonButton>
              </IonItem>
            ))}
      </IonCardContent>
      <IonToolbar color="white">
        <IonRow className="ion-justify-content-end ion-align-items-center ion-padding-vertical ion-padding-end">
          <IonButton
            shape="round"
            color="secondary"
            disabled={!checkForBlobs() || updating}
            onClick={() => handleSubmit()}
          >
            <strong>Submit</strong>
          </IonButton>
        </IonRow>
      </IonToolbar>
    </IonCard>
  );
}
