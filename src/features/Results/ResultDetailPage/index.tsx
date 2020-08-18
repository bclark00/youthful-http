import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCheckbox,
  IonChip,
  IonContent,
  IonFooter,
  IonHeader,
  IonLabel,
  IonModal,
  IonPage,
  IonRange,
  IonRow,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../../../components/Layout";
import Store from "../../../store";
import { abnormalFlagFormatter } from "../ResultsList/index";
import { copy } from "./copy";

export const ResultDetailsPage = (props: any) => {
  const { results } = Store.useContainer();

  let result = results?.formattedResultsDocument?.document?.results?.analytes?.find(
    (result: any) => result.result_lab_code === props.match.params.id
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/results" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Layout.Column>
          {result ? <DetailsCard {...result} /> : <Redirect to="/results" />}
        </Layout.Column>
      </IonContent>
    </IonPage>
  );
};

function DetailsCard(result: any) {
  let resultCopy: any = copy.find(
    test => test.result_lab_code === result.result_lab_code
  );
  const { device, auth, results } = Store.useContainer();

  const [copyErrorOpen, setCopyErrorOpen] = useState(false);

  useEffect(() => {
    console.log(results.markedResultsForDiscussion);
  }, [results.markedResultsForDiscussion]);

  return (
    <IonCard>
      <IonToolbar color={abnormalFlagFormatter(result.abnormal_flag)?.color}>
        <IonTitle>
          {abnormalFlagFormatter(result.abnormal_flag)?.label}
        </IonTitle>
      </IonToolbar>
      <IonCardHeader>
        <IonCardTitle>{resultCopy?.result_lab_name}</IonCardTitle>
        <IonRow className="ion-justify-content-start ion-align-items-center ion-padding-vertical">
          <IonChip
            className="ion-no-margin"
            color={abnormalFlagFormatter(result.abnormal_flag)?.color}
            style={{ fontWeight: 700 }}
          >
            {isNaN(parseFloat(result.value))
              ? result.value
                  .toLowerCase()
                  .split("-")
                  .map(
                    (s: string) => s.charAt(0).toUpperCase() + s.substring(1)
                  )
                  .join("-")
                  .split(" ")
                  .map(
                    (s: string) => s.charAt(0).toUpperCase() + s.substring(1)
                  )
                  .join(" ")
                  .split(")")
                  .map(
                    (s: string, index: number) =>
                      s.charAt(0).toUpperCase() + s.substring(1)
                  )
                  .join(")")
              : result.value_unit === "index"
              ? indexResultValueLabelTransformer(result)
              : `${result?.value} ${
                  result?.value_unit ? result?.value_unit : ""
                }`}
            {/* {result?.value_unit === "index"
              ? indexResultValueLabelTransformer(result)
              : `${result?.value} ${
                  result?.value_unit ? result?.value_unit : ""
                }`} */}
          </IonChip>
          <IonChip color="success">
            check inferred value:
            {isNaN(parseFloat(result.value))
              ? result.value.toUpperCase()
              : result.value_unit === "index"
              ? indexResultValueLabelTransformer(result).toUpperCase()
              : resultValueTransformer(result).toUpperCase()}
          </IonChip>
        </IonRow>
        {result.subtitle && (
          <IonRow>
            <IonLabel className="ion-padding-bottom">
              {result.subtitle}
            </IonLabel>
          </IonRow>
        )}
      </IonCardHeader>
      {!result?.value_unit ? null : result?.value_unit === "index" ? null : (
        <>
          <IonRange
            disabled
            className="ion-padding-horizontal ion-margin-horizontal"
            min={parseFloat(result?.lab_reference_range.split("-")[0]) * 10}
            max={parseFloat(result?.lab_reference_range.split("-")[1]) * 10}
            value={parseFloat(result?.value) * 10}
          ></IonRange>
          <IonRow className="ion-justify-content-between ion-padding-horizontal">
            <IonLabel>low</IonLabel>
            <IonLabel>normal</IonLabel>
            <IonLabel>high</IonLabel>
          </IonRow>
          <IonRow className="ion-justify-content-between ion-padding-horizontal">
            <IonLabel>
              {`< ${parseFloat(result?.lab_reference_range.split("-")[0])}`}
            </IonLabel>

            <IonLabel>
              {`> ${parseFloat(result?.lab_reference_range.split("-")[1])}`}
            </IonLabel>
          </IonRow>
        </>
      )}
      <IonCardContent>
        {//@ts-ignore
        resultCopy?.[
          `${
            isNaN(parseFloat(result.value))
              ? result.value.toUpperCase()
              : result.value_unit === "index"
              ? indexResultValueLabelTransformer(result).toUpperCase()
              : resultValueTransformer(result).toUpperCase()
          }`
        ]?.pdf_copy.map((copy: any, index: number) => (
          <p key={index} className="ion-padding-top">
            {copy}
          </p>
        ))}
      </IonCardContent>
      <IonFooter>
        <IonToolbar color="white">
          {!device.isProduction && (
            <IonButtons slot="start">
              <IonCheckbox
                checked={results.markedResultsForDiscussion.has(
                  result.result_lab_code
                )}
                onIonChange={(e: any) =>
                  e.target.value
                    ? results.setMarkedResultsForDiscussion(
                        results.markedResultsForDiscussion.add(
                          result.result_lab_code
                        )
                      )
                    : results.setMarkedResultsForDiscussion(
                        results.markedResultsForDiscussion.delete(
                          result.result_lab_code
                        )
                      )
                }
                className="ion-margin-start"
              />
              <IonLabel className="ion-margin-start">
                Mark for discussion
              </IonLabel>
            </IonButtons>
          )}
          <IonButtons slot="end">
            <IonButton onClick={() => setCopyErrorOpen(true)}>Typos?</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
      <IonModal
        isOpen={copyErrorOpen}
        onDidDismiss={() => setCopyErrorOpen(true)}
      >
        <IonHeader>
          <IonToolbar>
            <IonTitle>Report an Issue</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setCopyErrorOpen(false)}>
                Close
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Layout.Column>
            <Layout.Block>
              <IonCard>
                <IonCardHeader>
                  <IonCardSubtitle>Personalized Result Check</IonCardSubtitle>
                  <IonCardTitle>
                    Does something not look right with your results?
                  </IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p className="ion-padding-top">
                    We try not to make mistakes when entering results.
                  </p>
                  <p className="ion-padding-top">
                    Please email us and we'll work to fix this right away.
                  </p>
                </IonCardContent>
                <IonToolbar color="white">
                  <IonRow className="ion-justify-content-end ion-padding-horizontal">
                    {device.isIos ? (
                      <IonButton
                        onClick={() => {
                          window.location.href = `mailto:results@preconceptiontest.com?subject=Issue%20with%20my%20Results&body=RESULTLABCODE:%20${result.result_lab_code}%20USERID:%20${auth.userId}%20Please%20let%20us%20Last%20know,%20what's%20wrong.%20Do%20not%20send%20medical%20details%20as%20email%20is%20not%20secure.`;
                          return;
                        }}
                      >
                        Contact us
                      </IonButton>
                    ) : (
                      <IonButton
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`mailto:results@preconceptiontest.com?subject=Issue%20with%20my%20Results&body=RESULTLABCODE:%20${result.result_lab_code}%20USERID:%20${auth.userId}%20Please%20let%20us%20Last%20know,%20what's%20wrong.%20Do%20not%20send%20medical%20details%20as%20email%20is%20not%20secure.`}
                      >
                        Contact us
                      </IonButton>
                    )}
                  </IonRow>
                </IonToolbar>
              </IonCard>
            </Layout.Block>
          </Layout.Column>
        </IonContent>
      </IonModal>
    </IonCard>
  );
}

