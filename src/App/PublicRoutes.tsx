import { IonPage, IonRouterOutlet } from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import DirectPurchasing from "../features/DirectPurchasing";
import { DirectOrdering } from "../features/DirectPurchasing/Store";
import FAQ from "../features/FAQ";
import LandingPage from "../features/LandingPage";
import OurStory from "../features/OurStory";
import PackageComparison from "../features/PackageComparison";
import PasswordReset from "../features/PasswordReset";

export default function() {
  return (
    <DirectOrdering.Provider>
      <IonPage id="main">
        <IonRouterOutlet id="main">
          <Route path="/forgotpassword" component={PasswordReset.Page} />
          {/* <Route
            path="/order/essential"
            exact={true}
            component={EssentialPackage.Page}
          /> */}
          <Route path="/order/:id" component={PackageComparison.Details} />
          <Route path="/order" exact component={DirectPurchasing.Page} />
          <Route path="/ourstory" exact component={OurStory.Page} />
          <Route path="/start" component={LandingPage} exact />
          <Route path="/faq/:id" component={FAQ.Answer} />
          <Route path="/faq" component={FAQ.Page} exact />
          <Route exact path="/" render={() => <Redirect to="/start" />} />
          <Route exact path="/home" render={() => <Redirect to="/start" />} />
          <Route
            exact
            path="/results"
            render={() => <Redirect to="/start" />}
          />
        </IonRouterOutlet>
        {/*
          <DirectPurchasing.Modal />
        */}
        <PasswordReset.Modal />
      </IonPage>
    </DirectOrdering.Provider>
  );
}
