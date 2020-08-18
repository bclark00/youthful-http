import {
  IonButton,
  IonButtons,
  IonChip,
  IonContent,
  IonFooter,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonToolbar
} from "@ionic/react";
import {
  americanFootball,
  basketball,
  beer,
  bluetooth,
  boat,
  build,
  cash,
  flask,
  football,
  paperPlane,
  wifi
} from "ionicons/icons";
import React, { useMemo } from "react";

const sampleData2 = [
  {
    order_lab_code: "91431",
    order_lab_name: "HIV 1/2 ANTIGEN/ANTIBODY,FOURTH GENERATION W/RFL",
    result_lab_code: "86009052",
    result_lab_name: "HIV AG/AB, 4TH GEN",
    test_group_id: 2861,
    test_group_name: "Essential",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "POSITIVE_ABNORMAL",
    reference_ranges: [],
    released_at: "2019-12-26T20:35:18Z",
    result_status: "final",
    value: "NON-REACTIVE",
    value_unit: null,
    observed_at: "2019-12-26T20:28:00Z",
    notes:
      "HIV-1 antigen and HIV-1/HIV-2 antibodies were not\ndetected. There is no laboratory evidence of HIV\ninfection.\n \nPLEASE NOTE: This information has been disclosed to\nyou from records whose confidentiality may be\nprotected by state law.  If your state requires such\nprotection, then the state law prohibits you from\nmaking any further disclosure of the information\nwithout the specific written consent of the person\nto whom it pertains, or as otherwise permitted by law.\nA general authorization for the release of medical or\nother information is NOT sufficient for this purpose.\n  \nFor additional information please refer to\nhttp://education.questdiagnostics.com/faq/FAQ106\n(This link is being provided for informational/\neducational purposes only.)\n \n \nThe performance of this assay has not been clinically\nvalidated in patients less than 2 years old.\n ",
    lab_reference_range: "NON-REACTIVE",
    value_type: "TX"
  },
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30000000",
    result_lab_name: "WHITE BLOOD CELL COUNT",
    test_group_id: 2861,
    test_group_name: "Essential",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-26T20:35:18Z",
    result_status: "final",
    value: "5.2",
    value_unit: "Thousand/uL",
    observed_at: "2019-12-26T20:28:00Z",
    notes: null,
    lab_reference_range: "3.8-10.8",
    value_type: "NM"
  },
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30000100",
    result_lab_name: "RED BLOOD CELL COUNT",
    test_group_id: 2861,
    test_group_name: "Essential",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-26T20:35:18Z",
    result_status: "final",
    value: "4.78",
    value_unit: "Million/uL",
    observed_at: "2019-12-26T20:28:00Z",
    notes: null,
    lab_reference_range: "3.80-5.10",
    value_type: "NM"
  },
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30000200",
    result_lab_name: "HEMOGLOBIN",
    test_group_id: 2861,
    test_group_name: "Essential",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-26T20:35:18Z",
    result_status: "final",
    value: "14.3",
    value_unit: "g/dL",
    observed_at: "2019-12-26T20:28:00Z",
    notes: null,
    lab_reference_range: "11.7-15.5",
    value_type: "NM"
  },
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30000300",
    result_lab_name: "HEMATOCRIT",
    test_group_id: 2861,
    test_group_name: "Essential",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-26T20:35:18Z",
    result_status: "final",
    value: "43.0",
    value_unit: "%",
    observed_at: "2019-12-26T20:28:00Z",
    notes: null,
    lab_reference_range: "35.0-45.0",
    value_type: "NM"
  },
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30000400",
    result_lab_name: "MCV",
    test_group_id: 2861,
    test_group_name: "Essential",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-26T20:35:18Z",
    result_status: "final",
    value: "90.0",
    value_unit: "fL",
    observed_at: "2019-12-26T20:28:00Z",
    notes: null,
    lab_reference_range: "80.0-100.0",
    value_type: "NM"
  },
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30000500",
    result_lab_name: "MCH",
    test_group_id: 2861,
    test_group_name: "Essential",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-26T20:35:18Z",
    result_status: "final",
    value: "29.9",
    value_unit: "pg",
    observed_at: "2019-12-26T20:28:00Z",
    notes: null,
    lab_reference_range: "27.0-33.0",
    value_type: "NM"
  },
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30000600",
    result_lab_name: "MCHC",
    test_group_id: 2861,
    test_group_name: "Essential",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-26T20:35:18Z",
    result_status: "final",
    value: "33.3",
    value_unit: "g/dL",
    observed_at: "2019-12-26T20:28:00Z",
    notes: null,
    lab_reference_range: "32.0-36.0",
    value_type: "NM"
  },
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30000700",
    result_lab_name: "RDW",
    test_group_id: 2861,
    test_group_name: "Essential",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-26T20:35:18Z",
    result_status: "final",
    value: "12.9",
    value_unit: "%",
    observed_at: "2019-12-26T20:28:00Z",
    notes: null,
    lab_reference_range: "11.0-15.0",
    value_type: "NM"
  },
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30000800",
    result_lab_name: "PLATELET COUNT",
    test_group_id: 2861,
    test_group_name: "Essential",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-26T20:35:18Z",
    result_status: "final",
    value: "328",
    value_unit: "Thousand/uL",
    observed_at: "2019-12-26T20:28:00Z",
    notes: null,
    lab_reference_range: "140-400",
    value_type: "NM"
  },
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30004600",
    result_lab_name: "MPV",
    test_group_id: 2861,
    test_group_name: "Essential",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-26T20:35:18Z",
    result_status: "final",
    value: "9.5",
    value_unit: "fL",
    observed_at: "2019-12-26T20:28:00Z",
    notes: null,
    lab_reference_range: "7.5-12.5",
    value_type: "NM"
  },
  {
    order_lab_code: "498",
    order_lab_name: "HEPATITIS B SURFACE ANTIGEN W/REFL CONFIRM",
    result_lab_code: "55019300",
    result_lab_name: "HEPATITIS B SURFACE ANTIGEN",
    test_group_id: 2861,
    test_group_name: "Essential",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "POSITIVE_ABNORMAL",
    reference_ranges: [],
    released_at: "2019-12-26T20:35:18Z",
    result_status: "final",
    value: "NON-REACTIVE",
    value_unit: null,
    observed_at: "2019-12-26T20:28:00Z",
    notes: null,
    lab_reference_range: "NON-REACTIVE",
    value_type: "ST"
  },
  {
    order_lab_code: "498",
    order_lab_name: "HEPATITIS B SURFACE ANTIGEN W/REFL CONFIRM",
    result_lab_code: "55019600",
    result_lab_name: "CONFIRMATION",
    test_group_id: 2861,
    test_group_name: "Essential",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "POSITIVE_ABNORMAL",
    reference_ranges: [],
    released_at: "2019-12-26T20:35:18Z",
    result_status: "cancelled",
    value: "DNR",
    value_unit: null,
    observed_at: "2019-12-26T20:28:00Z",
    notes: null,
    lab_reference_range: "",
    value_type: "ST"
  },
  {
    order_lab_code: "802",
    order_lab_name: "RUBELLA IMMUNE STATUS",
    result_lab_code: "70012000",
    result_lab_name: "RUBELLA ANTIBODY (IGG)",
    test_group_id: 2861,
    test_group_name: "Essential",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-26T20:35:18Z",
    result_status: "final",
    value: "2.27",
    value_unit: "index",
    observed_at: "2019-12-26T20:28:00Z",
    notes:
      "    Index            Interpretation\n    -----            --------------  \n    <0.90            Not consistent with Immunity\n    0.90-0.99        Equivocal\n    > or = 1.00      Consistent with Immunity \n \nThe presence of rubella IgG antibody suggests \nimmunization or past or current infection with\nrubella virus.",
    lab_reference_range: "",
    value_type: "NM"
  },
  {
    order_lab_code: "4439",
    order_lab_name: "VARICELLA ZOSTER VIRUS ANTIBODY (IGG)",
    result_lab_code: "70011500",
    result_lab_name: "VARICELLA ZOSTER VIRUS ANTIBODY (IGG)",
    test_group_id: 2861,
    test_group_name: "Essential",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: null,
    reference_ranges: [],
    released_at: "2019-12-26T20:35:18Z",
    result_status: "final",
    value: "381.60",
    value_unit: "index",
    observed_at: "2019-12-26T20:28:00Z",
    notes:
      "       Index               Interpretation\n     ---------         ----------------------\n    <135.00            Negative - Antibody not detected\n    135.00 - 164.99    Equivocal\n    > or = 165.00      Positive - Antibody detected\n \n    A positive result indicates that the patient\n    has antibody to VZV but does not differentiate\n    between an active or past infection. \n    The clinical diagnosis must be interpreted in \n    conjunction with the clinical signs and symptoms of \n    the patient. This assay reliably measures immunity\n    due to previous infection but may not be \n    sensitive enough to detect antibodies induced by\n    vaccination. Thus, a negative result in a vaccinated\n    individual does not necessarily indicate\n    susceptibility to VZV infection. A more sensitive\n    test for vaccination-induced immunity is Varicella\n    Zoster Virus Antibody Immunity Screen, ACIF.",
    lab_reference_range: "",
    value_type: "NM"
  },
  {
    order_lab_code: "36126",
    order_lab_name: "RPR (DX) W/REFL TITER AND CONFIRMATORY TESTING",
    result_lab_code: "40015700",
    result_lab_name: "RPR (DX) W/REFL TITER AND CONFIRMATORY TESTING",
    test_group_id: 2861,
    test_group_name: "Essential",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "POSITIVE_ABNORMAL",
    reference_ranges: [],
    released_at: "2019-12-26T20:35:18Z",
    result_status: "final",
    value: "NON-REACTIVE",
    value_unit: null,
    observed_at: "2019-12-26T20:28:00Z",
    notes: null,
    lab_reference_range: "NON-REACTIVE",
    value_type: "ST"
  },
  {
    order_lab_code: "795",
    order_lab_name: "ANTIBODY SCREEN, RBC W/REFL ID, TITER AND AG",
    result_lab_code: "35008400",
    result_lab_name: "ANTIBODY SCREEN, RBC W/REFL ID, TITER AND AG",
    test_group_id: 2861,
    test_group_name: "Essential",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: null,
    reference_ranges: [],
    released_at: "2019-12-26T20:35:18Z",
    result_status: "final",
    value: "NO ANTIBODIES DETECTED",
    value_unit: null,
    observed_at: "2019-12-26T20:28:00Z",
    notes:
      "                Reference range\n                No antibodies detected\n \nThis assay is a screening test for the detection of \nred blood cell antibodies. The test is not to be used \nfor pretransfusion screening or for the medical \nmanagement of an alloimmunized pregnancy.    ",
    lab_reference_range: "",
    value_type: "TX"
  },
  {
    order_lab_code: "7788",
    order_lab_name: "ABO GROUP AND RH TYPE",
    result_lab_code: "35008200",
    result_lab_name: "ABO GROUP",
    test_group_id: 2861,
    test_group_name: "Essential",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: null,
    reference_ranges: [],
    released_at: "2019-12-26T20:35:18Z",
    result_status: "final",
    value: "B",
    value_unit: null,
    observed_at: "2019-12-26T20:28:00Z",
    notes: null,
    lab_reference_range: "",
    value_type: "ST"
  },
  {
    order_lab_code: "7788",
    order_lab_name: "ABO GROUP AND RH TYPE",
    result_lab_code: "35008300",
    result_lab_name: "RH TYPE",
    test_group_id: 2861,
    test_group_name: "Essential",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: null,
    reference_ranges: [],
    released_at: "2019-12-26T20:35:18Z",
    result_status: "final",
    value: "RH(D) POSITIVE",
    value_unit: null,
    observed_at: "2019-12-26T20:28:00Z",
    notes:
      " \nFor additional information, please refer to \nhttp://education.QuestDiagnostics.com/faq/FAQ111 \n(This link is being provided for informational/\neducational purposes only.)",
    lab_reference_range: "",
    value_type: "ST"
  }
];

