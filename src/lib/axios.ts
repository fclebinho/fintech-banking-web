import axios from "axios";
import { getSession } from "next-auth/react";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TRANSACTION_API_URL,
});

// Add a request interceptor
api.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    if (session) {
      config.headers.Authorization = `Bearer ${session.token.sub}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
