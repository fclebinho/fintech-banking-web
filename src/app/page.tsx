/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sGUxq83AZqJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { WalletIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
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
          <p>Banking</p>
        </Link>
        <div className="flex items-center gap-4">
          <Button size="sm" variant="ghost" asChild>
            <Link href="#" prefetch={false}>
              Sign In
            </Link>
          </Button>

          <Button size="sm" asChild>
            <Link href="#" prefetch={false}>
              Get Started
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  The complete platform for building the Web
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Beautifully designed components that you can copy and paste
                  into your apps. Accessible. Customizable. Open Source.
                </p>
                <div className="mt-6 flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#" prefetch={false}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg"
                width="1270"
                height="300"
                alt="Hero"
                className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
