"use client";

import api from "@/lib/axios";
import React, { PropsWithChildren, useContext } from "react";

const mock = [
  {
    id: "1",
    description: "Example 1",
    type: "Sale",
    status: "Fulfilled",
    due_date: "2024-06-03T19:38:34.203Z",
    created_at: "2014-11-03T19:38:34.203Z",
    amount: 250.0,
  },
  {
    id: "2",
    description: "Example 2",
    type: "Refund",
    status: "Declined",
    due_date: "2024-06-03T19:38:34.203Z",
    created_at: "2014-11-03T19:38:34.203Z",
    amount: 150.0,
  },
  {
    id: "3",
    description: "Example 3",
    type: "Subscription",
    status: "Fulfilled",
    due_date: "2024-06-03T19:38:34.203Z",
    created_at: "2014-11-03T19:38:34.203Z",
    amount: 350.0,
  },
  {
    id: "4",
    description: "Example 4",
    type: "Sale",
    status: "Fulfilled",
    due_date: "2024-06-03T19:38:34.203Z",
    created_at: "2014-11-03T19:38:34.203Z",
    amount: 450.0,
  },
  {
    id: "5",
    description: "Example 5",
    type: "Sale",
    status: "Fulfilled",
    due_date: "2024-06-03T19:38:34.203Z",
    created_at: "2014-11-03T19:38:34.203Z",
    amount: 250.0,
  },
  {
    id: "6",
    description: "Example 6",
    type: "Refund",
    status: "Declined",
    due_date: "2024-06-03T19:38:34.203Z",
    created_at: "2014-11-03T19:38:34.203Z",
    amount: 150.0,
  },
  {
    id: "7",
    description: "Example 7",
    type: "Subscription",
    status: "Fulfilled",
    due_date: "2024-06-03T19:38:34.203Z",
    created_at: "2014-11-03T19:38:34.203Z",
    amount: 350.0,
  },
  {
    id: "8",
    description: "Example 8",
    type: "Sale",
    status: "Fulfilled",
    due_date: "2024-06-03T19:38:34.203Z",
    created_at: "2014-11-03T19:38:34.203Z",
    amount: 450.0,
  },
];

export type Transaction = {
  id: string;
  description: string;
  type: string;
  status: string;
  due_date: string;
  created_at: string;
  amount: number;
};

type TransactionContextProps = {
  data: Transaction[];
  addTransaction: (transaction: Transaction) => Promise<Transaction>;
  removeTransaction: (transaction: Transaction) => Promise<void>;
  getTransactions: () => Promise<void>;
};

const TransactionContext = React.createContext<TransactionContextProps>(
  {} as TransactionContextProps
);

interface TransactionProviderProps extends PropsWithChildren {}

export const TransactionProvider: React.FC<TransactionProviderProps> = ({
  children,
}) => {
  const [data, setData] = React.useState<Transaction[]>(mock);

  const addTransaction = (transaction: Transaction) =>
    new Promise<Transaction>((resolve, reject) => {
      setData((prev) => [...prev, transaction]);
      resolve(transaction);
    });

  const removeTransaction = (transaction: Transaction) =>
    new Promise<void>((resolve, reject) => {
      setData((prev) => prev.filter((item) => item.id !== transaction.id));
      resolve();
    });

  const getTransactions = () =>
    new Promise<void>((resolve, reject) => {
      api.get("/transactions").then((response) => {
        setData(response.data);
        resolve();
      });
    });

  return (
    <TransactionContext.Provider
      value={{ data, addTransaction, removeTransaction, getTransactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => useContext(TransactionContext);