function indexResultValueLabelTransformer(result: any) {
  //@ts-ignore
  let { bottom_value, middle_value, top_value } = copy.find(
    resultCopy => resultCopy.result_lab_code === result.result_lab_code
  );
  if (result.value < bottom_value) return "Non-Immune";
  else if (middle_value > result.value && result.value >= bottom_value)
    return "Equivocal";
  else if (result.value >= middle_value) return "Immune";
  else return "Error Transorming results";
}

// eseentially identical function to above

function resultValueTransformer(result: RawResult) {
  let parsed_result_value = parseFloat(result.value);
  let parsed_bottom_value = parseFloat(
    result?.lab_reference_range.split("-")[0]
  );
  let parsed_middle_value = parseFloat(
    result?.lab_reference_range.split("-")[1]
  );
  if (parsed_result_value < parsed_bottom_value) return "Low";
  else if (
    parsed_middle_value > parsed_result_value &&
    parsed_result_value >= parsed_bottom_value
  )
    return "Normal";
  else if (parsed_result_value >= parsed_middle_value) return "High";
  else return "Error Transorming results";
}

// Generated by https://quicktype.io

export interface RawResult {
  order_lab_code: string;
  order_lab_name: string;
  result_lab_code: string;
  result_lab_name: string;
  test_group_id: number;
  test_group_name: TestGroupName;
  lab_abnormal_flag: AbnormalFlag;
  client_abnormal_flag: null;
  abnormal_flag: AbnormalFlag;
  released: boolean;
  range_type: RangeType | null;
  reference_ranges: any[];
  released_at: string;
  result_status: ResultStatus;
  value: string;
  value_unit: null | string;
  observed_at: string;
  notes: null | string;
  lab_reference_range: string;
  value_type: ValueType;
}

// Generated by https://quicktype.io

export interface PWNResultsDocument {
  date_created: number;
  date_updated: number;
  formatted_results: FormattedResult[];
  owner_dob: string;
  owner_first_name: string;
  owner_id: string;
  owner_last_name: string;
  owner_username: string;
  pwn_abnormal_flag: boolean;
  pwn_results_complete: boolean;
  pwn_results_status: string;
  results: Results;
  results_viewed_by_staff: boolean;
  results_viewed_by_user: boolean;
}

export interface FormattedResult {
  name: string;
  values: Analyte[];
}

export interface Analyte {
  order_lab_code: string;
  order_lab_name: string;
  result_lab_code: string;
  result_lab_name: string;
  test_group_id: number;
  test_group_name: TestGroupName;
  lab_abnormal_flag: AbnormalFlag;
  client_abnormal_flag: null;
  abnormal_flag: AbnormalFlag;
  released: boolean;
  range_type: RangeType | null;
  reference_ranges: any[];
  released_at: string;
  result_status: ResultStatus;
  value: string;
  value_unit: null | string;
  observed_at: string;
  notes: null | string;
  lab_reference_range: string;
  value_type: ValueType;
}

export enum AbnormalFlag {
  N = "N"
}

export enum RangeType {
  PositiveAbnormal = "POSITIVE_ABNORMAL",
  ReferenceRange = "REFERENCE_RANGE"
}

export enum ResultStatus {
  Cancelled = "cancelled",
  Final = "final"
}

export enum TestGroupName {
  Essential = "Essential"
}

export enum ValueType {
  Nm = "NM",
  St = "ST",
  Tx = "TX"
}

export interface Results {
  analytes: Analyte[];
  format: string;
  summary: Summary;
}

export interface Summary {
  abnormal_flag: boolean;
  complete: boolean;
  released_at: string;
  result_received_at: string;
  result_updated_at: string;
  sample_collected_at: string;
  status: string;
}
