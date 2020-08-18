const util = require("util");

const sampleData = [
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30000000",
    result_lab_name: "WHITE BLOOD CELL COUNT",
    test_group_id: 2863,
    test_group_name: "Essential- Non HIV",
    lab_abnormal_flag: "H",
    client_abnormal_flag: null,
    abnormal_flag: "H",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-23T14:27:42Z",
    result_status: "final",
    value: "11.2",
    value_unit: "Thousand/uL",
    observed_at: "2019-12-22T02:14:00Z",
    notes: null,
    lab_reference_range: "3.8-10.8",
    value_type: "NM"
  },
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30000100",
    result_lab_name: "RED BLOOD CELL COUNT",
    test_group_id: 2863,
    test_group_name: "Essential- Non HIV",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-23T14:27:42Z",
    result_status: "final",
    value: "4.55",
    value_unit: "Million/uL",
    observed_at: "2019-12-22T02:14:00Z",
    notes: null,
    lab_reference_range: "3.80-5.10",
    value_type: "NM"
  },
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30000200",
    result_lab_name: "HEMOGLOBIN",
    test_group_id: 2863,
    test_group_name: "Essential- Non HIV",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-23T14:27:42Z",
    result_status: "final",
    value: "13.2",
    value_unit: "g/dL",
    observed_at: "2019-12-22T02:14:00Z",
    notes: null,
    lab_reference_range: "11.7-15.5",
    value_type: "NM"
  },
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30000300",
    result_lab_name: "HEMATOCRIT",
    test_group_id: 2863,
    test_group_name: "Essential- Non HIV",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-23T14:27:42Z",
    result_status: "final",
    value: "39.5",
    value_unit: "%",
    observed_at: "2019-12-22T02:14:00Z",
    notes: null,
    lab_reference_range: "35.0-45.0",
    value_type: "NM"
  },
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30000400",
    result_lab_name: "MCV",
    test_group_id: 2863,
    test_group_name: "Essential- Non HIV",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-23T14:27:42Z",
    result_status: "final",
    value: "86.8",
    value_unit: "fL",
    observed_at: "2019-12-22T02:14:00Z",
    notes: null,
    lab_reference_range: "80.0-100.0",
    value_type: "NM"
  },
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30000500",
    result_lab_name: "MCH",
    test_group_id: 2863,
    test_group_name: "Essential- Non HIV",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-23T14:27:42Z",
    result_status: "final",
    value: "29.0",
    value_unit: "pg",
    observed_at: "2019-12-22T02:14:00Z",
    notes: null,
    lab_reference_range: "27.0-33.0",
    value_type: "NM"
  },
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30000600",
    result_lab_name: "MCHC",
    test_group_id: 2863,
    test_group_name: "Essential- Non HIV",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-23T14:27:42Z",
    result_status: "final",
    value: "33.4",
    value_unit: "g/dL",
    observed_at: "2019-12-22T02:14:00Z",
    notes: null,
    lab_reference_range: "32.0-36.0",
    value_type: "NM"
  },
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30000700",
    result_lab_name: "RDW",
    test_group_id: 2863,
    test_group_name: "Essential- Non HIV",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-23T14:27:42Z",
    result_status: "final",
    value: "12.5",
    value_unit: "%",
    observed_at: "2019-12-22T02:14:00Z",
    notes: null,
    lab_reference_range: "11.0-15.0",
    value_type: "NM"
  },
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30000800",
    result_lab_name: "PLATELET COUNT",
    test_group_id: 2863,
    test_group_name: "Essential- Non HIV",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-23T14:27:42Z",
    result_status: "final",
    value: "272",
    value_unit: "Thousand/uL",
    observed_at: "2019-12-22T02:14:00Z",
    notes: null,
    lab_reference_range: "140-400",
    value_type: "NM"
  },
  {
    order_lab_code: "1759",
    order_lab_name: "CBC (H/H, RBC, INDICES, WBC, PLT)",
    result_lab_code: "30004600",
    result_lab_name: "MPV",
    test_group_id: 2863,
    test_group_name: "Essential- Non HIV",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-23T14:27:42Z",
    result_status: "final",
    value: "11.5",
    value_unit: "fL",
    observed_at: "2019-12-22T02:14:00Z",
    notes: null,
    lab_reference_range: "7.5-12.5",
    value_type: "NM"
  },
  {
    order_lab_code: "498",
    order_lab_name: "HEPATITIS B SURFACE ANTIGEN W/REFL CONFIRM",
    result_lab_code: "55019300",
    result_lab_name: "HEPATITIS B SURFACE ANTIGEN",
    test_group_id: 2863,
    test_group_name: "Essential- Non HIV",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "POSITIVE_ABNORMAL",
    reference_ranges: [],
    released_at: "2019-12-23T14:27:42Z",
    result_status: "final",
    value: "NON-REACTIVE",
    value_unit: null,
    observed_at: "2019-12-22T02:14:00Z",
    notes: null,
    lab_reference_range: "NON-REACTIVE",
    value_type: "ST"
  },
  {
    order_lab_code: "498",
    order_lab_name: "HEPATITIS B SURFACE ANTIGEN W/REFL CONFIRM",
    result_lab_code: "55019600",
    result_lab_name: "CONFIRMATION",
    test_group_id: 2863,
    test_group_name: "Essential- Non HIV",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "POSITIVE_ABNORMAL",
    reference_ranges: [],
    released_at: "2019-12-23T14:27:42Z",
    result_status: "cancelled",
    value: "DNR",
    value_unit: null,
    observed_at: "2019-12-22T02:14:00Z",
    notes: null,
    lab_reference_range: "",
    value_type: "ST"
  },
  {
    order_lab_code: "802",
    order_lab_name: "RUBELLA IMMUNE STATUS",
    result_lab_code: "70012000",
    result_lab_name: "RUBELLA ANTIBODY (IGG)",
    test_group_id: 2863,
    test_group_name: "Essential- Non HIV",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "REFERENCE_RANGE",
    reference_ranges: [],
    released_at: "2019-12-23T14:27:42Z",
    result_status: "final",
    value: "1.59",
    value_unit: "index",
    observed_at: "2019-12-22T02:14:00Z",
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
    test_group_id: 2863,
    test_group_name: "Essential- Non HIV",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: null,
    reference_ranges: [],
    released_at: "2019-12-23T14:27:42Z",
    result_status: "final",
    value: "1720.00",
    value_unit: "index",
    observed_at: "2019-12-22T02:14:00Z",
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
    test_group_id: 2863,
    test_group_name: "Essential- Non HIV",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: "POSITIVE_ABNORMAL",
    reference_ranges: [],
    released_at: "2019-12-23T14:27:42Z",
    result_status: "final",
    value: "NON-REACTIVE",
    value_unit: null,
    observed_at: "2019-12-22T02:14:00Z",
    notes: null,
    lab_reference_range: "NON-REACTIVE",
    value_type: "ST"
  },
  {
    order_lab_code: "795",
    order_lab_name: "ANTIBODY SCREEN, RBC W/REFL ID, TITER AND AG",
    result_lab_code: "35008400",
    result_lab_name: "ANTIBODY SCREEN, RBC W/REFL ID, TITER AND AG",
    test_group_id: 2863,
    test_group_name: "Essential- Non HIV",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: null,
    reference_ranges: [],
    released_at: "2019-12-23T14:27:42Z",
    result_status: "final",
    value: "NO ANTIBODIES DETECTED",
    value_unit: null,
    observed_at: "2019-12-22T02:14:00Z",
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
    test_group_id: 2863,
    test_group_name: "Essential- Non HIV",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: null,
    reference_ranges: [],
    released_at: "2019-12-23T14:27:42Z",
    result_status: "final",
    value: "O",
    value_unit: null,
    observed_at: "2019-12-22T02:14:00Z",
    notes: null,
    lab_reference_range: "",
    value_type: "ST"
  },
  {
    order_lab_code: "7788",
    order_lab_name: "ABO GROUP AND RH TYPE",
    result_lab_code: "35008300",
    result_lab_name: "RH TYPE",
    test_group_id: 2863,
    test_group_name: "Essential- Non HIV",
    lab_abnormal_flag: "N",
    client_abnormal_flag: null,
    abnormal_flag: "N",
    released: true,
    range_type: null,
    reference_ranges: [],
    released_at: "2019-12-23T14:27:42Z",
    result_status: "final",
    value: "RH(D) POSITIVE",
    value_unit: null,
    observed_at: "2019-12-22T02:14:00Z",
    notes:
      " \nFor additional information, please refer to \nhttp://education.QuestDiagnostics.com/faq/FAQ111 \n(This link is being provided for informational/\neducational purposes only.)",
    lab_reference_range: "",
    value_type: "ST"
  }
];

