import { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware";
import createIntlMiddleware from "next-intl/middleware";
import { locales } from "./navigation";

const publicPages = [
  "/",
  "/signin",
  "/signup",
  "/signup-confirm",
  // (/secret requires auth)
];

const intlMiddleware = createIntlMiddleware({
  locales,
  localePrefix: "always",
  defaultLocale: "pt-BR",
});

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  (req) => intlMiddleware(req),
  {
    callbacks: {
      authorized: ({ token, ...rest }) => {
        console.log("authorized.token", token, token != null);
        // console.log("authorized.rest", rest);
        return token != null;
      },
    },
    pages: {
      signIn: "/signin",
    },
  }
);

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(
    `^(/(${locales.join("|")}))?(${publicPages
      .flatMap((p) => (p === "/" ? ["", "/"] : p))
      .join("|")})/?$`,
    "i"
  );
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  } else {
    return (authMiddleware as any)(req);
  }
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
