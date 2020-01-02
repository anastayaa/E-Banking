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
  IonIcon,
  IonLabel,
  IonItem
} from "@ionic/react";
import React from "react";

const Beneficiary: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Mes Bénéficiaires</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonIcon slot="start"></IonIcon>
            <IonLabel color="danger">Bénéficiaires</IonLabel>
          </IonListHeader>
          <IonList>
            <IonItem>
              <IonTitle>M. HAKIM ARGHAZAL</IonTitle>
              <IonLabel>3445666666***222</IonLabel>
            </IonItem>
          </IonList>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Beneficiary;
