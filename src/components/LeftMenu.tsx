import {
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { AppPage } from "../declarations";

interface MenuProps extends RouteComponentProps {
  appPages: AppPage[];
}

const LeftMenu: React.FunctionComponent<MenuProps> = ({ appPages }) => (
  <IonMenu contentId="main" type="reveal" side="start" maxEdgeStart={120}>
    <IonHeader translucent={false}>
      <IonToolbar>
        <IonTitle>PreConception</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCardHeader>
        <IonCardTitle>Test</IonCardTitle>
      </IonCardHeader>
      <IonList lines="none">
        {appPages.map((appPage, index) => {
          return (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem routerLink={appPage.url} routerDirection="none">
                <IonIcon slot="start" icon={appPage.icon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          );
        })}
      </IonList>
    </IonContent>
  </IonMenu>
);

export default withRouter(LeftMenu);
