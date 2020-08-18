import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import TrueVaultAPI from "../../../api/TrueVaultAPI";
import Store from "../../../store/index";

export default function() {
  const { attributes, results, loading } = Store.useContainer();
  return (
    <IonCard color="primary">
      <IonCardHeader>
        <IonCardTitle>Are you ready to view them?</IonCardTitle>
      </IonCardHeader>
      <IonCardContent></IonCardContent>
      <IonToolbar>
        <IonButtons slot="end">
          <IonButton
            onClick={async () => {
              loading.setPending(true);
              let access_token = await localStorage.getItem("access_token");
              if (!access_token) return;
              else {
                let {
                  desiredDocument,
                  status
                } = await TrueVaultAPI.getFormattedResultsDocument(
                  access_token,
                  [attributes.pwn_results[0].id]
                );

                switch (status) {
                  case "succeeded":
                    results.setFormattedResultsDocument(desiredDocument);
                    loading.setPending(false);
                    return;
                  case "failed":
                    loading.setPending(false);
                    return;
                }
              }
            }}
          >
            View
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonCard>
  );
}
