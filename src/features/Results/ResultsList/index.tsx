import {
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList
} from "@ionic/react";
import React, { useEffect } from "react";
import Layout from "../../../components/Layout";
import Store from "../../../store";
import { IAnalyte } from "../Page";
import { copy } from "../ResultDetailPage/copy";

export default function ResultsCard() {
  const { results } = Store.useContainer();

  useEffect(() => {
    console.log(results.markedResultsForDiscussion);
  }, [results.markedResultsForDiscussion]);

  return (
    <>
      {results.formattedResultsDocument.document.formatted_results?.map(
        (result: any, index: number) => {
          return (
            <Layout.Block key={index}>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>{labelNamePicker(result.name)}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonList>
                    {result.values.map((value: IAnalyte, index: number) => {
                      let resultCopy: any = copy.find(
                        test => test.result_lab_code === value.result_lab_code
                      );
                      return value.result_status === "final" ? (
                        <IonItem
                          routerLink={`/results/${value.result_lab_code}`}
                          key={index}
                        >
                          <IonLabel className="ion-text-wrap">
                            {/*value.result_lab_name*/}
                            {resultCopy.result_lab_name}
                          </IonLabel>
                          <IonBadge
                            color={
                              abnormalFlagFormatter(value?.abnormal_flag)?.color
                            }
                          >
                            {abnormalFlagFormatter(value?.abnormal_flag)?.label}
                          </IonBadge>
                        </IonItem>
                      ) : null;
                    })}
                  </IonList>
                </IonCardContent>
              </IonCard>
            </Layout.Block>
          );
        }
      )}
    </>
  );
}

export function abnormalFlagFormatter(abnormal_flag: string) {
  if (abnormal_flag === "N") {
    return { label: "Normal", color: "primary" };
  } else if (abnormal_flag === "H") {
    return {
      label: "High",
      color: "tertiary"
    };
  } else if (abnormal_flag === "L") {
    return { label: "Low", color: "tertiary" };
  } else if (abnormal_flag === "LL") {
    return { label: "Alert Low", color: "secondary" };
  } else if (abnormal_flag === "HH") {
    return { label: "Alert High", color: "secondary" };
  } else if (abnormal_flag === "<") {
    return { label: "Critical Low", color: "warning" };
  } else if (abnormal_flag === ">") {
    return { label: "Critical High", color: "warning" };
  } else if (abnormal_flag === "A") {
    return { label: "Abnormal", color: "secondary" };
  }
}

function labelNamePicker(order_lab_code: string) {
  switch (order_lab_code) {
    case "1759":
      return "Complete Blood Count";
    case "91431":
      return "HIV";
    case "498":
      return "Hepatitis B";
    case "802":
      return "Rubella";
    case "4439":
      return "Varicella";
    case "36126":
      return "Syphilis";
    case "795":
      return "Antibody Screen";
    case "7788":
      return "Blood Type";
    default:
      break;
  }
}
