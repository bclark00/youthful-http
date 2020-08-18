import { useState } from "react";

export function useFormattedResults() {
  const [formattedResultsDocument, setFormattedResultsDocument] = useState<
    any[]
  >();

  // function setResults(analytes: any) {
  //   let uniqueLabCodeList = [
  //     //@ts-ignore
  //     ...new Set(analytes.map(analyte => analyte.order_lab_code))
  //   ];
  //   let baseUniqueResultList = uniqueLabCodeList.map(baseUniqueResultCode => {
  //     return { order_lab_code: baseUniqueResultCode, values: [] };
  //   });
  //   let finalResultList = baseUniqueResultList.map(baseUniqueResult => {
  //     baseUniqueResult.values = analytes.filter((result: any) => {
  //       return result.order_lab_code === baseUniqueResult.order_lab_code;
  //     });
  //     return baseUniqueResult;
  //   });
  //   setFormattedResults([...finalResultList]);
  // }

  return { formattedResultsDocument, setFormattedResultsDocument };
}
