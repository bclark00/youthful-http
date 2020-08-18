import { IonLoading } from "@ionic/react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import { Consents, ConsentSigner } from "../../Store";
import SensitiveResultTransmissionConsent from "../PDFs/SensitiveResultTransmissionConsent";

export default function ResultTransmissionRenderer(props: any) {
  const { setSensitiveResultTransmissionConsent } = Consents.useContainer();
  const consent = ConsentSigner.useContainer();
  return (
    <>
      {consent.signature && (
        <PDFDownloadLink
          document={
            <SensitiveResultTransmissionConsent signature={consent.signature} />
          }
          fileName="Sensitive-Result-Transmission-Consent.pdf"
        >
          {({ blob, url, loading, error }) => {
            if (loading) {
              return <IonLoading isOpen />;
            } else if (blob) {
              consent.setRendered(true);
              setSensitiveResultTransmissionConsent(blob);
            } else return "Error, please report";
          }}
        </PDFDownloadLink>
      )}
    </>
  );
}
