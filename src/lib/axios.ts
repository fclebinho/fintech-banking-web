import axios from "axios";
import { getSession } from "next-auth/react";

const api = axios.create({
  baseURL: process.env.API_URL,
});

// Add a request interceptor
api.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    console.log("config.url:", config.url);
    console.log("config.baseURL:", config.baseURL);

    if (session) {
      config.headers.Authorization = `Bearer ${session.token.sub}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;

export async function getServerSideProps() {
  return { props: { transaction_api: process.env.API_URL } };
}
