import auth from "@/auth";
import Header from "@/components/header";
import { getServerSession } from "next-auth";
import React, { PropsWithChildren } from "react";

interface LayoutProps extends PropsWithChildren {
  params: { locale: string };
}

const Layout: React.FC<LayoutProps> = async ({
  children,
  params: { locale },
}) => {
  const session = await getServerSession(auth);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="container">
        <Header authenticated={!!session} locale={locale} />
      </div>
      {children}
    </div>
  );
};

export default Layout;
