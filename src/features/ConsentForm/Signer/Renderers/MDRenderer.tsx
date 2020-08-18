import { IonLoading } from "@ionic/react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import { Consents, ConsentSigner } from "../../Store";
import MDHIVTestingConsentForm from "../PDFs/MDHIVTestingConsentForm";

export default function MDRenderer(props: any) {
  const { setMDHIVTestingConsentForm } = Consents.useContainer();
  const consent = ConsentSigner.useContainer();
  return (
    <>
      {consent.signature && (
        <PDFDownloadLink
          document={<MDHIVTestingConsentForm signature={consent.signature} />}
          fileName="Maryland-HIV-Testing-Consent.pdf"
        >
          {({ blob, url, loading, error }) => {
            if (loading) {
              return <IonLoading isOpen />;
            } else if (blob) {
              consent.setRendered(true);
              setMDHIVTestingConsentForm(blob);
            } else return "Error, please report";
          }}
        </PDFDownloadLink>
      )}
    </>
  );
}
