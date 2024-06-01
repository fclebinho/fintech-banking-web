"use client";

import SelectLanguage from "@/components/select-language";
import { Link, useRouter } from "@/navigation";
import { WalletIcon } from "lucide-react";
import React from "react";

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
      <Link
        href="#"
        className="flex items-center justify-center space-x-2"
        prefetch={false}
      >
        <WalletIcon className="h-6 w-6" />
        <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-gray-50">
          Gomes
        </span>
        <p>Wallet</p>
      </Link>
      <div className="flex items-center gap-4">
        <SelectLanguage />
      </div>
    </header>
  );
};

export default Header;
