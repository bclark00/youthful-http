import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonPopover,
  IonRow,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { informationCircleOutline } from "ionicons/icons";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
//@ts-ignore
import privacyPDF from "../../assets/docs/privacy_policy.pdf";
//@ts-ignore
import termsPDF from "../../assets/docs/terms_of_service.pdf";
import Store from "../../store/index";

const Menu = () => {
  const [showPopover, setShowPopover] = useState(false);
  const { attributes } = Store.useContainer();
  return (
    <IonMenu contentId="main" type="overlay">
      <IonHeader>
        <IonToolbar>
          <IonRow>
            <IonCol>
              <IonTitle className="ion-no-padding ion-padding-start">
                PreConception
              </IonTitle>
            </IonCol>
          </IonRow>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {attributes.user_progress_level === "registered" ||
          (attributes.user_progress_level === "processed" && (
            <IonList>
              <IonListHeader style={{ fontWeight: 700 }}>
                Test Package
              </IonListHeader>
              {/*
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/order/plus">
              <IonLabel color="secondary" style={{ fontWeight: 700 }}>
                Plus +
              </IonLabel>
            </IonItem>
          </IonMenuToggle>
        */}
              <IonMenuToggle autoHide={false}>
                <IonItem routerLink="/order">
                  <IonLabel color="primary">Essential</IonLabel>
                </IonItem>
              </IonMenuToggle>
              {/*
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/tab3" routerDirection="none">
              <IonLabel color="primary">Close the Gap</IonLabel>
              <IonBadge slot="end" color="light">
                limited time
              </IonBadge>
            </IonItem>
          </IonMenuToggle>
        */}
            </IonList>
          ))}
        <IonList>
          <IonListHeader style={{ fontWeight: 700 }}>
            Professional Care
          </IonListHeader>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/tab3" routerDirection="none">
              <IonLabel>One-on-One Call</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>

        <IonList>
          <IonListHeader style={{ fontWeight: 700 }}>
            {attributes.profile.first_name
              ? attributes.profile.first_name
              : "You"}
          </IonListHeader>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/results" routerDirection="none">
              <IonLabel>Your Results</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/profile" routerDirection="none">
              <IonLabel>Your Profile</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
        <IonList>
          <IonListHeader style={{ fontWeight: 700 }}>Who We Are</IonListHeader>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/ourstory" routerDirection="none">
              <IonLabel>Our Story</IonLabel>
            </IonItem>
          </IonMenuToggle>
          {/*
            <IonMenuToggle autoHide={false}>
              <IonItem routerLink="/tab3" routerDirection="none">
                <IonLabel>Our Purpose</IonLabel>
              </IonItem>
            </IonMenuToggle>
          */}
        </IonList>
        <IonList>
          <IonListHeader style={{ fontWeight: 700 }}>How We Work</IonListHeader>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/science" routerDirection="none">
              <IonLabel>The Science</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/privacy" routerDirection="none">
              <IonLabel>Your Privacy</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/process" routerDirection="none">
              <IonLabel>Our Process</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
        <IonList>
          <IonListHeader style={{ fontWeight: 700 }}>Resources</IonListHeader>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/faq" routerDirection="none">
              <IonLabel>Frequently Asked Questions</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/checklist" routerDirection="none">
              <IonLabel>PreConception Checklist</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
        <IonList>
          <IonListHeader style={{ fontWeight: 700 }}>Tools</IonListHeader>
          <IonMenuToggle autoHide={false}>
            <IonButton size="small" shape="round" style={{ marginLeft: 16 }}>
              Send Your Results
            </IonButton>
          </IonMenuToggle>
        </IonList>
        <IonList>
          <IonListHeader style={{ fontWeight: 700 }}>References</IonListHeader>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/faq" routerDirection="none">
              <IonLabel>Statistics</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
        {/*
          <IonList>
            <IonListHeader style={{ fontWeight: 700 }}>
              Health Trackers
            </IonListHeader>
            <IonMenuToggle autoHide={false}>
              <IonItem routerLink="/tab3" routerDirection="none">
                <IonLabel>BMI Calculator</IonLabel>
              </IonItem>
            </IonMenuToggle>
            {
              // appPages.map((appPage, index) => {
              // return (
              //   <IonMenuToggle key={index} autoHide={false}>
              //     <IonItem routerLink={appPage.url} routerDirection="none">
              //       <IonIcon slot="start" icon={appPage.icon} />
              //       <IonLabel>{appPage.title}</IonLabel>
              //     </IonItem>
              //   </IonMenuToggle>
              // );
              // })
            }
          </IonList>
        */}
        {/*
        
          <IonList>
            <IonListHeader style={{ fontWeight: 700 }}>
              Preconception 101
            </IonListHeader>
  
            <IonMenuToggle autoHide={false}>
              <IonItem routerLink="/tab3" routerDirection="none">
                <IonLabel color="primary">Anytime Calls</IonLabel>
                <IonBadge slot="end" color="tertiary">
                  coming soon
                </IonBadge>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle autoHide={false}>
              <IonItem routerLink="/tab3" routerDirection="none">
                <IonLabel color="primary">Online Community</IonLabel>
                <IonBadge slot="end" color="tertiary">
                  coming soon
                </IonBadge>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle autoHide={false}>
              <IonItem routerLink="/tab3" routerDirection="none">
                <IonLabel color="primary">Direct Messages</IonLabel>
                <IonBadge slot="end" color="tertiary">
                  coming soon
                </IonBadge>
              </IonItem>
            </IonMenuToggle>
  
            <IonMenuToggle autoHide={false}>
              <IonItem routerLink="/tab3" routerDirection="none">
                <IonLabel color="primary">Open Questions</IonLabel>
                <IonBadge slot="end" color="tertiary">
                  coming soon
                </IonBadge>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle autoHide={false}>
              <IonItem routerLink="/tab3" routerDirection="none">
                <IonLabel color="primary">
                  <strong>Membership +</strong>
                </IonLabel>
                <IonBadge slot="end" color="tertiary">
                  coming soon
                </IonBadge>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        */}
        {/*
  <IonList>
    <IonListHeader style={{ fontWeight: 700 }}>Partners</IonListHeader>
    <IonMenuToggle autoHide={false}>
      <IonItem routerDirection="none">
        <IonLabel>Quest Diagnostics</IonLabel>
      </IonItem>
    </IonMenuToggle>
    <IonMenuToggle autoHide={false}>
      <IonItem routerLink="/tab3" routerDirection="none">
        <IonLabel>TrueVault</IonLabel>
      </IonItem>
    </IonMenuToggle>
    <IonMenuToggle autoHide={false}>
      <IonItem routerLink="/tab3" routerDirection="none">
        <IonLabel>Invitae</IonLabel>
      </IonItem>
    </IonMenuToggle>
  </IonList>
*/}
      </IonContent>
      <IonFooter>
        <IonPopover
          isOpen={showPopover}
          onDidDismiss={e => setShowPopover(false)}
        >
          <IonList>
            <IonListHeader>Information</IonListHeader>
            <IonItem>
              <IonLabel>Version 1.9</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <a href={termsPDF} target="blank">
                  Terms of Service
                </a>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>
                <a href={privacyPDF} target="blank">
                  Privacy Policy
                </a>
              </IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel className="ion-text-wrap" style={{ fontSize: 12 }}>
                © 2019 - {new Date().getFullYear()} PreConception Inc. All
                Rights Reserved.
              </IonLabel>
            </IonItem>
          </IonList>
        </IonPopover>
        <IonTabBar>
          <IonTabButton
            href=""
            className="ion-padding-start"
            onClick={e => {
              e.preventDefault();
              setShowPopover(true);
            }}
          >
            <IonIcon icon={informationCircleOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonFooter>
    </IonMenu>
  );
};

export default withRouter(Menu);
