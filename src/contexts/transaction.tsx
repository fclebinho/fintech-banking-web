"use client";

import React, { PropsWithChildren, useContext } from "react";

const mock = [
  {
    id: "1",
    customer: {
      fullName: "Liam Johnson",
      email: "liam@example.com",
    },
    type: "Sale",
    status: "Fulfilled",
    date: Date.now(),
    amount: 250.0,
  },
  {
    id: "2",
    customer: {
      fullName: "Olivia Smith",
      email: "olivia@example.com",
    },
    type: "Refund",
    status: "Declined",
    date: Date.now(),
    amount: 150.0,
  },
  {
    id: "3",
    customer: {
      fullName: "Noah Williams",
      email: "noah@example.com",
    },
    type: "Subscription",
    status: "Fulfilled",
    date: Date.now(),
    amount: 350.0,
  },
  {
    id: "4",
    customer: {
      fullName: "Emma Brown",
      email: "emma@example.com",
    },
    type: "Sale",
    status: "Fulfilled",
    date: Date.now(),
    amount: 450.0,
  },
  {
    id: "5",
    customer: {
      fullName: "Liam Johnson",
      email: "liam@example.com",
    },
    type: "Sale",
    status: "Fulfilled",
    date: Date.now(),
    amount: 250.0,
  },
  {
    id: "6",
    customer: {
      fullName: "Olivia Smith",
      email: "olivia@example.com",
    },
    type: "Refund",
    status: "Declined",
    date: Date.now(),
    amount: 150.0,
  },
  {
    id: "7",
    customer: {
      fullName: "Noah Williams",
      email: "noah@example.com",
    },
    type: "Subscription",
    status: "Fulfilled",
    date: Date.now(),
    amount: 350.0,
  },
  {
    id: "8",
    customer: {
      fullName: "Emma Brown",
      email: "emma@example.com",
    },
    type: "Sale",
    status: "Fulfilled",
    date: Date.now(),
    amount: 450.0,
  },
];

type Customer = {
  fullName: string;
  email: string;
};

type Transaction = {
  id: string;
  customer: Customer;
  type: string;
  status: string;
  date: number;
  amount: number;
};

type TransactionContextProps = {
  data: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  removeTransaction: (transaction: Transaction) => void;
};

const TransactionContext = React.createContext<TransactionContextProps>(
  {} as TransactionContextProps
);

interface TransactionProviderProps extends PropsWithChildren {}

export const TransactionProvider: React.FC<TransactionProviderProps> = ({
  children,
}) => {
  const [data, setData] = React.useState<Transaction[]>(mock);

  const addTransaction = (transaction: Transaction) => {};
  const removeTransaction = (transaction: Transaction) => {};

  return (
    <TransactionContext.Provider
      value={{ data, addTransaction, removeTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => useContext(TransactionContext);
