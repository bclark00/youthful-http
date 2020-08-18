import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter
} from "react-router-dom";
import { AppPage } from "../declarations";
import PurchaseDetail from "../pages/PurchaseDetail";

interface MenuProps extends RouteComponentProps {
  appPages: AppPage[];
}

const RightMenu: React.FunctionComponent<MenuProps> = ({ appPages }) => (
  <IonMenu
    type="overlay"
    side="end"
    menuId="right"
    contentId="detail"
    maxEdgeStart={120}
  >
    <IonHeader>
      <IonToolbar>
        <IonTitle>Kristy</IonTitle>
        <IonButtons slot="end">
          <IonButton>Log out</IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent id="detail">
      <Switch>
        <Route path="/purchases/:id" component={PurchaseDetail} />
      </Switch>
    </IonContent>
  </IonMenu>
);

export default withRouter(RightMenu);
