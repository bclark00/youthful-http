import {
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";
import {
  analytics,
  cart,
  clipboard,
  filing,
  home,
  list,
  woman
} from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import LeftMenu from "../components/LeftMenu";
import RightMenu from "../components/RightMenu";
import { AppPage } from "../declarations";
import Home from "../pages/Home";
import List from "../pages/List";
import PurchasePage from "../pages/Purchases";

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/home",
    icon: home
  },
  {
    title: "List",
    url: "/home/list",
    icon: list
  }
];

export default function() {
  return (
    <IonSplitPane contentId="main">
      <LeftMenu appPages={appPages} />
      <IonContent id="main">
        <IonTabs>
          <IonRouterOutlet id="main">
            <Route path="/dashboard" component={Home} exact={true} />
            <Route path="/purchases" component={PurchasePage} />
            <Route path="/home/list" component={List} exact={true} />

            <Route
              path="/"
              render={() => <Redirect to="/dashboard" />}
              exact={true}
            />
          </IonRouterOutlet>
          <IonTabBar slot="top">
            <IonTabButton tab="dashboard" href="/dashboard">
              <IonIcon icon={analytics} />
              <IonLabel>Dashboard</IonLabel>
            </IonTabButton>
            <IonTabButton tab="purchases" href="/purchases">
              <IonIcon icon={cart} />
              <IonLabel>Purchases</IonLabel>
            </IonTabButton>
            <IonTabButton tab="orders" href="/orders">
              <IonIcon icon={filing} />
              <IonLabel>Orders</IonLabel>
            </IonTabButton>
            <IonTabButton tab="results" href="/results">
              <IonIcon icon={clipboard} />
              <IonLabel>Results</IonLabel>
            </IonTabButton>
            <IonTabButton tab="users" href="/users">
              <IonIcon icon={woman} />
              <IonLabel>Users</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>
      <RightMenu appPages={appPages} />
    </IonSplitPane>
  );
}
