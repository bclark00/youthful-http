import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonSpinner,
  IonToolbar
} from "@ionic/react";
import React, { useState } from "react";
import Loadable from "react-loadable";
import TrueVaultAPI from "../../../../api/TrueVaultAPI";
import Store from "../../../../store";

const FormList = Loadable({
  loader: () => import("../List"),
  loading: () => <IonSpinner />
});

export function ConsentFormArchiveCard() {
  const {
    legal_document_lists,
    auth,
    attributes,
    loading
  } = Store.useContainer();
  let [legalDocumentSet, setLegalDocumentSet] = useState();

  const getRootDocument = async () => {
    if (legal_document_lists.length > 0) {
      loading.setPending(true);
      let { fetchedFiles, status } = await TrueVaultAPI.getLegalDocumentsList(
        auth.accessToken,
        attributes
      );
      switch (status) {
        case "succeeded":
          setLegalDocumentSet(fetchedFiles);
          loading.setPending(false);
          return;
        case "failed":
          loading.setPending(false);
          loading.setUpdateMessage("That didn't work");
      }
    } else return;
  };
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Your Forms</IonCardTitle>
        <IonCardSubtitle>You can download your forms</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        {legalDocumentSet ? (
          <FormList legalDocumentSet={legalDocumentSet} />
        ) : null}
      </IonCardContent>
      <IonToolbar color="white">
        <IonButtons slot="end">
          <IonButton onClick={getRootDocument}>View</IonButton>
        </IonButtons>
      </IonToolbar>
    </IonCard>
  );
}
