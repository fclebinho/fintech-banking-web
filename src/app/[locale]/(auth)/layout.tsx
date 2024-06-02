import Header from "./components/header";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-between bg-gray-100 dark:bg-gray-950">
      <Header />
      <main className="flex items-center justify-center">{children}</main>
      <div />
    </section>
  );
}
