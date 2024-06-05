import React, { PropsWithChildren } from "react";
import Sidebar from "@/components/sidebar";
import Header from "./components/header";
import { TransactionProvider } from "@/contexts";

interface LayoutProps extends PropsWithChildren {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <TransactionProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <Sidebar />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <Header />
          {children}
        </div>
      </div>
    </TransactionProvider>
  );
};

export default Layout;
