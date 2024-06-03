"use client";

import { useSession } from "next-auth/react";
import Header from "./components/header";
import { useRouter, redirect } from "@/navigation";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <section className="min-h-screen flex flex-col items-center justify-between bg-gray-100 dark:bg-gray-950">
      <Header />
      <main className="flex items-center justify-center">{children}</main>
      <div />
    </section>
  );
}
