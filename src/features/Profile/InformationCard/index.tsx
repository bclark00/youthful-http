import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonDatetime,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonToolbar
} from "@ionic/react";
import { Formik } from "formik";
import React from "react";
import Store from "../../../store";
import { TUserProfile } from "../../Attributes/Store/types";
import { ethnicitesList, racesList, statesList } from "./FormOptions";

const customAlertOptions = {
  header: "State",
  message: "Our tests are only available in select states",
  translucent: true
};

export default function InformationCard() {
  return (
    <IonCard color="white">
      <IonCardHeader>
        <IonCardSubtitle>Fill out your profile</IonCardSubtitle>
        <IonCardTitle>Your information</IonCardTitle>
      </IonCardHeader>
      <SignUpForm />
    </IonCard>
  );
}

function SignUpForm() {
  const {
    editable,
    device,
    profile,
    updateAttributes,
    setUpdating,
    updating
  } = Store.useContainer();

  let initialValues: Partial<TUserProfile> = { ...profile };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      // validate={values => {
      //   const errors = { email: "", password: "" };
      //   if (!values.email) {
      //     errors.email = "Required";
      //   } else if (
      //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      //   ) {
      //     errors.email = "Invalid email address";
      //   }
      //   return errors;
      // }}

      onSubmit={async (values, { setSubmitting }) => {
        setUpdating(true);
        updateAttributes((draft: any) => {
          //@ts-ignore
          draft.profile = { ...values };
        });
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
                name="notASearchField"
                autoCorrect="off"
                autocapitalize="on"
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
                name="notASearchField"
                autoCorrect="off"
                autocapitalize="on"
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.last_name = e.target.value)}
                type="text"
                value={values.last_name}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Phone Number</IonLabel>
              <IonInput
                name="notASearchField"
                autoCorrect="off"
                autoCapitalize="on"
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.phone = e.target.value)}
                type="tel"
                value={values.phone}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
                name="notASearchField"
                autoCorrect="off"
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.email = e.target.value)}
                type="email"
                value={values.email}
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
            <IonItem>
              <IonLabel position="stacked">Address</IonLabel>

              <IonInput
                name="notASearchField"
                type="text"
                autoCorrect="off"
                autoCapitalize="on"
                placeholder="Line 1"
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.line = e.target.value)}
                value={values.line}
              />
            </IonItem>
            <IonItem>
              <IonInput
                name="notASearchField"
                type="text"
                autocorrect="off"
                autocapitalize="on"
                placeholder="Line 2"
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.line2 = e.target.value)}
                value={values.line2}
              />
            </IonItem>
            <IonItem>
              <IonInput
                name="notASearchField"
                type="text"
                autocorrect="off"
                autocomplete="off"
                autocapitalize="on"
                placeholder="City"
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.city = e.target.value)}
                value={values.city}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">State</IonLabel>
              <IonSelect
                className="ion-no-padding ion-padding-end"
                placeholder="Choose"
                value={values.state}
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.state = e.target.value)}
                interfaceOptions={customAlertOptions}
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
              <IonInput
                name="notASearchField"
                type="tel"
                autoCorrect="off"
                autocapitalize="on"
                placeholder="ZIP Code"
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.zip_code = e.target.value)}
                value={values.zip_code}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Ethnicity</IonLabel>
              <IonSelect
                className="ion-no-padding ion-padding-end"
                placeholder="optional"
                value={values.ethnicity}
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.ethnicity = e.target.value)}
              >
                {ethnicitesList.map((object, i) => {
                  return (
                    <IonSelectOption
                      key={object.ethnicity}
                      value={object.ethnicity}
                      className="ion-text-wrap"
                    >
                      {object.ethnicity}
                    </IonSelectOption>
                  );
                })}
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Race</IonLabel>
              <IonSelect
                className="ion-no-padding ion-padding-end"
                placeholder="optional"
                value={values.race}
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.race = e.target.value)}
              >
                {racesList.map((object, i) => {
                  return (
                    <IonSelectOption
                      key={object.race}
                      value={object.race}
                      className="ion-text-wrap"
                    >
                      {object.race}
                    </IonSelectOption>
                  );
                })}
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Notes</IonLabel>
              <IonTextarea
                placeholder="You can enter any medical information or personal history (optional)"
                autoCorrect="off"
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.history = e.target.value)}
                value={values.history}
              ></IonTextarea>
            </IonItem>
          </IonList>
          {/*
              <IonItem>
                <IonLabel position="stacked">Username</IonLabel>
                <IonInput disabled value="sean@me.com" type="text"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Password</IonLabel>
                <IonInput
                  value="Tr3ssi@h"
                  type="password"
                  name="password"
                  onIonChange={handleChange}
                  onIonBlur={handleBlur}
                  //@ts-ignore
                  value={values.password}
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="stacked">Confirm Passowrd</IonLabel>
                <IonInput
                  value="Tr3ssi@h"
                  type="password"
                  name="password confirm"
                  onIonChange={handleChange}
                  onIonBlur={handleBlur}
                  //@ts-ignore
                  value={values.password_confirm}
                ></IonInput>
              </IonItem>
            */}
          <IonToolbar color="white">
            <IonCol className="ion-align-items-center ion-justify-content-between">
              <IonRow className=" ion-justify-content-between ion-margin-start ion-margin-end">
                <IonCol className="ion-align-items-center">
                  <IonButtons>
                    {device.isIos ? (
                      <IonButton
                        onClick={() => {
                          window.location.href =
                            "mailto:support@preconceptiontest.com?subject=Issue%20at%20the%20Lab&body=Please%20include%20your:%20Last%20Name,%20Date%20of%20Birth,%20and%20your%20ZIP%20code%20for%20verification.";
                          return;
                        }}
                      >
                        Typos?
                      </IonButton>
                    ) : (
                      <IonButton
                        target="_blank"
                        rel="noopener noreferrer"
                        href="mailto:support@preconceptiontest.com?subject=Issue%20at%20the%20Lab&body=Please%20include%20your:%20Last%20Name,%20Date%20of%20Birth,%20and%20your%20ZIP%20code%20for%20verification."
                      >
                        Typos?
                      </IonButton>
                    )}
                  </IonButtons>
                </IonCol>
                <IonCol className="ion-align-items-center">
                  <IonRow className="ion-justify-content-end">
                    {editable ? (
                      <IonButton
                        type="submit"
                        shape="round"
                        disabled={updating}
                      >
                        Update
                      </IonButton>
                    ) : (
                      <IonLabel className="ion-text-wrap">
                        Your information can no longer be changed
                      </IonLabel>
                    )}
                  </IonRow>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonToolbar>
        </form>
      )}
    </Formik>
  );
}
