"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";
import { FC } from "react";

const Home: FC = () => {
  const t = useTranslations("Home");
  const router = useRouter();

  return (
    <main className="flex-1">
      <section className="w-full pt-12 md:pt-24 lg:pt-32">
        <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
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
  );
};

export default Home;
