import {
  IonBadge,
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
  IonRow
} from "@ionic/react";
import { document } from "ionicons/icons";
import React from "react";
import Lab from "../../../api/Lab";
import Store from "../../../store";
import Downloader from "../../Requisition/Downloader";

export default function() {
  const { device, auth, loading, pwn_orders } = Store.useContainer();

  return (
    <IonCard color="tertiary">
      <IonCardHeader>
        <IonCardSubtitle>At the lab?</IonCardSubtitle>
        <IonCardTitle>Check in</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {/*
        <IonCol>
          <IonItem color="tertiary">
            <IonIcon slot="start" icon={document} />
            <IonLabel>Your requisition</IonLabel>
            <IonButtons slot="end">
              <IonButton>
                <strong>View</strong>
              </IonButton>
            </IonButtons>
          </IonItem>
          <IonCardContent>
            Your details should already be in the system. You can view your
            requisition, above.
          </IonCardContent>
        </IonCol>
      */}

        <IonItem color="itinerary">
          <IonBadge color="tertiary" slot="start">
            1.
          </IonBadge>
          <IonLabel className="ion-text-wrap">
            Check in at the front desk
          </IonLabel>
        </IonItem>
        <IonItem color="tertiary">
          <IonBadge color="tertiary" slot="start">
            2.
          </IonBadge>
          <IonLabel className="ion-text-wrap">
            Let them know that you've prepaid
          </IonLabel>
        </IonItem>
        <IonItem color="tertiary">
          <IonBadge color="tertiary" slot="start">
            3.
          </IonBadge>
          <IonLabel className="ion-text-wrap">
            Show them your requisition
          </IonLabel>
        </IonItem>
        <IonItem color="tertiary">
          <IonIcon slot="start" icon={document} />
          <IonLabel>Your requisition</IonLabel>
          <IonButtons slot="end">
            <IonButton
              onClick={async () => {
                loading.setPending(true);

                let blob = await Lab.readRequisition(
                  auth.accessToken,
                  pwn_orders[0].pwn_order_id
                );
                loading.setPending(false);
                if (blob.pdf === undefined) {
                  loading.setUpdateMessage("Error");
                } else {
                  await Downloader(blob.pdf);
                }
              }}
            >
              <strong>View</strong>
            </IonButton>
          </IonButtons>
        </IonItem>
        <IonCardContent>
          With PreConception, you don't need your insurance card
        </IonCardContent>

        <IonRow>
          <IonItem color="tertiary">
            <IonLabel className="ion-text-wrap" style={{ fontWeight: 700 }}>
              Remember to let us know once your visit is complete
            </IonLabel>
          </IonItem>
        </IonRow>
      </IonCardContent>
    </IonCard>
  );
}
