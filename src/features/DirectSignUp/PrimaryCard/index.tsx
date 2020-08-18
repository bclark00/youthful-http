import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonInput,
  IonItem,
  IonLabel,
  IonLoading,
  IonRow,
  IonToast
} from "@ionic/react";
import { Formik } from "formik";
import React from "react";
import PublicTrueVaultAPI from "../../../api/Public/PublicTrueVaultAPI";
//@ts-ignore
import privacyPDF from "../../../assets/docs/privacy_policy.pdf";
//@ts-ignore
import termsPDF from "../../../assets/docs/terms_of_service.pdf";
import Store from "../../../store";

export function PrimaryCard() {
  return (
    <IonCard color="white">
      <IonCardHeader>
        <IonCardSubtitle>Get Started</IonCardSubtitle>
        <IonCardTitle style={{ color: "#003366", fontWeight: 700 }}>
          Welcome to PreConception
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent style={{ paddingTop: 0 }}>
        <SignUpForm />
      </IonCardContent>
    </IonCard>
  );
}

function SignUpForm() {
  const { auth, initialize } = Store.useContainer();
  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        email: "",
        password: ""
      }}
      onSubmit={async (values, { setSubmitting }) => {
        let { email, password, ...profile } = values;
        let {
          user,
          status,
          access_token
        } = await PublicTrueVaultAPI.createUser(email, password, {
          profile: {
            email,
            ...profile
          }
        });
        switch (status) {
          case "succeeded":
            auth.setAccessToken(access_token);
            window.location.reload(true);
            return;
          case "failed":
            auth.setLogInError("An account with that email already exists.");
            return;
          case "disconnected":
            auth.setLogInError(
              "Connection error. Please reload and try again."
            );
            setSubmitting(false);
            return;
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
          <form onSubmit={handleSubmit}>
            <IonItem>
              <IonLabel position="floating">First Name</IonLabel>
              <IonInput
                required
                autoCorrect="off"
                autocapitalize="on"
                autocomplete="off"
                name="notASearchField"
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.first_name = e.target.value)}
                type="text"
                value={values.first_name}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Last Name</IonLabel>
              <IonInput
                name="notASearchField"
                required
                autocomplete="off"
                autocapitalize="on"
                autoCorrect="off"
                onIonBlur={handleBlur}
                onIonChange={(e: any) => (values.last_name = e.target.value)}
                type="text"
                value={values.last_name}
              />
            </IonItem>
            {/*
              
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
                    onChange={(e: any) =>
                      (values.dob = new Date(e.target.value)
                        .toISOString()
                        .split("T")[0])
                    }
                    onIonChange={(e: any) =>
                      (values.dob = new Date(e.target.value)
                        .toISOString()
                        .split("T")[0])
                    }
                  />
                </IonItem>
                <IonLabel color="secondary" className="ion-padding-start">
                  {errors.dob && touched.dob && errors.dob}
                </IonLabel>
                <IonItem>
                  <IonLabel position="floating">State</IonLabel>
                  <IonSelect
                    className="ion-no-padding ion-padding-end"
                    placeholder="Choose"
                    name="state"
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
              */}

            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput
                required
                autoCorrect="off"
                autocomplete="off"
                type="email"
                name="emailNotASearchField"
                onIonChange={(e: any) => (values.email = e.target.value)}
                onIonBlur={handleBlur}
                value={values.email}
              />
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                required
                autocorrect="off"
                autocomplete="off"
                minlength={8}
                type="password"
                name="passwordNotASearchField"
                onIonChange={(e: any) => (values.password = e.target.value)}
                onIonBlur={handleBlur}
                value={values.password}
              />
            </IonItem>
            <IonCol className="ion-align-items-center ion-justify-content-between">
              <IonRow className=" ion-justify-content-start ion-align-items-center">
                <IonCol>
                  <IonButton
                    type="submit"
                    shape="round"
                    disabled={isSubmitting}
                  >
                    Sign up
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonLabel className="ion-text-wrap">
                    By signing up you agree to our{" "}
                    <a href={termsPDF} target="blank">
                      Terms of Service{" "}
                    </a>
                    and
                    <a href={privacyPDF} target="blank">
                      {" "}
                      Privacy Policy
                    </a>
                  </IonLabel>
                </IonCol>
              </IonRow>
            </IonCol>
          </form>
        </>
      )}
    </Formik>
  );
}
