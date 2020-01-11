import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonListHeader,
  IonLabel,
  IonItem,
  IonIcon
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
        <IonList>
          <IonListHeader>
            <IonLabel color="danger">Liste des Opérateurs</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonIcon src="assets/telecom.svg" slot="start"></IonIcon>
            <IonTitle>Maroc Télécom</IonTitle>
          </IonItem>
          <IonItem>
            <IonIcon src="assets/orange.svg" slot="start"></IonIcon>
            <IonTitle>Orange Maroc</IonTitle>
          </IonItem>
          <IonItem>
            <IonIcon src="assets/inwi.svg" slot="start"></IonIcon>
            <IonTitle>INWI</IonTitle>
          </IonItem>
          <IonItem>
            <IonIcon src="assets/adm.svg" slot="start"></IonIcon>
            <IonTitle>ADM - Autoroutes du Maroc</IonTitle>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Recharge;
