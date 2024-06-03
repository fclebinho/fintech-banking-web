import { useSession } from "next-auth/react";
import React, { PropsWithChildren } from "react";

const Dashboard: React.FC<PropsWithChildren> = ({ children }) => {
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

export default Dashboard;