let data = [
  {
    title: "Complete Blod Count",
    name: 1759,
    values: [
      { name: "Hemoglobin", value: 6 },
      { name: "Bllop", value: 886 }
    ]
  },
  {
    title: "Totes",
    name: 788,
    values: [{ name: "Totes", value: 60 }]
  }
];

const transformData = results => {
  for (let analyte of results) {
    switch (analyte.order_lab_code) {
      case "1759":
        return {
          value: parseInt(analyte.value),
          referenceRange: [3.8, 5.1],
          type: NUMERIC_RANGE
        };
        break;

      case "7787": // TODO: not a real code. NB: falls through intentionally
      case "7788":
        const manBearPig = "AlGore";

        return {
          value: parseInt(analyte.value),
          referenceRange: [3.8, 5.1]
        };

        break;

      default: {
        console.error("unhandled case:", analyte.order_lab_code);
      }
    }
  }
};
let targetOrderLabCode = "1759";

let target = sampleData.filter(
  analyte => targetOrderLabCode === analyte.order_lab_code
);
let results = target.map(analyte => {
  return {
    order_lab_name: analyte.order_lab_name,
    order_lab_code: analyte.order_lab_code,
    value: analyte.value,
    lab_name: analyte.result_lab_name,
    result_lab_code: analyte.result_lab_code
  };
});
// console.log(sampleData);

function formatResultsList(analytes) {
  let uniqueLabCodeList = [
    ...new Set(analytes.map(analyte => analyte.order_lab_code))
  ];
  let baseUniqueResultList = uniqueLabCodeList.map(baseUniqueResultCode => {
    return { name: baseUniqueResultCode, values: [] };
  });
  let finalResultList = baseUniqueResultList.map(baseUniqueResult => {
    baseUniqueResult.values = sampleData.filter(result => {
      return result.order_lab_code === baseUniqueResult.name;
    });
    return baseUniqueResult;
  });
  return finalResultList;
}

let bro = formatResultsList(sampleData);

// console.log(bro);
// console.log(
//   bro.map(result => {
//     console.log("restul", result);
//     result.values.map(value => {
//       console.log(value);
//     });
//   })
// );

console.log(util.inspect(bro, false, null, true /* enable colors */));
