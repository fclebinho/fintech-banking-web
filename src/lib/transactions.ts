import { Transaction } from "@/contexts";
import api from "./axios";

const url = {
  transaction: `${process.env.NEXT_PUBLIC_API_URL}/transactions`,
};

export const fetchTransactions = () =>
  api.get<Transaction[]>(url.transaction).then((res) => res.data);

export const createTransaction = (data: any) =>
  api.post<Transaction>(url.transaction, data);

export const deleteTransaction = (id: string) =>
  api.delete<Transaction>(`${url.transaction}/${id}`);
