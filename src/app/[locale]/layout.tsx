import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { FC, PropsWithChildren } from "react";

interface RootLayoutProps extends PropsWithChildren {
  params: { locale: string };
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gomes Wallet",
  description: "Generated by create next app",
};

const RootLayout: FC<RootLayoutProps> = ({ children, params: { locale } }) => {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
