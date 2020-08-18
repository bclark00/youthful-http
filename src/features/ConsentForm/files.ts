//@ts-ignore
import sensitiveResultTransmissionConsent from "../../assets/docs/hiv_transmission_consent.pdf";
//@ts-ignore
import MDHIVTestingConsentForm from "../../assets/docs/maryland_hiv_consent_form.pdf";
//@ts-ignore
import standardConsent from "../../assets/docs/standard_written_consent.pdf";
import RenderMDHIVTestingConsentForm from "./Signer/PDFs/MDHIVTestingConsentForm";
import RenderSensitiveResultTransmissionConsent from "./Signer/PDFs/SensitiveResultTransmissionConsent";
import RenderStandardConsent from "./Signer/PDFs/StandardConsent";

export const MDConsentFiles = [
  {
    label: "Testing Consent Form",
    file_name: "Standard-Testing-Written-Consent",
    view_file: standardConsent,
    render_file: RenderStandardConsent,
    completed: false
  },
  {
    label: "HIV Testing Form",
    file_name: "Sensitive-Result-Transmission-Consent",
    view_file: sensitiveResultTransmissionConsent,
    render_file: RenderSensitiveResultTransmissionConsent,
    completed: false
  },
  {
    label: "Marlyand Consent Form",
    file_name: "Maryland-HIV-Testing-Consent",
    view_file: MDHIVTestingConsentForm,
    render_file: RenderMDHIVTestingConsentForm,
    completed: false
  }
];

export const consentFiles = [
  {
    label: "Testing Consent Form",
    file_name: "Standard-Testing-Written-Consent",
    view_file: standardConsent,
    render_file: RenderStandardConsent,
    completed: false
  },
  {
    label: "HIV Testing Form",
    file_name: "Sensitive-Result-Transmission-Consent",
    view_file: sensitiveResultTransmissionConsent,
    render_file: RenderSensitiveResultTransmissionConsent,
    completed: false
  }
];
