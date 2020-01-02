import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText
} from "@ionic/react";
import {
  book,
  build,
  colorFill,
  grid,
  card,
  wallet,
  stats,
  phonePortrait
} from "ionicons/icons";
import React from "react";
import "./Home.css";

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>CIH BANK</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard className="welcome-card">
          <img src="/assets/cih.jpeg" alt="" />
          <IonCardHeader>
            <IonCardSubtitle>La banque CIH</IonCardSubtitle>
            <IonCardTitle>Bienvenue chez CIH BANK</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>La banque de demain dès aujourd'hui</p>
          </IonCardContent>
        </IonCard>

        <IonList lines="full">
          <IonListHeader>
            <IonLabel>ANAS TAYAA 256566666***67888</IonLabel>
            <IonIcon slot="start" icon={phonePortrait}></IonIcon>
          </IonListHeader>
          <IonItem>
            <IonIcon slot="start" color="primary" icon={wallet} />
            <IonLabel>Mes Comptes</IonLabel>
            <IonText>Monsieur ANAS TAYAA</IonText>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" color="primary" icon={card} />
            <IonLabel>Mes Cartes</IonLabel>
            <IonText>C-JEUNE EMV MULT</IonText>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" color="primary" icon={stats} />
            <IonLabel>Statisiques</IonLabel>
            <IonText>Débit: 6000.00 MAD</IonText>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
