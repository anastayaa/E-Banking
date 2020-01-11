import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { AppPage } from "./declarations";

import Menu from "./components/Menu";
import Home from "./pages/Home";
import List from "./pages/List";
import Cart from "./pages/Card";
import { home, list, card, contact, people, paperPlane } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Beneficiary from "./pages/Beneficiary";
import Recharge from "./pages/Recharge";
import Contact from "./pages/Contact";
import Virement from "./pages/Virement";

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/home",
    icon: home
  },
  {
    title: "Mes Cartes",
    url: "/home/card",
    icon: card
  },
  { title: "Virements", url: "/home/virement", icon: paperPlane },
  {
    title: "Mes Bénéficiaires",
    url: "/home/beneficiary",
    icon: people
  },
  {
    title: "Recharges",
    url: "/home/recharge",
    icon: list
  },
  {
    title: "Contacts & Infos",
    url: "/home/contact",
    icon: contact
  }
];

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact={true} />
          <Route path="/home/list" component={List} exact={true} />
          <Route path="/home/card" component={Cart} exact={true} />
          <Route path="/home/virement" component={Virement} exact={true} />
          <Route
            path="/home/beneficiary"
            component={Beneficiary}
            exact={true}
          />
          <Route path="/home/recharge" component={Recharge} exact={true} />
          <Route path="/home/contact" component={Contact} exact={true} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
