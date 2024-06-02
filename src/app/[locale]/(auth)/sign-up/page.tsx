"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "@/navigation";

const formSchema = yup
  .object({
    fullName: yup.string().required(),
    phoneNumber: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(7).required(),
  })
  .required();

type Inputs = yup.InferType<typeof formSchema>;

export default function SignUp() {
  const t = useTranslations("SignUp");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(formSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">{t("title")}</h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          {t("description")}
        </p>
      </div>
      <Card className="pt-4 w-96">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullname">{t("name")}</Label>
              <Input
                id="fullname"
                placeholder="John Doe"
                {...register("fullName")}
              />
              <p>{errors.fullName?.message}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phonenumber">{t("phone-number")}</Label>
              <Input
                id="phonenumber"
                placeholder="00 00000-0000"
                {...register("phoneNumber")}
              />
              <p>{errors.phoneNumber?.message}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t("email")}</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email")}
              />
              <p>{errors.email?.message}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t("password")}</Label>
              <Input id="password" type="password" {...register("password")} />
              <p>{errors.password?.message}</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              {t("submit")}
            </Button>
          </CardFooter>
        </form>
      </Card>
      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
        {t("already-have-account")}{" "}
        <Link
          href="/sign-in"
          className="font-medium text-gray-900 hover:underline dark:text-gray-50"
          prefetch={false}
        >
          {t("sign-in")}
        </Link>
      </div>{" "}
    </div>
  );
}
