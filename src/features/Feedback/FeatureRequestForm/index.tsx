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
  const { modal } = Store.useContainer();

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
        await PublicTrueVaultAPI.resetRequestPassword(values.email);
        modal.setAuthenticationOpen(false);
        setTimeout(() => {
          setSubmitting(false);
        }, 1500);
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
              name="email"
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
