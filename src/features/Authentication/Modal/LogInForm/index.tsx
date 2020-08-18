/* eslint-disable */
import {
  IonButton,
  IonButtons,
  IonCol,
  IonInput,
  IonItem,
  IonLabel,
  IonLoading,
  IonRow,
  IonToast,
  IonToolbar
} from "@ionic/react";
import { Form, Formik } from "formik";
import React from "react";
import PublicTrueVaultAPI from "../../../../api/Public/PublicTrueVaultAPI";
import Store from "../../../../store";

export default function(props: any) {
  const {
    auth,
    modal,
    updateAttributes,
    calculateConditionals,
    loading
  } = Store.useContainer();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      // validate={values => {
      //   const errors: any = {};
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
        loading.setPending(true);

        const response = await PublicTrueVaultAPI.logIn(
          values.email,
          values.password
        );
        switch (response.status) {
          case "succeeded":
            calculateConditionals(response.user.attributes);
            modal.setAuthenticationOpen(false);
            auth.setLogInError("");
            auth.setAccessToken(response.access_token);
            localStorage.setItem("access_token", response.access_token);
            auth.setUsername(response.user.username);
            auth.setUserId(response.user.user_id);
            updateAttributes(
              (draft: any) => (draft = response.user.attributes)
            );
            auth.logIn();
            loading.setPending(false);
            return;
          case "failed":
            auth.setLogInError("Either your email or password was incorrect");
            loading.setPending(false);
          default:
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
        <>
          <IonLoading isOpen={isSubmitting} />
          <IonToast
            isOpen={auth.logInError ? true : false}
            message={auth.logInError}
            color="secondary"
          />
          <Form onSubmit={handleSubmit} autoComplete="off">
            <IonItem className="ion-margin-start ion-margin-end">
              <IonLabel position="floating">Email</IonLabel>
              <IonInput
                required
                autocomplete="off"
                type="email"
                name="emailNotASearchField"
                onIonChange={(e: any) => (values.email = e.target.value)}
                onIonBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
            </IonItem>
            <IonItem className="ion-margin-start ion-margin-end">
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                required
                inputMode="text"
                autocomplete="off"
                minlength={8}
                type="password"
                name="NotASearchField"
                onIonChange={(e: any) => (values.password = e.target.value)}
                onIonBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
            </IonItem>
            <IonToolbar color="white">
              <IonCol className="ion-align-items-center ion-justify-content-between">
                <IonRow className="ion-justify-content-between ion-margin-start ion-margin-end">
                  <IonButtons>
                    <IonButton
                      onClick={() => modal.setPasswordResetRequestOpen(true)}
                    >
                      Forgot password
                    </IonButton>
                  </IonButtons>
                  <IonButton
                    shape="round"
                    style={{ marginRight: 12 }}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Log in
                  </IonButton>
                </IonRow>
              </IonCol>
            </IonToolbar>
          </Form>
        </>
      )}
    </Formik>
  );
}
