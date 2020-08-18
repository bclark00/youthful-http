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

export default function RenderSensitiveResultTransmissionConsent(props: any) {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.title}>PreConception HIV Consent</Text>
        <Text style={styles.text}></Text>
        <Text style={styles.subtitle}>
          Specific Information About HIV and HIV Testing
        </Text>
        <Text style={styles.text}>
          The Test Package includes a test for the Human Immunodeficiency Virus
          (HIV). Please read below for further information on HIV and HIV
          testing.
        </Text>
        <Text style={styles.text}>WHAT IS HIV AND HOW IS IT TRANSMITTED?</Text>
        <Text style={styles.text}>
          HIV is the virus that causes Acquired Immunodeficiency Syndrome
          (AIDS). It passes from a person with HIV infection to an uninfected
          person during unprotected sex (vaginal or anal sex without a condom).
          HIV also passes between persons through contact with blood when
          sharing needles (piercing, tattooing, or injecting drugs of any kind).
          HIV can pass from a pregnant woman to a fetus during pregnancy or
          birth. A mother may also pass HIV to her infant when breastfeeding
        </Text>
        <Text style={styles.text}>WHAT IS AN HIV TEST?</Text>
        <Text style={styles.text}>
          Tests for HIV usually measure HIV antibodies and/or antigens,
          substances your body makes if you have an HIV infection. The test will
          be performed by withdrawing a sample of blood and testing for the HIV
          antibodies. As part of the testing process, you may participate in
          pre-test and/or post-test counseling, depending on requirements of
          your state. Additionally, if you test positive, you may be asked by a
          relevant state health department about your sexual or needle-sharing
          partners and these individuals may be contacted to alert them that
          they may be at risk for contracting HIV, if required by applicable
          state law. We will never ask these questions.
        </Text>
        <Text style={styles.text}>
          A positive test result means that you have an HIV infection and that
          you can pass it to others. In rare instances, a test result may
          indicate that a person has antibodies to the virus when the person
          does not have the antibodies (a false positive).
        </Text>
        <Text style={styles.text}>
          A negative test result means you do not have HIV infection unless, in
          rare instances, you were exposed to HIV so recently that an HIV test
          cannot detect it.
        </Text>
        <Text style={styles.text}>WHY IS AN HIV TEST IMPORTANT FOR ME?</Text>
        <Text style={styles.text}>
          HIV testing is a routine part of health care. About one out of five
          persons living with HIV do not know they have HIV infection. Because
          they are not aware of this, they are not getting early treatment which
          can help keep them healthy. They may also be passing HIV to others
          without knowing it. If you test negative for HIV it is important to
          continue routine testing to ensure that you have remained uninfected.
        </Text>
        <Text style={styles.text}>
          It is important for you to know whether or not you are infected
          because, if you have an infection, you can obtain important medical
          care. Although HIV treatment is not curative, you can take HIV
          medications that can help increase the quality of your life and
          prevent complications from HIV infection. Treatment for HIV is
          effective, has few or no side effects, and is easy to take.
        </Text>
        <Text style={styles.text}>
          Detecting an HIV infection prior to conception is also important.
          Pregnant women with HIV infection are much less likely to pass HIV to
          their fetus during pregnancy or birth when they are receiving HIV
          medication.
        </Text>
        <Text style={styles.text}>HOW CAN I REDUCE MY RISK?</Text>
        <Text style={styles.text}>
          Not sharing needles and practicing safer sex will help protect against
          HIV, Hepatitis C, Hepatitis B, and sexually transmitted diseases
          (STDs). You can reduce your risk, and partners can keep each other
          safe by knowing their HIV status and getting HIV treatment or taking
          HIV pre-exposure prophylaxis.
        </Text>
        <Text style={styles.text}>
          CAN I RECEIVE FREE AND/OR ANONYMOUS TESTING?
        </Text>
        <Text style={styles.text}>
          Anonymous HIV testing (without giving your name) is available at
          certain public testing sites.
        </Text>
        <Text style={styles.text}>
          Florida: Florida offers anonymous testing for HIV. Anonymous testing
          locations can be found on the Florida Department of Health’s website
          at the following link:
          https://flhiv.doh.state.fl.us/ClinicSearch/ClinicSearch.aspx. Only
          sites marked with an “A” provide anonymous services.
        </Text>
        <Text style={styles.text}>
          Hawaii: Free and anonymous testing for HIV is available in the state
          of Hawaii through the Department of Health and certain community
          agencies.
        </Text>
        <Text style={styles.text}>
          West Virginia: Anonymous testing for HIV is available at a local or
          county health department.
        </Text>
        <Text style={styles.text}>DO I HAVE A CHOICE?</Text>
        <Text style={styles.text}>
          Yes, it’s your choice. HIV testing is voluntary and you can decide if
          you want an HIV test. Health care services and treatment cannot be
          denied if you decide not to be tested. If you wish to decline HIV
          testing, you may do so during the checkout process by selecting the
          toggle that says “I wish to opt out of HIV testing”. Consent to HIV
          testing may be withdrawn at any time prior to receiving your blood
          draw. If you need to cancel your order after your order has been
          placed, please contact us at tests@preconceptiontest.com with “CANCEL
          HIV ORDER” in the subject line
        </Text>
        <Text style={styles.text}>
          WHO WILL BE TOLD IF I HAVE HIV INFECTION?
        </Text>
        <Text style={styles.text}>
          State law permits only a very limited number of people to know if
          someone has HIV infection. Strict state laws safeguard confidential
          (private) information on HIV. Positive HIV test results are reported
          to public health officials with sufficient information to identify the
          test subject and will be reported to other individuals or entities as
          required under the law. Your results will also be viewed by or
          released to PreConception Inc., PWN Health and PWN Health’s health
          care providers, and Quest Diagnostics Incorporated to facilitate
          notice of your test results to you. Individuals who are tested for HIV
          have a right to confidential treatment of the results of the test and
          to information identifying the subject of the test, to the extent
          provided by law.
        </Text>
        <Text style={styles.text}>
          WILL I BE DISCRIMINATED AGAINST IF I HAVE HIV?
        </Text>
        <Text style={styles.text}>
          No. It is illegal to discriminate against a person because of their
          HIV status.
        </Text>
        <Text style={styles.text}>
          WHO CAN ASSIST SOMEONE WHO IS RECENTLY DIAGNOSED WITH HIV INFECTION?
        </Text>
        <Text style={styles.text}>
          Healthcare providers can help a person who has HIV infection in
          obtaining the services they may need, including assistance from the
          local health department.
        </Text>
        <Text style={styles.text}>
          There are community-based agencies like AIDS service organizations and
          other agencies that can help persons with HIV infection find services
          like counseling, case management, drug payment assistance, housing,
          legal assistance, as well as several other services. These
          organizations can also provide you with additional information about
          HIV, HIV transmission, and risk reduction. For more information on HIV
          and HIV transmission or risk reduction you can visit: www.hiv.gov.
        </Text>
        <Text style={styles.text}>
          You, your successors, heirs, executors, administrators, and assigns,
          do hereby forever release and discharge PreConception Inc. and its
          employees, directors, owners, and representatives from any and all
          liabilities, claims, demands, actions, damages, and causes of action,
          which may result from your participation in this program. By signing
          this document, you agree that all of your questions have been answered
          and that you understand that an HIV test will be performed on you and
          that you have chosen voluntarily and without fraud, coercion, or
          duress to be tested for HIV.
        </Text>
        <Text style={styles.text}>
          By signing this document, you authorize release of your test results
          to PreConception Inc., PWN Health, healthcare providers contracted
          under PWN Health, and Quest Diagnostics Incorporated and release to
          health or other officials as required by applicable state law. By
          signing this document, you hereby represent that you are eighteen
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
