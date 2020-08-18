import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon
} from "@ionic/react";
import { camera, settings, woman } from "ionicons/icons";
import React from "react";
import purpleBackground from "../../../assets/images/purple_background.svg";
import Store from "../../../store";

export default function() {
  const { attributes, modal } = Store.useContainer();
  return (
    <IonCard color="white">
      <img src={purpleBackground} alt="card background" />
      <IonCardHeader>
        <IonFab edge horizontal="center" vertical="top">
          <IonFabButton color="primary">
            <IonIcon size="large" icon={woman} />
          </IonFabButton>

          <IonFabList side="start">
            <IonFabButton
              onClick={() => modal.setProfilePictureModalopen(true)}
              color="tertiary"
            >
              <IonIcon icon={camera} />
            </IonFabButton>
          </IonFabList>
          <IonFabList side="end">
            <IonFabButton routerLink="/profile/account" color="tertiary">
              <IonIcon icon={settings} />
            </IonFabButton>
          </IonFabList>
        </IonFab>
        <IonCardSubtitle>Hey {attributes?.profile?.first_name}</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
}
