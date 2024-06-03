import { Link } from "@/navigation";
import { WalletIcon } from "lucide-react";
import React from "react";

// import { Container } from './styles';

const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="flex items-center justify-center space-x-2"
      prefetch={false}
    >
      <WalletIcon className="h-6 w-6" />
      <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-gray-50">
        Gomes
      </span>
      <p>Wallet</p>
    </Link>
  );
};

export default Logo;
