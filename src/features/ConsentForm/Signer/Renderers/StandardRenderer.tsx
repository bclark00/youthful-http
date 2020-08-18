import { IonLoading } from "@ionic/react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import { Consents, ConsentSigner } from "../../Store";
//@ts-ignore
import StandardConsent from "../PDFs/StandardConsent";

export default function StandardRenderer() {
  const { setStandardConsent } = Consents.useContainer();
  const consent = ConsentSigner.useContainer();
  return (
    <>
      {consent.signature && (
        <PDFDownloadLink
          document={<StandardConsent signature={consent.signature} />}
          fileName="Standard-Testing-Written-Consent.pdf"
        >
          {({ blob, url, loading, error }) => {
            if (loading) {
              return <IonLoading isOpen />;
            } else if (blob) {
              consent.setRendered(true);
              setStandardConsent(blob);
            } else return "Error, please report";
          }}
        </PDFDownloadLink>
      )}
    </>
  );
}
