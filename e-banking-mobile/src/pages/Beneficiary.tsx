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
  IonItem
} from "@ionic/react";
import React from "react";
import { GetAccountBeneficiaries } from "../actions/AccountActions";
import { IAccount } from "../models/IAccount";

const Beneficiary: React.FC = () => {
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
          <IonTitle>Mes Bénéficiaires</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonLabel color="danger">Bénéficiaires</IonLabel>
          </IonListHeader>
          {accountBeneficiaries.map((beneficiary, index) => {
            return (
              <IonItem key={index}>
                {beneficiary.customer.gender === "Male" ? (
                  <IonTitle>
                    M. {beneficiary.customer.firstName}{" "}
                    {beneficiary.customer.lastName}
                  </IonTitle>
                ) : (
                  <IonTitle>
                    Mme. {beneficiary.customer.firstName}{" "}
                    {beneficiary.customer.lastName}
                  </IonTitle>
                )}
                <IonLabel>{beneficiary.accountNumber}</IonLabel>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Beneficiary;
