"use client";

import React from "react";
import Logo from "@/components/logo";
import SelectLanguage from "@/components/select-language";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { useRouter } from "@/navigation";

type HeaderProps = {
  authenticated: boolean;
  locale: string;
};

const Header: React.FC<HeaderProps> = ({ authenticated, locale }) => {
  const t = useTranslations("Home");
  const router = useRouter();

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      <Logo>
        <p className="flex text-xl font-thin">Wallet</p>
      </Logo>
      <div className="flex items-center gap-4">
        <SelectLanguage locale={locale} />

        {authenticated ? (
          <Button onClick={() => router.push("/dashboard")}>
            {t("dashboard")}
          </Button>
        ) : (
          <>
            <Button variant="ghost" onClick={() => router.push("/signin")}>
              {t("sign-in")}
            </Button>

            <Button onClick={() => router.push("/signup")}>
              {t("sign-up")}
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
