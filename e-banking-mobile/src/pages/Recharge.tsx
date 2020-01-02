import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import React from "react";

const Recharge: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Mes Recharges</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h1>La liste de mes recharges</h1>
      </IonContent>
    </IonPage>
  );
};

export default Recharge;
