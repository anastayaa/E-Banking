import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonListHeader,
  IonIcon,
  IonLabel,
  IonItem,
  IonText
} from "@ionic/react";
import React from "react";
import "./Card.css";

const Card: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Mes Cartes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <IonCardHeader>
            <IonCardTitle>C-JEUNE EMV MULT</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <img src="/assets/pic14.png" alt="" />
          </IonCardContent>
        </IonCard>
        <IonList lines="full">
          <IonListHeader>
            <IonIcon slot="start"></IonIcon>
            <IonLabel color="danger">Opérations</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonTitle>21/12/2019</IonTitle>
            <IonLabel>RETRAIT GAB</IonLabel>
            <IonText>-800.00</IonText>
          </IonItem>
          <IonItem>
            <IonTitle>19/12/2019</IonTitle>
            <IonLabel>RETRAIT GAB</IonLabel>
            <IonText>-200.00</IonText>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Card;
