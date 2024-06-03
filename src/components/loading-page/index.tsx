"use client";

import { useSession } from "next-auth/react";
import { PropsWithChildren } from "react";

const LoadingPage: React.FC<PropsWithChildren> = ({ children }) => {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
    },
  });

  if (status === "loading") {
    return "Loading or not authenticated...";
  }

  return <>{children}</>;
};

export default LoadingPage;
