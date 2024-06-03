"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { FC, PropsWithChildren } from "react";

interface ProviderProps extends PropsWithChildren {
  session: Session | null;
}

export const Provider: FC<ProviderProps> = ({ children, session }) => {
  return (
    <SessionProvider session={session} basePath="/api/auth">
      {children}
    </SessionProvider>
  );
};
