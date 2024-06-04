import auth from "@/auth";
import Header from "@/components/header";
import { useRouter, redirect } from "@/navigation";
import { getServerSession } from "next-auth";

export default async function AuthLayout({
  children, // will be a page or nested layout
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const session = await getServerSession(auth);

  return (
    <section className="min-h-screen flex flex-col justify-between bg-gray-100 dark:bg-gray-950">
      <div className="container">
        <Header locale={locale} authenticated={!!session} />
      </div>
      <main className="flex items-center justify-center">{children}</main>
      <div />
    </section>
  );
}
