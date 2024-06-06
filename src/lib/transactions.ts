import { Transaction } from "@/contexts";
import { api } from "./axios";

const url = {
  transaction: {
    list: `${process.env.NEXT_PUBLIC_TRANSACTION_API_URL}/transactions`,
  },
};

export const fetchTransactions = () =>
  api.get<Transaction[]>(url.transaction.list).then((res) => res.data);
