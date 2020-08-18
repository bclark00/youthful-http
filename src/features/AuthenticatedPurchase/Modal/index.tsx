import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { Formik } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../../components/Layout";
import Store from "../../../store";
import { TUserProfile } from "../../Attributes/Store/types";
import { statesList } from "../../Profile/InformationCard/FormOptions";
import { plusRedirect } from "../../StripeRedirect/OneTest";

const customAlertOptions = {
  header: "State",
  message: "Our tests are only available in select states",
  translucent: true
};

export function AuthenticatedPurchaseModal() {
  const { modal, auth, loading } = Store.useContainer();
  return (
    <IonModal
      isOpen={modal.authenticatedOrderModalOpen}
      onDidDismiss={() => modal.setauthenticatedOrderModalOpen(false)}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cart</IonTitle>
          <IonButtons slot="primary">
            <IonButton
              onClick={() => modal.setauthenticatedOrderModalOpen(false)}
            >
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Layout.Column>
          <Layout.Block>
            <IonCard color="primary">
              <IonCardHeader>
                <IonCardTitle style={{ fontWeight: 700 }}>
                  Essential PreConception Package
                </IonCardTitle>
                <IonLabel>The test package for every woman</IonLabel>
              </IonCardHeader>
              <IonCardContent>
                <IonCardTitle
                  className="ion-padding-start"
                  style={{ color: "#bf9ed6", fontWeight: 700 }}
                >
                  Includes
                </IonCardTitle>
                <IonItem color="primary">
                  <IonLabel className="ion-text-wrap">
                    The tests recommended by the American College of
                    Obstetricians and Gynecologists (ACOG) and the Center for
                    Disease Control (CDC)
                  </IonLabel>
                </IonItem>
                <IonItem color="primary">
                  <IonLabel className="ion-text-wrap">
                    A physician-reviewed, digital report with easy-to-understand
                    explanations of your results.
                  </IonLabel>
                </IonItem>
                <IonItem color="primary">
                  <IonLabel className="ion-text-wrap">
                    One-on-one educational call with a professional
                    preconception expert.
                  </IonLabel>
                </IonItem>
                <IonItem color="primary">
                  <IonLabel className="ion-text-wrap">
                    Lifetime access to PreConception's education center.
                  </IonLabel>
                </IonItem>
                <IonCardTitle
                  className="ion-padding-vertical ion-padding-start"
                  style={{ fontWeight: 700 }}
                >
                  $299
                </IonCardTitle>
              </IonCardContent>
            </IonCard>
          </Layout.Block>
          <Layout.Block>
            <IonCard color="white">
              <IonCardHeader>
                <IonCardTitle>Your information</IonCardTitle>
                <IonLabel>All fields are required</IonLabel>
              </IonCardHeader>
              <OrderForm />
            </IonCard>
          </Layout.Block>
        </Layout.Column>
      </IonContent>
    </IonModal>
  );
}