const PurchasePage: React.FC = () => {
  return (
    <IonPage>
      <IonSearchbar />
      <IonToolbar>
        <IonSegment
          slot="primary"
          onIonChange={e => console.log("Segment selected", e.detail.value)}
          value=""
        >
          <IonSegmentButton value="all">
            <IonLabel>All</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="unfulfilled">
            <IonLabel>Unfulfilled</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="fulfilled">
            <IonLabel>Fulfilled</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="canceled">
            <IonLabel>Canceled</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="refunded">
            <IonLabel>Refunded</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
      <IonContent>
        <ListItems />
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonButtons>
            <IonButton>1 - 25</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

const icons = [
  flask,
  wifi,
  beer,
  football,
  basketball,
  paperPlane,
  americanFootball,
  boat,
  bluetooth,
  build
];

const ListItems = () => {
  return useMemo(
    () => (
      <IonList lines="none" className="ion-padding-vertical">
        {sampleData2.map(x => (
          <Item x={x} key={x.result_lab_code} />
        ))}
      </IonList>
    ),
    [sampleData2]
  );
};

function Item(props: any) {
  let { x } = props;

  return useMemo(
    () => (
      <IonItem routerLink={`/purchases/${x.result_lab_code}`} key={x}>
        <IonIcon icon={cash} slot="start" />
        {x.result_lab_name}
        <div className="item-note" slot="end">
          <IonChip>{x.abnormal_flag}</IonChip>
        </div>
      </IonItem>
    ),
    [sampleData2]
  );
}

export default PurchasePage;
