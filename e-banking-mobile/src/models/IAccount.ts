import { ICustomer } from "./ICustomer";

export interface IAccount {
  id: number;
  accountNumber: string;
  balance: number;
  customer: ICustomer;
}
