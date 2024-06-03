"use client";

import { SessionProvider } from "next-auth/react";
import { FC, PropsWithChildren } from "react";

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
