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
    fontFamily: "Noto Sans"
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Noto Sans"
  },
  text: {
    margin: 12,
    fontSize: 14,
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

// const Body = styled.Page`
//   padding-top: 35px;
//   padding-bottom: 65px;
//   padding-right: 35px;
//   padding-left: 35px;
// `;

// const Header = styled.Text`
//   color: grey;
//   font-size: 12px;
//   text-align: center;
//   margin-bottom: 20px;
// `;

// const Title = styled.Text`
//   font-size: 24px;
//   text-align: center;
//   font-family: "Oswald";
// `;

// const Subtitle = styled.Text`
//   margin: 12px;
//   font-size: 18px;
//   font-family: "Oswald";
// `;

// const Author = styled.Text`
//   font-size: 12px;
//   text-align: center;
//   margin-bottom: 40px;
// `;

// const Paragraph = styled.Text`
//   margin: 12px;
//   font-size: 14px;
//   text-align: justify;
//   font-family: "Times-Roman";
// `;

// const Picture = styled.Image`
//   margin: 15px 100px;
// `;

export default function RenderStandardConsent(props: any) {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.title}>PreConception General Informed Consent</Text>
        <Text style={styles.text}></Text>
        <Text style={styles.subtitle}>
          Why am I being asked to give consent?
        </Text>
        <Text style={styles.text}>
          You are being asked to sign this consent form because you would like
          to order preconception testing through the services provided by
          PreConception Inc. (“we” or “us”) and our partners, and we need your
          permission to facilitate these tests. You understand and agree that
          ordering these tests is voluntary, and you are under no obligation to
          do so. Please carefully read this form and speak to a healthcare
          professional if you have any questions before you sign it. You will be
          provided with a copy of this form after you sign it.
        </Text>
        <Text style={styles.text}>MINIMUM AGE CONSENT</Text>
        <Text style={styles.text}>
          Only individuals eighteen (18) years of age or older may order a Test
          Package. Do not complete this form or order a Test Package unless you
          are eighteen years of age or older. Any Test Package found to have
          been ordered by an individual under the age of eighteen will not be
          processed.
        </Text>
        <Text style={styles.subtitle}>What are the tests offered?</Text>
        <Text style={styles.text}>
          We offer one Test Package (called the Essential Test Package), which
          tests for the following: ABO, Rh Type, Antibody Screen, CBC, RPR with
          reflex, Hepatitis B Surface Antigen, HIV with reflex, Rubella IgG,
          Varicella IgG.
        </Text>
        <Text style={styles.text}>
          The “Essential” Test Package shall be referred to as the “Test
          Package.” The Test Package includes certain tests, as listed above,
          that are commonly recommended for preconception testing. It is
          possible that the Test Package does not include a test that may be
          recommended for you based on your personal medical and family history.
          Before placing an order for the Test Package, we recommend that you
          confer with a healthcare provider. To order the Test Package, you will
          need to have blood drawn, through one of our authorized providers. You
          may need to sign other forms, provide further information, or review
          other information when you have your blood drawn.
        </Text>
        <Text style={styles.subtitle}> </Text>

        <Text style={styles.subtitle}>
          The Test Package does not constitute medical advice.
        </Text>
        <Text style={styles.text}>
          All material is provided for educational purposes only and is not
          intended to be a substitute for a consultation with your healthcare
          provider. The Test Package is not intended to diagnose, treat, or cure
          disease. You are strongly encouraged to consult and work with an
          experienced healthcare practitioner. We do not engage in rendering
          medical advice or services. Individuals with health disorders, medical
          conditions, or any condition needing medical supervision assume full
          responsibility for obtaining such professional medical assistance.
          Consult your physician regarding any symptoms or medical conditions.
          We specifically disclaim any expressed or implied warranties of
          merchantability or fitness for any particular usage, application, or
          purpose. We do not recommend self-diagnosis or self-medication, and no
          information within this website or presented by us or our associates
          may be construed or interpreted as recommending self-diagnosis or
          self-medication.
        </Text>
        <Text style={styles.subtitle}>
          Where do I go to obtain the blood test and who will obtain my test
          results?
        </Text>
        <Text style={styles.text}>
          You will choose a qualified Quest Diagnostics Incorporated (“Quest”)
          Patient Service Center to administer the Test Package you choose. Upon
          completion of the testing, you will be sent a custom report with your
          lab results and an explanation of those results though a secure email
          or via an online patient portal. After obtaining your test results,
          you may also choose to have an educational call with one of our
          qualified staff members to discuss any questions you may have. This
          call is merely educational and does not constitute medical advice. You
          should contact your healthcare provider for any medical advice. This
          service does not replace a preconception visit with a healthcare
          provider but can be helpful for navigating those conversations.
        </Text>
        <Text style={styles.text}>
          Your results will be released to or viewed by us, Quest, PWN Health,
          and healthcare providers contracted under PWN Health. PreConception,
          Quest, and PWN Health and its healthcare providers will release to
          each other and share your results and other health or personal
          information, as needed, for provision of our services and the Test
          Package. PWN Health is a partner assisting us in the ordering of tests
          and coordination of results. Positive and/or abnormal results to
          certain tests in the Test Package may also be released to health
          officials or others as required under applicable state law.
        </Text>
        <Text style={styles.text}>
          If a laboratory test result is outside normal range, you are
          encouraged to see your healthcare provider. Some tests, to be
          validated, will need to be repeated at the discretion of a healthcare
          provider. Laboratory test results may vary depending upon age, sex,
          time of day blood sample is taken, diet, medications, and the limits
          of modern technology. A single laboratory test or group of tests
          cannot guarantee good health. False positive and false negative test
          results are possible. The results of your Test Package only constitute
          a partial snapshot of your state of health and do not represent a
          medical diagnosis or treatment of disease.
        </Text>
        <Text style={styles.text}>
          It is solely your responsibility to review your results and, if
          necessary, follow-up with your healthcare provider. All individuals
          are required to keep up to date contact information on record with
          PreConception so that we may contact you regarding your results.
          Failure to review your results and contact a healthcare provider can
          result in serious health consequences should your test results be
          positive or abnormal.
        </Text>
        <Text style={styles.subtitle}>
          Your Consent and Our Limitation of Liability
        </Text>
        <Text style={styles.text}>
          You are ordering the above Test Package on a voluntary basis and
          should understand the benefits, risks, and complications associated
          with these tests. By signing this document, you are acknowledging that
          you understand the blood tests that you are ordering and your
          willingness to accept any risks and complications.
        </Text>
        <Text style={styles.text}>
          You, your successors, heirs, executors, administrators, and assigns,
          do hereby forever release and discharge PreConception Inc. and its
          employees, directors, owners, and representatives from any and all
          liabilities, claims, demands, actions, damages, and causes of action,
          which may result from your participation in this program.
        </Text>
        <Text style={styles.text}>
          By signing this document, you hereby authorize release of your test
          results and other health or personal information by, to, and between
          PreConception Inc., PWN Health, healthcare providers contracted under
          PWN Health, and Quest Diagnostics Incorporated.
        </Text>
        <Text style={styles.text}>
          Should you order any genetic testing from PreConception, you further
          authorize release of your test results and other health or personal
          information by, to, and between PreConception Inc., PWN Health, and
          healthcare providers contracted under PWN Health, Quest Diagnostics
          Incorporated, and Invitae Corporation.
        </Text>
        <Text style={styles.text}>
          Please note that tests performed through Invitae are not part of
          PreConception’s services. All ordering and all results will be
          processed through Invitae’s website and will be subject to Invitae’s
          terms and conditions.
        </Text>
        <Text style={styles.text}>
          PRECONCEPTION IS NOT RESPONSIBLE FOR ANY TESTS PERFORMED BY INVITAE
          AND PRECONCEPTION HEREBY EXPRESSLY DISCLAIMS ANY LIABILITY FOR SUCH
          TESTS.
        </Text>
        <Text style={styles.text}>
          By signing this document, you hereby represent that you are eighteen
          years of age or older and that you are a resident of the state you
          provided to PreConception while ordering your Test Package.
        </Text>
        <Text style={styles.text}>
          The terms of this document are applicable as enforceable under the law
          of the state in which you reside.
        </Text>
        <Text style={styles.subtitle}>Signature:</Text>
        <Text
          style={styles.subtitle}
          render={() => {
            return `${props.signature}`;
          }}
        />
        <Text style={styles.subtitle}>Date:</Text>
        <Text
          style={styles.subtitle}
          render={() => {
            return `${new Date().toLocaleString()}`;
          }}
        />
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
