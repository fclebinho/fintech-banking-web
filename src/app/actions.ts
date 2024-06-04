"use server";

import { number, string } from "yup";

const url = {
  login: `${process.env.NEXT_PUBLIC_AUTHORIZE_API_URL}/login`,
  register: `${process.env.NEXT_PUBLIC_AUTHORIZE_API_URL}/register`,
};

export const signIn = async (email: string, password: string) => {
  const body = JSON.stringify({
    email,
    password,
  });

  return await fetch(url.login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      scope: "openid email profile",
    },
    body,
  });
};

// type SignUpResponse = {
//   id: string;
//   fullName: string;
//   email: string;
//   phoneNumber: string;
//   isVerified: boolean;å
// };

// tyåpe SignUpErrorResponse = {
//   åtype: string;
//   åtitle: string;
//   åstatus: number;
//   åinstance: string;
//   åcode: string;
// };å

export const signUp = async (
  fullName: string,
  phoneNumber: string,
  email: string,
  password: string
) => {
  const body = JSON.stringify({
    fullName,
    phoneNumber,
    email,
    password,
  });

  return fetch(url.register, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      scope: "openid email profile",
    },
    body,
  }).then((response) => response.json());
};
