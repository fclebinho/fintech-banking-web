import { Transaction } from "@/contexts";
import api from "./axios";

const url = {
  transaction: {
    list: `${process.env.NEXT_PUBLIC_API_URL}/users`,
  },
};

export const fetchTransactions = () =>
  api.get<Transaction[]>(url.transaction.list).then((res) => res.data);

export const createTransaction = (data: any) =>
  api.post<Transaction>("/transactions", data);
