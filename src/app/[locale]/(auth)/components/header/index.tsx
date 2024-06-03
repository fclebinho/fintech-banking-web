"use client";

import Logo from "@/components/logo";
import SelectLanguage from "@/components/select-language";
import { Link, useRouter } from "@/navigation";
import { WalletIcon } from "lucide-react";
import React from "react";

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-4">
          <SelectLanguage />
        </div>
      </header>
    </div>
  );
};

export default Header;
