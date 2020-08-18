import {
  IonButton,
  IonCol,
  IonInput,
  IonItem,
  IonLabel,
  IonLoading,
  IonRow,
  IonToolbar
} from "@ionic/react";
import { Formik } from "formik";
import React from "react";
import PublicTrueVaultAPI from "../../../api/Public/PublicTrueVaultAPI";
import Store from "../../../store";

export function RequestForm() {
  const { loading } = Store.useContainer();

  return (
    <Formik
      initialValues={{ email: "" }}
      // validate={values => {
      //   const errors = { email: "" };
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
        let { status } = await PublicTrueVaultAPI.resetRequestPassword(
          values.email
        );
        switch (status) {
          case "succeeded":
            loading.setUpdateMessage("That worked.");
            return;
          case "failed":
            loading.setUpdateMessage("That didn't work, try again.");
            return;
        }
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
          <IonLoading isOpen={isSubmitting} />
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              required
              type="email"
              autocomplete="off"
              autoCapitalize="off"
              onIonChange={(e: any) => (values.email = e.target.value)}
              onBlur={handleBlur}
              value={values.email}
            />
          </IonItem>
          {errors.email && touched.email && errors.email}
          <IonToolbar color="white">
            <IonCol className="ion-align-items-center ion-justify-content-end">
              <IonRow className=" ion-justify-content-end ">
                <IonButton type="submit" shape="round" disabled={isSubmitting}>
                  Reset
                </IonButton>
              </IonRow>
            </IonCol>
          </IonToolbar>
        </form>
      )}
    </Formik>
  );
}
