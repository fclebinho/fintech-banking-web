import Header from "./components/header";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-gray-100 dark:bg-gray-950">
      {/* Include shared UI here e.g. a header or sidebar */}
      <Header />
      <main className="flex items-center justify-center">{children}</main>
    </section>
  );
}
