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
            if (data.status === 400) {
              throw new Error(data.title);
            }

            const authorization = { id: data.access_token };

            if (authorization) {
              return authorization;
            } else {
              throw new Error("No authorization found");
            }
          });
      },
    }),
  ],
};

export default auth;
