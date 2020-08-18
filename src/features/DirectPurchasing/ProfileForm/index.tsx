import {
  IonButton,
  IonButtons,
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
import {
  ethnicitesList,
  racesList,
  statesList
} from "../../Profile/InformationCard/FormOptions";

export function DirectPurchaseForm() {
  const {
    attributes,
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
      onSubmit={(values, { setSubmitting }) => {
        setUpdating(true);
        updateAttributes((draft: any) => {
          //@ts-ignore
          draft.profile = { ...values };
        });
        setTimeout(() => {
          setSubmitting(false);
          setUpdating(false);
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
                autoCorrect="off"
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
                autoCorrect="off"
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.phone = e.target.value)}
                type="tel"
                value={values.phone}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput
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
            <IonItem>
              <IonLabel position="stacked">Address</IonLabel>
              <IonInput
                placeholder="Line 1"
                type="text"
                autoCorrect="off"
                autoCapitalize="on"
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.line = e.target.value)}
                value={values.line}
              />
            </IonItem>
            <IonItem>
              <IonInput
                placeholder="Line 2"
                type="text"
                autoCorrect="off"
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.line2 = e.target.value)}
                value={values.line2}
              />
            </IonItem>
            <IonItem>
              <IonInput
                placeholder="City"
                type="text"
                autoCorrect="off"
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
                placeholder="Zip Code"
                type="tel"
                autoCorrect="off"
                name="zip code"
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.zip_code = e.target.value)}
                value={values.zip_code}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Ethnicity</IonLabel>
              <IonSelect
                className="ion-no-padding ion-padding-end"
                name="state"
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
                name="state"
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
                placeholder="You can enter any medical information or personal history"
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
                <IonButtons>
                  <IonButton>Typos?</IonButton>
                </IonButtons>
                <IonButton type="submit" shape="round" disabled={updating}>
                  Update
                </IonButton>
              </IonRow>
            </IonCol>
          </IonToolbar>
        </form>
      )}
    </Formik>
  );
}
