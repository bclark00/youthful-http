import { CameraResultType } from "@capacitor/core";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonLabel,
  IonModal,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { availableFeatures, useCamera } from "@ionic/react-hooks/camera";
import React, { useCallback } from "react";
import Layout from "../../../../components/Layout";
import Store from "../../../../store";

export function ProfilePictureModal() {
  const { modal, auth, loading } = Store.useContainer();

  const { photo, getPhoto } = useCamera();
  const triggerCamera = useCallback(async () => {
    try {
      getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.DataUrl
      });
    } catch (error) {
      console.log(error);
    }
  }, [getPhoto]);

  return (
    <IonModal
      isOpen={modal.profilePictureModalopen}
      onDidDismiss={() => modal.setProfilePictureModalopen(false)}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile Picture</IonTitle>
          <IonButtons slot="primary">
            <IonButton onClick={() => modal.setProfilePictureModalopen(false)}>
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Layout.Column>
          <Layout.Block>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Take a picture</IonCardTitle>
                <IonLabel>Let's personalize your profile just a bit</IonLabel>
              </IonCardHeader>
              <IonCardContent>
                {availableFeatures.getPhoto && (
                  <div>{photo && <img alt="" src={photo.dataUrl} />}</div>
                )}
              </IonCardContent>
              <IonToolbar color="white">
                {availableFeatures.getPhoto ? (
                  <IonButtons slot="end">
                    <IonButton onClick={triggerCamera}>
                      {photo ? "Retake photo" : "Take photo"}
                    </IonButton>
                    {photo && <IonButton>Save</IonButton>}
                  </IonButtons>
                ) : (
                  <IonLabel>
                    It looks like Camera is not available on this platform
                  </IonLabel>
                )}
              </IonToolbar>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="white">
              <IonCardHeader>
                <IonCardTitle>Your information</IonCardTitle>
                <IonLabel>All fields are required</IonLabel>
              </IonCardHeader>
            </IonCard>
          </Layout.Block>
        </Layout.Column>
      </IonContent>
    </IonModal>
  );
}
