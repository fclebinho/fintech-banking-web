import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const auth: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.username || !credentials.password)
          return null;

        const body = JSON.stringify({
          email: credentials.username,
          password: credentials.password,
        });

        const url = `${process.env.NEXT_PUBLIC_AUTHORIZE_API_URL}/login`;
        console.log("url", url);

        return await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            scope: "openid email profile",
          },
          body,
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("data", data);

            if (data.status === 400) {
              console.error("data.status", data.status);
              throw new Error(data.title);
            }

            const authorization = { id: data.access_token };
            console.log("authorization", authorization);

            if (authorization) {
              return authorization;
            } else {
              throw new Error("No authorization found");
            }
          });
      },
    }),
  ],
  session: { strategy: "jwt" },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_PRIVATE_KEY,
    maxAge: 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token }) {
      if (token.sub) {
        return token;
      }

      throw new Error("No token found");
    },
    async session({ session, token }) {
      if (token.sub) {
        return { ...session, accessToken: token.sub };
      }

      throw new Error("No session found");
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

export default auth;
