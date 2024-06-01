import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./navigation";

export default createMiddleware({
  localePrefix,

  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "pt-BR",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pt-BR|en)/:path*"],
};
