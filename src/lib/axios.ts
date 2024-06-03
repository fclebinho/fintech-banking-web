import Axios, { AxiosInstance } from "axios";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

export const httpClient: AxiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: false,
});

httpClient.interceptors.request.use(async (config) => {
  config.headers["Content-Type"] = "application/json";
  const session: Session | null = await getSession();

  if (session?.accessToken) {
    config.headers["Authorization"] = `Bearer ${session.accessToken}`;
  }

  return config;
});
