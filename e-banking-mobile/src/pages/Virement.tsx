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
  IonItem,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonButton,
  IonSelect,
  IonSelectOption
} from "@ionic/react";
import React from "react";
import { personAdd } from "ionicons/icons";
import { IAccount } from "../models/IAccount";
import { GetAccountBeneficiaries } from "../actions/AccountActions";

const Virement: React.FC = () => {
  const [accountBeneficiaries, setAccountBeneficiaries] = React.useState<
    IAccount[]
  >([]);

  React.useEffect(() => {
    GetAccountBeneficiaries(1).then(data => {
      setAccountBeneficiaries(data);
    });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Virements</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle color="danger">Compte à débiter</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>MONSIEUR ANAS TAYAA 256566666***67888</IonText>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle color="danger">Efféctuer un virement</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <form>
              <IonItem>
                <IonLabel>Montant:</IonLabel>
                <IonInput type="text" name="ammount"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>Motif:</IonLabel>
                <IonInput type="text" name="motif"></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>Choisissez votre bénéficiaire</IonLabel>
                <IonSelect
                  name="beneficiary"
                  placeholder="Choisissez votre bénéficiaire"
                  okText="Ok"
                  cancelText="Annuler"
                >
                  <IonSelectOption value="None">None</IonSelectOption>
                  {accountBeneficiaries.map((beneficiary, index) => {
                    return (
                      <IonSelectOption
                        key={index}
                        value={beneficiary.customer.id}
                      >
                        {beneficiary.customer.firstName}
                      </IonSelectOption>
                    );
                  })}
                </IonSelect>
              </IonItem>
              <IonButton color="danger">Suivant</IonButton>
            </form>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle color="danger">Ajouter un Bénéficiaire</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonButton color="danger">
              <IonIcon slot="start" icon={personAdd}></IonIcon>
              Ajouter un Bénéficiaire
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonList>
          <IonListHeader>
            <IonLabel color="danger">Historique</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonTitle>31/12/2019</IonTitle>
            <IonLabel>ARGHAZAL</IonLabel>
            <IonText>200.00</IonText>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Virement;
