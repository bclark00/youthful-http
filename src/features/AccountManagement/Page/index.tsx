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
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { Formik } from "formik";
import { arrowBack } from "ionicons/icons";
import React from "react";
import Layout from "../../../components/Layout";

export function AccountManagementPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerLink="/profile" routerDirection="back">
              <IonIcon icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Layout.Grid>
          {/*
          
            <Layout.Block>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Update your username</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <Formik
                    initialValues={{ email: "" }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting
                 
                    }) => (
                      <form onSubmit={handleSubmit}>
                        <IonItem>
                          <IonLabel position="floating">Username</IonLabel>
                          <IonInput
                            required
                            type="email"
                            autocomplete="off"
                            onIonChange={(e: any) =>
                              (values.email = e.target.value)
                            }
                            onBlur={handleBlur}
                            value={values.email}
                          />
                        </IonItem>
                        <IonToolbar color="white">
                          <IonCol className="ion-align-items-center ion-justify-content-end">
                            <IonRow className=" ion-justify-content-end ">
                              <IonButton
                                type="submit"
                                shape="round"
                                disabled={isSubmitting}
                              >
                                Update
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
          */}
          <Layout.Block>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Update your password</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <Formik
                  initialValues={{ password: "" }}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <IonItem>
                        <IonLabel position="floating">Password</IonLabel>
                        <IonInput
                          required
                          type="password"
                          onIonChange={(e: any) =>
                            (values.password = e.target.value)
                          }
                          onBlur={handleBlur}
                          value={values.password}
                        />
                      </IonItem>

                      <IonToolbar color="white">
                        <IonCol className="ion-align-items-center ion-justify-content-end">
                          <IonRow className=" ion-justify-content-end ">
                            <IonButton
                              type="submit"
                              shape="round"
                              disabled={isSubmitting}
                            >
                              Update
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
        </Layout.Grid>
      </IonContent>
    </IonPage>
  );
}
