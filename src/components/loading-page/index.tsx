"use client";

import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { PropsWithChildren } from "react";

interface LoadingPageProps extends PropsWithChildren {
  session: Session | null;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ children, session }) => {
  if (!session) {
    return "Loading or not authenticated...";
  }

  return <>{children}</>;
};

export default LoadingPage;
