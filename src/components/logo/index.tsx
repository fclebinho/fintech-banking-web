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
      <WalletIcon className="h-10 w-10 text-primary" />
      <p className="flex text-xl">Wallet</p>
    </Link>
  );
};

export default Logo;
