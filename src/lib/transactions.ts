import { Transaction } from "@/contexts";
import api from "./axios";

// With BaseURL
// api.defaults.baseURL = process.env.NEXT_PUBLIC_TRANSACTION_API_URL;

const url = {
  transaction: {
    list: "/transactions",
  },
};

export const fetchTransactions = () =>
  api.get<Transaction[]>(url.transaction.list).then((res) => res.data);
