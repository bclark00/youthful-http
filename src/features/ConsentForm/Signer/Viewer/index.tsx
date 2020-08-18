import {
  IonButton,
  IonCol,
  IonLoading,
  IonRow,
  IonSpinner
} from "@ionic/react";
import React from "react";
//@ts-ignore
import { Document, Page, pdfjs } from "react-pdf";
import { ConsentSigner } from "../../Store";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function(props: any) {
  const consent = ConsentSigner.useContainer();
  return (
    <IonCol>
      <IonRow className="ion-justify-content-center">
        <Document
          loading={<IonLoading isOpen={true} />}
          file={props.view_file}
          onLoadSuccess={(props: any) =>
            consent.setNumPages(props._pdfInfo.numPages)
          }
        >
          <Page
            height={380}
            pageNumber={consent.pageNumber}
            loading={
              <div style={{ height: 380, width: 294 }}>
                <IonSpinner />
              </div>
            }
          />
        </Document>
      </IonRow>
      <IonRow className="ion-padding ion-justify-content-evenly ion-align-items-center">
        <IonButton
          disabled={consent.pageNumber === 1}
          onClick={() => consent.previousPage()}
          size="small"
          shape="round"
        >
          Previous Page
        </IonButton>
        <IonButton
          disabled={consent.numPages === consent.pageNumber}
          onClick={() => consent.nextPage()}
          size="small"
          shape="round"
        >
          Next Page
        </IonButton>
      </IonRow>
    </IonCol>
  );
}
