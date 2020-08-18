/* eslint-disable */
import {
  IonButton,
  IonButtons,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader
} from "@ionic/react";
import { saveAs } from "file-saver";
import { download } from "ionicons/icons";
import React from "react";
import TrueVaultAPI from "../../../../api/TrueVaultAPI";
import Store from "../../../../store";

export default function ConsentFormArchiveCard(props: any) {
  const { loading } = Store.useContainer();

  const handleClick = async (document: any) => {
    loading.setPending(true);
    let access_token = await localStorage.getItem("access_token");
    if (!access_token) {
      loading.setPending(false);
      loading.setUpdateMessage("Authentication error");
    } else {
      let pdf = await TrueVaultAPI.getBlob(
        access_token,
        document.id,
        document.vault_id
      );
      if (!pdf) {
        loading.setPending(false);
        loading.setUpdateMessage("Document couldnt be downloaded");
      } else {
        loading.setPending(false);
        saveAs(pdf.blob, pdf.fileName);
      }
      console.log(pdf);
    }
  };
  return (
    <>
      {props.legalDocumentSet.map((legalDocumentSet: any, index: number) => (
        <IonList key={index} className="ion-no-padding">
          <IonListHeader className="ion-no-padding ion-padding-top">
            {`${new Date(
              legalDocumentSet.document.date_created * 1000
            ).toDateString()}`}
          </IonListHeader>
          {legalDocumentSet.document.list.map(
            (document: any, index: number) => {
              let formattedName = document.filename
                .split(".")
                .slice(0, -1)
                .join(".");
              return (
                <IonItem key={index} className="ion-no-padding">
                  <IonButtons slot="start">
                    <IonButton onClick={() => handleClick(document)}>
                      <IonIcon icon={download} />
                    </IonButton>
                  </IonButtons>
                  <IonLabel className="ion-text-wrap">{formattedName}</IonLabel>
                </IonItem>
              );
            }
          )}
        </IonList>
      ))}
    </>
  );
}
