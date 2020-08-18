import { useState } from "react";
import { createContainer } from "unstated-next";
import Store from "../../../store";

function useConsents() {
  const { profile } = Store.useContainer();
  const [MDHIVTestingConsentForm, setMDHIVTestingConsentForm] = useState();
  const [
    sensitiveResultTransmissionConsent,
    setSensitiveResultTransmissionConsent
  ] = useState();
  const [standardConsent, setStandardConsent] = useState();

  function checkForBlobs() {
    if (profile?.state !== "MD") {
      if (standardConsent && sensitiveResultTransmissionConsent) return true;
    } else if (profile?.state === "MD") {
      if (
        standardConsent &&
        sensitiveResultTransmissionConsent &&
        MDHIVTestingConsentForm
      )
        return true;
    } else return false;
  }

  return {
    checkForBlobs,
    MDHIVTestingConsentForm,
    setMDHIVTestingConsentForm,
    sensitiveResultTransmissionConsent,
    setSensitiveResultTransmissionConsent,
    standardConsent,
    setStandardConsent
  };
}

export const Consents = createContainer(useConsents);

function useConsentSigner() {
  const [numPages, setNumPages] = useState();
  let [pageNumber, setPagenumber] = useState(1);
  let [signature, setSignature] = useState("");
  let [rendered, setRendered] = useState(false);

  const nextPage = () => {
    if (numPages === pageNumber) return;
    else setPagenumber(pageNumber + 1);
  };

  const previousPage = () => {
    if (pageNumber === 1) return;
    else setPagenumber(pageNumber - 1);
  };
  return {
    numPages,
    setNumPages,
    pageNumber,
    setPagenumber,
    nextPage,
    previousPage,
    signature,
    setSignature,
    rendered,
    setRendered
  };
}

export const ConsentSigner = createContainer(useConsentSigner);
