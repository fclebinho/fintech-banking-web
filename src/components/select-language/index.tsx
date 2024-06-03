"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDownIcon, LanguagesIcon } from "lucide-react";
import { useRouter, usePathname, locales } from "@/navigation";

type SelectLanguageProps = {
  locale?: string;
};

const SelectLanguage: React.FC<SelectLanguageProps> = ({ locale }) => {
  const t = useTranslations("Language");
  const router = useRouter();
  const pathname = usePathname();

  console.log("locale", locale);
  return (
    <div className="flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="uppercase text-sm">
            {locale ? (
              <div className="flex items-center justify-center gap-2">
                {locale} <ChevronDownIcon className="h-[1.2rem] w-[1.2rem]" />
              </div>
            ) : (
              <LanguagesIcon className="h-[1.2rem] w-[1.2rem]" />
            )}

            <span className="sr-only">Toggle language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {locales.map((locale) => (
            <DropdownMenuItem
              key={locale}
              onClick={() => router.push(pathname, { locale })}
            >
              {t(locale)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SelectLanguage;
