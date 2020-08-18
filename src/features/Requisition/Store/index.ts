import { useState } from "react";
import { createContainer } from "unstated-next";

let access_token = localStorage.getItem("access_token");

function useRequistion() {
  const [data, setData] = useState();
  // const requisitionDataFinder = async (access_token: any) => {

  // }
  return { data, setData };
}

export const RequisitionStore = createContainer(useRequistion);