function OrderForm() {
  const {
    auth,
    profile,
    updateAttributes,
    setUpdating,
    loading
  } = Store.useContainer();

  let history = useHistory();

  const [optedOut, setOptedOut] = useState(false);

  const [sex, setSex] = useState("Female");

  let initialValues: Partial<TUserProfile> = { ...profile };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values, { setSubmitting }) => {
        loading.setPending(true);
        setUpdating(true);
        updateAttributes((draft: any) => {
          //@ts-ignore
          draft.profile = { ...values };
        });
        let access_token = await localStorage.getItem("access_token");
        setTimeout(async () => {
          if (!access_token) {
            history.push("/");
            window.location.reload(true);
          } else await plusRedirect(auth.userId, optedOut);
        }, 1000);
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
        <form autoComplete="off" onSubmit={handleSubmit}>
          <IonList lines="full" class="ion-no-margin ion-no-padding">
            <IonItem>
              <IonLabel position="stacked">First Name</IonLabel>
              <IonInput
                required
                autoCorrect="off"
                autocomplete="off"
                autoCapitalize="on"
                onIonBlur={handleBlur}
                //@ts-ignore
                onIonChange={e => (values.first_name = e.target.value)}
                type="text"
                value={values.first_name}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Last Name</IonLabel>
              <IonInput
                required
                autocomplete="off"
                autoCorrect="off"
                autoCapitalize="on"
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.last_name = e.target.value)}
                type="text"
                value={values.last_name}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Phone Number</IonLabel>
              <IonInput
                required
                autocomplete="off"
                autoCorrect="off"
                name="phone"
                onIonBlur={handleBlur}
                onIonChange={handleChange}
                type="tel"
                value={values.phone}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                required
                autocomplete="off"
                autoCorrect="off"
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.email = e.target.value)}
                type="text"
                value={values.email}
                autoCapitalize="off"
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Birthday</IonLabel>
              <IonDatetime
                max={
                  new Date(Date.now() - 567993600000)
                    .toISOString()
                    .split("T")[0]
                }
                placeholder="Select Date"
                value={values.dob}
                onIonBlur={handleBlur}
                onIonChange={(e: any) =>
                  (values.dob = new Date(e.target.value)
                    .toISOString()
                    .split("T")[0])
                }
              />
            </IonItem>
            {errors.dob && touched.dob && errors.dob}
            <IonItem>
              <IonLabel position="floating">State</IonLabel>
              <IonSelect
                interfaceOptions={customAlertOptions}
                className="ion-no-padding ion-padding-end"
                placeholder="Choose"
                value={values.state}
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.state = e.target.value)}
              >
                {statesList.map((object, i) => {
                  return (
                    <IonSelectOption key={object.state} value={object.state}>
                      {object.state}
                    </IonSelectOption>
                  );
                })}
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Sex</IonLabel>
              <IonSelect
                className="ion-no-padding ion-padding-end"
                placeholder="Choose"
                value={sex}
                onIonBlur={handleBlur}
                onIonChange={(e: any) => setSex(e.target.value)}
              >
                <IonSelectOption value={"Male"}>Male</IonSelectOption>
                <IonSelectOption value={"Female"}>Female</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
          <IonToolbar color="white">
            <IonCol className="ion-align-items-center ion-justify-content-between">
              <IonRow className="ion-justify-content-between ion-margin-start ion-margin-end">
                <div>
                  <IonLabel style={{ fontWeight: 700, color: "black" }}>
                    Options
                  </IonLabel>
                  <IonSelect
                    value={optedOut}
                    className="ion-no-padding ion-padding-end"
                    onIonChange={(e: any) => setOptedOut(e.target.value)}
                  >
                    <IonSelectOption value={false}>Complete</IonSelectOption>
                    <IonSelectOption value={true}>Non-HIV</IonSelectOption>
                  </IonSelect>
                </div>
                <IonButton
                  type="submit"
                  shape="round"
                  disabled={isSubmitting || sex === "Male"}
                >
                  Checkout
                </IonButton>
              </IonRow>
              <IonRow className="ion-justify-content-center ion-padding-top">
                <IonLabel>We've partnered with Stripe for payments.</IonLabel>
              </IonRow>
              <IonRow>
                {sex === "Male" && (
                  <IonCard
                    className="ion-no-margin ion-margin-horizontal ion-margin-top"
                    color="warning"
                  >
                    <IonCardHeader>
                      <IonCardTitle>
                        We only offer tests for the female sex
                      </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      We cannot offer preconception testing to those not of the
                      female sex.{" "}
                      <strong>
                        You cannot purchase a preconception test at this time.
                      </strong>
                    </IonCardContent>
                  </IonCard>
                )}
                {optedOut && (
                  <IonCard
                    className="ion-no-margin ion-margin-horizontal ion-margin-top"
                    color="warning"
                  >
                    <IonCardHeader>
                      <IonCardTitle>
                        I am opting out of HIV Testing
                      </IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      I understand that HIV testing is an important part of
                      preconception testing. I understand that by declining HIV
                      testing I will not know if I am infected with HIV which
                      can result in an increased risk to myself and others
                      should I have HIV and become pregnant.
                    </IonCardContent>
                  </IonCard>
                )}
              </IonRow>
            </IonCol>
          </IonToolbar>
        </form>
      )}
    </Formik>
  );
}
