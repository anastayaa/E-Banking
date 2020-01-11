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
import { card, wallet, stats } from "ionicons/icons";
import React from "react";
import "./Home.css";
import { IAccount } from "../models/IAccount";
import { GetAccountById } from "../actions/AccountActions";

const HomePage: React.FC = () => {
  const [account, setAccount] = React.useState<IAccount>();

  React.useEffect(() => {
    GetAccountById(1).then(data => {
      setAccount(data);
      console.log(account);
    });
  }, []);

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
            {account !== undefined && (
              <IonLabel>
                {account.customer.firstName} {account.customer.lastName}{" "}
                {account.accountNumber}
              </IonLabel>
            )}
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
