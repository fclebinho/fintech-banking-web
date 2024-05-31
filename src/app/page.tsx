import { Button } from "@/components/ui/button";
import {
  BoomBox,
  BoomBoxIcon,
  MountainIcon,
  PentagonIcon,
  PiggyBankIcon,
  WalletIcon,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <header className="bg-white dark:bg-gray-900">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center" prefetch={false}>
          <WalletIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
          <div className="flex items-center justify-center space-x-2">
            <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-gray-50">
              Gomes
            </span>
            <p>Banking</p>
          </div>
        </Link>

        <div className="flex space-x-4">
          <Button variant="secondary">Sign In</Button>
          <Button variant="ghost">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
