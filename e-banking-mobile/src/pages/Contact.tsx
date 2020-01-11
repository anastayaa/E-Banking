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
  IonIcon,
  IonText
} from "@ionic/react";
import React from "react";
import { person } from "ionicons/icons";

const Contact: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Contact</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonLabel color="danger">Mon Conseiller</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonIcon slot="start" icon={person} color="primary"></IonIcon>
            <IonTitle>Soumia Agent</IonTitle>
            <IonLabel>0524625262</IonLabel>
            <IonText>soumia.agent@cihbank.ma</IonText>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Contact;
