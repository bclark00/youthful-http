import TrueVaultClient from "truevault";
import { TUserAttributes } from "../features/Conditionals/Store/types";

/* Api methods to call /functions */

// DEV LEGAL DOC IDS
// const vaultID = "b58a0f04-5191-4b19-822d-d3bd0a81bdb1";
// const schemaID = "02682fa7-fd9f-40c4-8477-fbc6f2fef412";

// PRODUCTION LEGAL VAULT IDS
const LEGAL_DOCS_VAULT_ID =
  process.env.NODE_ENV === "production"
    ? "2ea43d17-cedb-43ae-a06a-b78f3a88ac7e"
    : "b58a0f04-5191-4b19-822d-d3bd0a81bdb1";
const LEGAL_DOCS_SCHEMA_ID =
  process.env.NODE_ENV === "production"
    ? "b5296fd0-a9a0-4c92-88db-63e67c1a17ed"
    : "02682fa7-fd9f-40c4-8477-fbc6f2fef412";

const PWN_RESULTS_VAULT_ID =
  process.env.NODE_ENV === "production"
    ? "072febb7-684d-4cbc-9381-018de82d4532" // SWAP TO PROD
    : "072febb7-684d-4cbc-9381-018de82d4532";
const PWN_RESULTS_SCHEMA_ID =
  process.env.NODE_ENV === "production"
    ? "34ab15be-6783-411b-bd50-0bf72f5e8e62" // SWAP TO PROD
    : "34ab15be-6783-411b-bd50-0bf72f5e8e62";

const uploadUserConsentForms = async (
  access_token: string,
  user_id: string,
  document: any,
  standardConsentBlob: Blob,
  hivConsentBlob: Blob,
  mdConsentBlob?: Blob
) => {
  let standardConsentFile = new File(
    [standardConsentBlob],
    "Standard Testing Written Consent.pdf"
  );
  let hivConsentFile = new File(
    [hivConsentBlob],
    "HIV Testing Written Consent.pdf"
  );
  let mdConsentFile = mdConsentBlob
    ? new File([mdConsentBlob], "Maryland HIV Testing Consent.pdf")
    : undefined;

  let tvClient = new TrueVaultClient({ accessToken: access_token });

  let blobUploaders = mdConsentFile
    ? [standardConsentFile, hivConsentFile, mdConsentFile].map(
        async consent => {
          return await tvClient.createBlob(
            LEGAL_DOCS_VAULT_ID,
            consent,
            user_id
          );
        }
      )
    : [standardConsentFile, hivConsentFile].map(async consent => {
        return await tvClient.createBlob(LEGAL_DOCS_VAULT_ID, consent, user_id);
      });
  try {
    let blobs = await Promise.all(blobUploaders);
    let blobsWithVaultID = blobs.map((blob: any) =>
      Object.assign({}, { ...blob }, { vault_id: LEGAL_DOCS_VAULT_ID })
    );

    document.list = blobsWithVaultID;

    let createdDocument = await tvClient.createDocument(
      LEGAL_DOCS_VAULT_ID,
      LEGAL_DOCS_SCHEMA_ID,
      document,
      user_id
    );

    let initialDocument = Object.assign({}, createdDocument, {
      stripe_purchase_id: document.stripe_purchase_id,
      canceled: false
    });

    return { initialDocument, status: "succeeded" };
  } catch (error) {
    console.log("Error Uploading Blobs", error);
    return { error, status: "failed" };
  }
};

const getLegalDocument = async (
  access_token: string,
  document_ids: string[]
) => {
  let tvClient = new TrueVaultClient({ accessToken: access_token });
  try {
    let documentList = await tvClient.getDocuments(
      LEGAL_DOCS_VAULT_ID,
      document_ids
    );

    let desiredDocument = documentList.find(
      (document: any) => document.id === document_ids[0]
    );

    return { desiredDocument, status: "succeeded" };
  } catch (error) {
    return { status: "failed" };
  }
};

const getLegalDocumentsList = async (
  access_token: string,
  attributes: TUserAttributes
) => {
  let tvClient = new TrueVaultClient({ accessToken: access_token });

  //@ts-ignore
  let rootDocumentFetchers = attributes.legal_document_lists.map(
    async (legal_document_list: any) =>
      await tvClient.getDocuments(legal_document_list.vault_id, [
        legal_document_list.id
      ])
  );

  let rootDocuments: any[] = await Promise.all(rootDocumentFetchers);

  let targetDocumentsBase = rootDocuments?.flatMap(document =>
    document.map((document: any) => document)
  );

  let fetchedFiles = targetDocumentsBase.reduce((acc, current) => {
    const x = acc.find((item: any) => item.id === current.id);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  // console.log(filteredArr);

  // let files = targetDocumentsBase?.document?.list.map(
  //   async (file: any) => await tvClient.getBlob(file.vault_id, file.id)
  // );
  // let test = filteredArr.map(function(document: any) {
  //   return document.document.list.map(
  //     // async (file: any) => await tvClient.getBlob(file.vault_id, file.id)
  //     (file: any) => file
  //   );
  // });

  // // // let boop = test.map(
  // // //   async (file: any) => await tvClient.getBlob(file.vault_id, file.id)
  // // // );

  // let fetchedFiles = test.map(function(document: any) {
  //   return document;
  // });

  // // targetDocumentsBase.document.list = fetchedFiles;

  // console.log(filteredArr);
  // console.log(fetchedFiles);

  // let matchedFiles = filteredArr.map((x: any, index: number) => x.document.list)

  try {
    return {
      fetchedFiles,
      status: "succeeded"
    };
  } catch (error) {
    return { status: "failed" };
  }
};
const getFormattedResultsDocument = async (
  access_token: string,
  document_ids: string[]
) => {
  let tvClient = new TrueVaultClient({ accessToken: access_token });
  try {
    let documentList = await tvClient.getDocuments(
      PWN_RESULTS_VAULT_ID,
      document_ids
    );

    let desiredDocument = documentList.find(
      (document: any) => document.id === document_ids[0]
    );

    return { desiredDocument, status: "succeeded" };
  } catch (error) {
    return { status: "failed" };
  }
};

const getFormattedResultsDocumentAndSetViewedTrue = async (
  access_token: string,
  document_ids: string[]
) => {
  let tvClient = new TrueVaultClient({ accessToken: access_token });
  try {
    let documentList = await tvClient.getDocuments(
      PWN_RESULTS_VAULT_ID,
      document_ids
    );

    let desiredDocument = documentList.find(
      (document: any) => document.id === document_ids[0]
    );

    return { desiredDocument, status: "succeeded" };
  } catch (error) {
    return { status: "failed" };
  }
};

const getBlob = async (
  access_token: string,
  blob_id: string,
  vault_id: string
) => {
  let tvClient = new TrueVaultClient({ accessToken: access_token });
  try {
    let desiredBlob = await tvClient.getBlob(vault_id, blob_id);
    return desiredBlob;
  } catch (error) {}
};

export default {
  uploadUserConsentForms,
  getLegalDocument,
  getLegalDocumentsList,
  getBlob,
  getFormattedResultsDocument
};
