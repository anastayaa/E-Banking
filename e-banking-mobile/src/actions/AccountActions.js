import axios from "axios";

const URL = `http://localhost:8080`;

export const GetAccountById = account_id => {
  return axios(`${URL}/api/account/${account_id}`).then(reponse => {
    console.log(reponse.data);
    return reponse.data;
  });
};

export const GetAccountBeneficiaries = account_id => {
  return axios(`${URL}/api/account/beneficiary/all/${account_id}`).then(
    reponse => {
      return reponse.data;
    }
  );
};
