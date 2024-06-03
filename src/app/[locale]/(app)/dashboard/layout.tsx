import LoadingPage from "@/components/loading-page";
import React, { PropsWithChildren } from "react";

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <LoadingPage>{children}</LoadingPage>;
};

export default AppLayout;
