import { useEffect } from "react";
import { useImmer } from "use-immer";
import { TUserAttributes, TUserConditionals, TUserProfile } from "./types";

const ENVIRONMENT = process.env.NODE_ENV;

export default function useConditionals() {
  const [conditionals, updateConditionals] = useImmer<
    Partial<TUserConditionals>
  >({});

  function calculateConditionals(attributes: Partial<TUserAttributes>) {
    updateConditionals(() => {
      return {
        ...consentCallScheduled(attributes),
        ...additionalVerbalHIVConsentState(attributes),
        ...additionalWrittenHIVConsentState(attributes),
        ...consentCallCompleted(attributes),
        ...editable(attributes),
        ...profileComplete(attributes),
        // ...OLDreadyToPurchase(attributes, conditionals),
        ...readyToPurchase(attributes),
        ...consentCallRequired(attributes),
        ...consentFormsSigned(attributes),
        ...unpurchaseable(attributes),
        ...readyToOrder(attributes)

        // ...OLDreadyToOrder(attributes, conditionals)
      };
    });
  }
  useEffect(() => {
    console.log(conditionals);
  }, [conditionals]);

  return { conditionals, calculateConditionals };
}

function profileComplete(
  attributes: Partial<TUserAttributes>
): { profileComplete: boolean } {
  const { profile } = attributes;
  if (profile) {
    let data: Partial<TUserProfile> = profile;
    if (
      data.city &&
      data.first_name &&
      data.dob &&
      data.email &&
      data.last_name &&
      data.line &&
      data.phone &&
      data.state &&
      data.zip_code
    )
      return { profileComplete: true };
    else return { profileComplete: false };
  } else return { profileComplete: false };
}

function consentFormsSigned(
  attributes: Partial<TUserAttributes>
): { consentFormsSigned: boolean } {
  const { legal_document_lists, stripe_purchases } = attributes;
  if (legal_document_lists && stripe_purchases) {
    let data: any[] = legal_document_lists;
    if (attributes.user_progress_level === "purchased" || "processed") {
      if (data.length >= stripe_purchases.length) {
        return { consentFormsSigned: true };
      } else {
        return { consentFormsSigned: false };
      }
    } else {
      return { consentFormsSigned: false };
    }
  } else return { consentFormsSigned: false };
}

function consentCallScheduled(
  attributes: Partial<TUserAttributes>
): { consentCallScheduled: boolean } {
  const { consent_calls, pwn_results } = attributes;
  if (consent_calls && pwn_results) {
    let data: any[] = consent_calls.filter(
      //@ts-ignore FILTER OUT CANCELED CALLS
      consent_call => consent_call.canceled === false
    );
    if (attributes.user_progress_level === "purchased") {
      if (data.length > pwn_results.length) {
        return { consentCallScheduled: true };
      } else {
        return { consentCallScheduled: false };
      }
    } else {
      return { consentCallScheduled: false };
    }
  } else return { consentCallScheduled: false };
}

function consentCallCompleted(
  attributes: Partial<TUserAttributes>
): { consentCallCompleted: boolean } {
  const { consent_calls, purchases, pwn_results } = attributes;
  if (consent_calls && pwn_results) {
    let data: any[] = consent_calls;
    if (attributes.user_progress_level === "purchased") {
      if (data?.[0]?.completed === true) {
        return { consentCallCompleted: true };
      } else {
        return { consentCallCompleted: false };
      }
    } else {
      return { consentCallCompleted: false };
    }
  } else return { consentCallCompleted: false };
}

function consentCallRequired(
  attributes: Partial<TUserAttributes>
): { consentCallRequired: boolean } {
  const { stripe_purchases } = attributes;
  if (stripe_purchases) {
    let data: any[] = stripe_purchases;
    if (
      additionalVerbalHIVConsentState(attributes)
        .additionalVerbalHIVConsentState === true
    ) {
      if (skuChecker(data?.[0]?.sku).hiv_included === true) {
        return { consentCallRequired: true };
      } else if (
        skuChecker(data?.[0]?.sku).hiv_included === false &&
        attributes.profile?.state === "CO"
      ) {
        return { consentCallRequired: true };
      } else if (skuChecker(data?.[0]?.sku).hiv_included === false) {
        return { consentCallRequired: false };
      } else return { consentCallRequired: true };
    } else if (
      additionalVerbalHIVConsentState(attributes)
        .additionalVerbalHIVConsentState === false
    ) {
      return { consentCallRequired: false };
    } else return { consentCallRequired: true };
  } else return { consentCallRequired: true };
}

function editable(attributes: Partial<TUserAttributes>): { editable: boolean } {
  const { user_progress_level } = attributes;
  if (user_progress_level === "registered") {
    return { editable: true };
  } else if (user_progress_level === "purchased") {
    return { editable: true };
  } else if (profileComplete(attributes).profileComplete === false) {
    return { editable: true };
    // } else if (user_progress_level === "processed") {
    //   return { editable: true };  // LET WOMEN UPDATE LATER? MAY CAUSE PROBLEMS WITH PWN THEY EXPECT SAME DATA
  } else return { editable: false };
}

