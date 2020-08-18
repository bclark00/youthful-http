import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRange,
  IonRow,
  IonSegmentButton,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { checkmarkCircle, fingerPrint, more } from "ionicons/icons";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { abnormalFlagFormatter } from "..";
import Layout from "../../../components/Layout";
import Store from "../../../store";

export const ResultDetailsPage = (props: any) => {
  let history = useHistory();
  const { attributes } = Store.useContainer();
  let result = attributes?.results[0]?.order?.results?.analytes?.find(
    (result: any) => result.result_lab_code === props.match.params.id
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/results/" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Layout.Column>
          {result ? (
            <DetailsCard {...result} />
          ) : (
            () => history.push("/results")
          )}
        </Layout.Column>
      </IonContent>
    </IonPage>
  );
};

function DetailsCard(result: any) {
  return (
    <IonCard>
      <IonToolbar color={abnormalFlagFormatter(result.abnormal_flag)?.color}>
        <IonTitle>
          {abnormalFlagFormatter(result.abnormal_flag)?.label}
        </IonTitle>
      </IonToolbar>
      <IonCardHeader>
        <IonCardTitle>
          {result.result_lab_name.length > 4
            ? result.result_lab_name
                .toLowerCase()
                .split(" ")
                .map((s: string) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(" ")
            : result.result_lab_name}
        </IonCardTitle>
        <IonRow className="ion-justify-content-start ion-align-items-center ion-padding-vertical">
          <IonChip
            className="ion-no-margin"
            color={abnormalFlagFormatter(result.abnormal_flag)?.color}
            style={{ fontWeight: 700 }}
          >
            {`${result?.value} ${result?.value_unit ? result?.value_unit : ""}`}
          </IonChip>
        </IonRow>
        <IonRow>
          <IonLabel className="ion-padding-bottom">{result?.subtitle}</IonLabel>
        </IonRow>
      </IonCardHeader>
      {result?.value_unit && (
        <>
          <IonRange
            disabled
            className="ion-padding-horizontal ion-margin-horizontal"
            min={parseFloat(result?.lab_reference_range.split("-")[0]) * 10}
            max={parseFloat(result?.lab_reference_range.split("-")[1]) * 10}
            value={parseFloat(result?.value) * 10}
          ></IonRange>
          <IonRow className="ion-justify-content-between ion-padding">
            <IonLabel>low</IonLabel>
            <IonLabel>normal</IonLabel>
            <IonLabel>high</IonLabel>
          </IonRow>
        </>
      )}
      <IonCardContent>
        <p>{result?.short}</p>
        <br />
        <p>{result?.long}</p>
      </IonCardContent>
      <IonFooter>
        <IonToolbar color="white">
          <IonButtons slot="secondary">
            <IonButton>
              <IonIcon slot="icon-only" icon={fingerPrint}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Footer</IonTitle>
          <IonButtons slot="primary">
            <IonButton>
              <IonIcon slot="icon-only" icon={more}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonCard>
  );
}

function SegnmentTest() {
  let [color, setColor] = useState();

  return (
    <IonSegmentButton color="warning" value="NORMAL">
      <IonIcon icon={checkmarkCircle} />
      <IonLabel>Normal</IonLabel>
    </IonSegmentButton>
  );
}
