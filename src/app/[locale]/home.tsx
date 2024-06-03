"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "@/navigation";
import Header from "@/components/header";
import { useTranslations } from "next-intl";
import { Session } from "next-auth";
import { FC } from "react";

type Props = {
  session: Session | null;
};

const Home: FC<Props> = ({ session }) => {
  const t = useTranslations("Home");
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <div className="container px-4 md:px-6 space-y-10 xål:space-y-16">
        <Header authenticated={!!session} />
      </div>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  {t("title")}
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t("description")}
                </p>
                <div className="mt-6 flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" onClick={() => router.push("/signup")}>
                    {t("get-started")}
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
};

export default Home;