function unpurchaseable(
  attributes: Partial<TUserAttributes>
): { unpurchaseable: boolean } {
  const { profile } = attributes;
  if (profile) {
    let data: Partial<TUserProfile> = profile;
    if (
      ["NJ", "NY", "RI"].find(function(element) {
        return element === data.state;
      })
    ) {
      return { unpurchaseable: true };
    } else return { unpurchaseable: false };
  } else return { unpurchaseable: true };
}

function additionalWrittenHIVConsentState(
  attributes: Partial<TUserAttributes>
): { additionalWrittenHIVConsentState: boolean } {
  const { profile } = attributes;
  if (profile) {
    let data: Partial<TUserProfile> = profile;
    if (
      ["MD"].find(function(element) {
        return element === data.state;
      })
    ) {
      return { additionalWrittenHIVConsentState: true };
    } else return { additionalWrittenHIVConsentState: false };
  } else return { additionalWrittenHIVConsentState: false };
}

function additionalVerbalHIVConsentState(
  attributes: Partial<TUserAttributes>
): { additionalVerbalHIVConsentState: boolean } {
  const { profile } = attributes;
  if (profile) {
    let data: Partial<TUserProfile> = profile;
    if (
      ["CO", "DE", "MA"].find(function(element) {
        return element === data.state;
      })
    ) {
      return { additionalVerbalHIVConsentState: true };
    } else return { additionalVerbalHIVConsentState: false };
  } else return { additionalVerbalHIVConsentState: false };
}

function readyToPurchase(
  attributes: Partial<TUserAttributes>
): { readyToPurchase: boolean } {
  const { profile } = attributes;
  if (profile) {
    let data: Partial<TUserProfile> = profile;
    if (
      data.first_name &&
      data.dob &&
      data.email &&
      data.last_name &&
      data.state
    )
      return { readyToPurchase: true };
    else return { readyToPurchase: false };
  } else return { readyToPurchase: false };
}

function readyToOrder(
  attributes: Partial<TUserAttributes>
): { readyToOrder: boolean } {
  if (
    additionalVerbalHIVConsentState(attributes).additionalVerbalHIVConsentState
  ) {
    if (
      profileComplete(attributes).profileComplete &&
      consentFormsSigned(attributes).consentFormsSigned &&
      consentCallCompleted(attributes).consentCallCompleted
    ) {
      return { readyToOrder: true };
    } else {
      return { readyToOrder: false };
    }
  } else if (
    profileComplete(attributes).profileComplete &&
    consentFormsSigned(attributes).consentFormsSigned
  ) {
    return { readyToOrder: true };
  } else return { readyToOrder: false };
}

// function OLDreadyToOrder(
//   attributes: Partial<TUserAttributes>,
//   conditionals: Partial<TUserConditionals>
// ): { readyToOrder: boolean } {
//   const { profile } = attributes;
//   const {
//     profileComplete,
//     consentFormsSigned,
//     additionalVerbalHIVConsentState
//   } = conditionals;
//   if (profile) {
//     let data: Partial<TUserProfile> = profile;
//     if (
//       additionalVerbalHIVConsentState &&
//       profileComplete &&
//       consentFormsSigned &&
//       consentCallCompleted
//     ) {
//       return { readyToOrder: true };
//     } else if (profileComplete && consentFormsSigned) {
//       return { readyToOrder: true };
//     } else return { readyToOrder: false };
//   } else return { readyToOrder: false };

// function OLDreadyToPurchase(
//   attributes: Partial<TUserAttributes>,
//   conditionals: Partial<TUserConditionals>
// ): object {
//   const { profile } = attributes;
//   const {
//     profileComplete,
//     standardWrittenConsentSigned,
//     HIVWrittenConsentSigned
//   } = conditionals;
//   if (profile) {
//     let data: Partial<TUserProfile> = profile;
//     if (
//       ["MD"].find(function(element) {
//         return element === data.state;
//       }) &&
//       profileComplete &&
//       standardWrittenConsentSigned &&
//       HIVWrittenConsentSigned
//     ) {
//       return { readyToPurchase: true };
//     } else if (profileComplete && standardWrittenConsentSigned) {
//       return { readyToPurchase: true };
//     } else return { readyToPurchase: false };
//   } else return {};
// }

function skuChecker(sku: string): { hiv_included: boolean } {
  if (ENVIRONMENT === "development") {
    if (sku === "sku_G5y8T3oTt0GfRF") {
      return { hiv_included: false };
    } else if (sku === "sku_G5y7sdOGX4Q4ZC") {
      return { hiv_included: true };
    } else return { hiv_included: true };
  } else if (ENVIRONMENT === "production") {
    if (sku === "sku_G29mqI59jjkBJc") {
      return { hiv_included: false };
    } else if (sku === "sku_G29myZm1yglTz5") {
      return { hiv_included: true };
    } else return { hiv_included: true };
  } else return { hiv_included: true };
}
