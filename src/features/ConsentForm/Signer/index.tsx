import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonLoading,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { Formik } from "formik";
import { arrowBack } from "ionicons/icons";
import React from "react";
import Loadable from "react-loadable";
import Layout from "../../../components/Layout";
import { consentFiles } from "../files";
import { ConsentSigner } from "../Store";

const StandardRenderer = Loadable({
  loader: () => import("./Renderers/StandardRenderer"),
  loading: () => <IonLoading isOpen={true} />
});

const ResultTransmissionRenderer = Loadable({
  loader: () => import("./Renderers/ResultTransmissionRenderer"),
  loading: () => <IonLoading isOpen={true} />
});

const MDRenderer = Loadable({
  loader: () => import("./Renderers/MDRenderer"),
  loading: () => <IonLoading isOpen={true} />
});

const Viewer = Loadable({
  loader: () => import("./Viewer"),
  loading: () => <IonLoading isOpen={true} />
});

function UnWrappedConsentSignerPage(props: any) {
  let file = props.file;
  const consent = ConsentSigner.useContainer();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerLink="/consentform" routerDirection="back">
              <IonIcon icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonTitle>{file?.label}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Layout.Column>
          <Layout.Block>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>View and Sign</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <Viewer view_file={file?.view_file} />
                {file?.label === "Testing Consent Form" && <StandardRenderer />}
                {file?.label === "HIV Testing Form" && (
                  <ResultTransmissionRenderer />
                )}
                {file?.label === "Marlyand Consent Form" && <MDRenderer />}
                <Formik
                  initialValues={{ signature: "" }}
                  onSubmit={(values, { setSubmitting }) => {
                    consent.setSignature(values.signature);
                  }}
                >
                  {({
                    values,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit} autoComplete="off">
                      <IonItem>
                        <IonLabel position="floating">Signature</IonLabel>
                        <IonInput
                          autocomplete="off"
                          autocapitalize="on"
                          required
                          type="text"
                          onIonChange={(e: any) =>
                            (values.signature = e.target.value)
                          }
                          onBlur={handleBlur}
                          value={values.signature}
                        />
                      </IonItem>
                      <IonLabel className="ion-padding-start">
                        Please type your full name
                      </IonLabel>
                      <IonToolbar color="white">
                        <IonCol className="ion-align-items-center ion-justify-content-end">
                          <IonRow className="ion-justify-content-evenly">
                            <IonButton
                              type="submit"
                              shape="round"
                              disabled={
                                isSubmitting ||
                                consent.numPages !== consent.pageNumber
                              }
                            >
                              {isSubmitting ? "Signed" : "Sign"}
                            </IonButton>
                            <IonButton
                              routerLink="/consentform"
                              routerDirection="back"
                              shape="round"
                              disabled={!consent.rendered}
                            >
                              Next consent
                            </IonButton>
                          </IonRow>
                        </IonCol>
                      </IonToolbar>
                    </form>
                  )}
                </Formik>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
        </Layout.Column>
      </IonContent>
    </IonPage>
  );
}

export default function ConsentSignerPage(props: any) {
  let file = consentFiles.find(
    file => file.file_name === props.match.params.id
  );
  return (
    <ConsentSigner.Provider>
      <UnWrappedConsentSignerPage file={file} />
    </ConsentSigner.Provider>
  );
}
