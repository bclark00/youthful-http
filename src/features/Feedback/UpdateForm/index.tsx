import {
  IonButton,
  IonCol,
  IonInput,
  IonItem,
  IonLabel,
  IonLoading,
  IonRow,
  IonToast,
  IonToolbar
} from "@ionic/react";
import { Formik } from "formik";
import React, { useState } from "react";
import PublicTrueVaultAPI from "../../../api/Public/PublicTrueVaultAPI";
import Store from "../../../store";

const hashParams = window.location.hash.substr(1).split("&");
const parsedParams: params = {};
for (var i = 0; i < hashParams.length; i++) {
  const keyValue = hashParams[i].split("=");
  const key = decodeURIComponent(keyValue[0]);
  const value = decodeURIComponent(keyValue[1]);
  //@ts-ignore
  parsedParams[key] = value;
}

export function UpdateForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);
  const {
    attributes,
    updateAttributes,
    setUpdating,
    updating
  } = Store.useContainer();

  return (
    <Formik
      initialValues={{ password: "" }}
      onSubmit={async (values, { setSubmitting }) => {
        let { status } = await PublicTrueVaultAPI.resetUpdatePassword(
          values.password,
          parsedParams.httpAuth,
          parsedParams.userId
        );
        switch (status) {
          case "succeeded":
            setMessage("That worked, try signing in");
            setStatus(true);
            setSubmitting(false);
            break;
          case "failed":
            setMessage("For some reason that didn't work, please try again");
            setStatus(true);
            setSubmitting(false);
            break;
          case "disconnected":
            setMessage("Disconnected, our servers might be down");
            setStatus(true);
            setSubmitting(false);
            break;
          default:
            setMessage("ERROR, please report");
            setStatus(true);
            setSubmitting(false);
            throw new Error("hmmm... that didn't work");
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
          <IonToast color="secondary" isOpen={status} message={message} />
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput
              required
              type="password"
              onIonChange={(e: any) => (values.password = e.target.value)}
              onBlur={handleBlur}
              value={values.password}
            />
          </IonItem>
          <IonToolbar color="white">
            <IonCol className="ion-align-items-center ion-justify-content-end">
              <IonRow className=" ion-justify-content-end ">
                <IonButton type="submit" shape="round" disabled={isSubmitting}>
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

type params = {
  httpAuth?: any;
  userId?: any;
};
