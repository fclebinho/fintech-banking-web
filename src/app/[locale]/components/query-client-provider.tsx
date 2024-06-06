"use client";

import React, { PropsWithChildren } from "react";
import {
  QueryClient,
  QueryClientProvider as QueryClientProvideryTanstack,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const QueryClientProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvideryTanstack client={queryClient}>
      {children}
    </QueryClientProvideryTanstack>
  );
};

export default QueryClientProvider;
