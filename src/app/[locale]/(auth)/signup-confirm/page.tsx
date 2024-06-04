"use client";

import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { confirmSignUp } from "@/app/actions";
import { ReloadIcon } from "@radix-ui/react-icons";
import ResendCodeButton from "./components/resend-code";
import { useSearchParams } from "next/navigation";
import { toast } from "@/components/ui/use-toast";

const formSchema = yup
  .object({
    confirmationCode: yup.string().length(6).required(),
  })
  .required();

type Inputs = yup.InferType<typeof formSchema>;

const SignupConfirm: React.FC = () => {
  const t = useTranslations("SignUpConfirm");
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { confirmationCode } = data;

    setLoading(true);
    confirmSignUp({ email, confirmationCode })
      .then((response) => {
        if (response?.status) {
          toast({
            variant: "destructive",
            title: response.title,
            description: response.detail,
          });
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col items-center justify-center mx-4 w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          {t("description")}
        </p>
      </div>
      <Card className="pt-4 w-96">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="space-y-2 flex flex-col items-center justify-center">
              <div>
                <Label htmlFor="confirmationCode">
                  {t("confirmationCode")}
                </Label>
                <Controller
                  name="confirmationCode"
                  control={control}
                  render={({ field }) => (
                    <InputOTP
                      maxLength={6}
                      pattern={REGEXP_ONLY_DIGITS}
                      {...field}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  )}
                />

                <p>{errors.confirmationCode?.message}</p>
              </div>
            </div>
            <ResendCodeButton email={email ?? ""} />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <ReloadIcon className="w-5 h-5 mr-2 animate-spin" />
              ) : (
                t("submit")
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        {t("already-have-account")}{" "}
        <Link
          href="/signin"
          className="font-medium text-gray-900 hover:underline dark:text-gray-50"
          prefetch={false}
        >
          {t("sign-in")}
        </Link>
      </div>
    </div>
  );
};

export default SignupConfirm;
