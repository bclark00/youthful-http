import { Document, Font, Page, StyleSheet, Text } from "@react-pdf/renderer";
import React from "react";
//@ts-ignore
import font from "../../../../assets/fonts/NotoSans-Regular.ttf/Regular.ttf";

Font.register({
  family: "Noto Sans",
  src: font
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Noto Sans",
    //@ts-ignore
    textDecorationLine: "underline"
  },
  subtitle: {
    fontSize: 14,
    margin: 6,
    fontFamily: "Noto Sans"
  },
  text: {
    margin: 1,
    fontSize: 10,
    textAlign: "justify",
    fontFamily: "Noto Sans"
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey"
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey"
  }
});

export default function RenderMDHIVTestingConsentForm(props: any) {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.title}>
          Informed Consent and Agreement to HIV Testing
        </Text>
        <Text style={styles.subtitle}>
          I understand the following information, which I have read or has been
          read to me:
        </Text>
        <Text style={styles.text}>
          • Blood, or another body fluid or tissue sample, will be tested for
          human immunodeficiency virus (HIV) infection;
        </Text>
        <Text style={styles.text}>
          • Consent to be tested for HIV, the virus that causes AIDS, should be
          given FREELY;
        </Text>
        <Text style={styles.text}>
          • Results of this test, like all medical records, are confidential,
          but confidentiality cannot be guaranteed; and
        </Text>
        <Text style={styles.text}>
          • If positive test results become known, an individual may experience
          discrimination from family or friends and at school or work.
        </Text>
        <Text style={styles.subtitle}>What a NEGATIVE Result Means:</Text>
        <Text style={styles.text}>
          • A negative test means that HIV infection has not been found at the
          time of the test.
        </Text>
        <Text style={styles.subtitle}>What a POSITIVE Result Means:</Text>
        <Text style={styles.text}>
          • A positive HIV test means that a person is infected with HIV and can
          transmit the virus by having sex, sharing needles, childbearing (from
          mother to child), breastfeeding, or donating organs, blood, plasma,
          tissue, or breast milk.
        </Text>
        <Text style={styles.text}>
          • A positive HIV test DOES NOT mean a diagnosis of AIDS -- other tests
          are needed.
        </Text>
        <Text style={styles.subtitle}>
          What Will Happen if the Test is Positive:
        </Text>
        <Text style={styles.text}>
          • A copy of the Department of Health and Mental Hygiene's publication
          "Information for HIV Infected Persons" will be provided;
        </Text>
        <Text style={styles.text}>
          • The health department or my doctor will offer advice about services
          that are available;
        </Text>
        <Text style={styles.text}>
          • Women who are pregnant or may become pregnant will be told of
          treatment options which may reduce the risk of transmitting HIV to the
          unborn child;
        </Text>
        <Text style={styles.text}>
          • Information will be provided on how to keep from transmitting HIV
          infection;
        </Text>
        <Text style={styles.text}>
          • My name will be reported to the health department for tests that
          indicate HIV infection. This includes, but is not limited to: HIV
          Antibody (Western blot), HIV Viral Load (RNA or DNA quantification),
          HIV viral sequencing or HIV p24 antigen tests;
        </Text>
        <Text style={styles.text}>
          • My name will be reported to the health department if my doctor finds
          that I have AIDS;
        </Text>
        <Text style={styles.text}>
          • I will be offered assistance in notifying and referring my partners
          for services. If I refuse to notify my partners, a doctor may notify
          them or have a representative of the local health department do so. If
          a representative of the local health department notifies my partners,
          my name will not be used. Maryland law requires that when a local
          health department knows of my partners, it must refer them for care,
          support, and treatment.
        </Text>
        <Text style={styles.text}></Text>
        <Text style={styles.text}>
          I have been given a chance to have my questions about this test
          answered.
        </Text>
        <Text style={styles.subtitle}>
          I hereby agree to be tested for HIV infection.
        </Text>
        <Text style={styles.subtitle}></Text>
        <Text style={styles.subtitle}>First Name, Middle Init., Last Name</Text>
        <Text style={styles.subtitle}></Text>
        <Text style={styles.subtitle}>
          Signature of Individual to be Tested Date
        </Text>
        <Text style={styles.subtitle}></Text>
        <Text style={styles.subtitle}>
          Signature of Counselor or Health Care Provider Date
        </Text>
        <Text style={styles.subtitle}></Text>
        <Text style={styles.header}></Text>
        <Text style={styles.text}></Text>
        <Text style={styles.header}></Text>
        <Text style={styles.header}></Text>
        <Text style={styles.header}></Text>
        <Text style={styles.header}>
          State of Maryland - DHMH AIDS Administration Form 4667 (revised
          5/2007)
        </Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
}
