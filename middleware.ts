import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  defaultLocale,
  localeCookieName,
  localizePathname,
  normalizeLocale,
  resolveLocaleFromAcceptLanguage,
} from "constant/locale";

const PUBLIC_FILE_REGEXP = /\.[^/]+$/;
const EXCLUDED_PREFIXES = ["/api", "/_next", "/admin"];

const shouldSkipMiddleware = (pathname: string): boolean =>
  EXCLUDED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  ) || PUBLIC_FILE_REGEXP.test(pathname);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (shouldSkipMiddleware(pathname)) {
    return NextResponse.next();
  }

  const pathSegments = pathname.split("/").filter(Boolean);
  const firstSegment = pathSegments[0];
  const localeFromFirstSegment = normalizeLocale(firstSegment);

  if (localeFromFirstSegment && pathSegments[1] === "admin") {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/admin";
    return NextResponse.redirect(redirectUrl);
  }

  const localeFromPath = localeFromFirstSegment;

  if (localeFromPath) {
    if (firstSegment !== localeFromPath) {
      const redirectUrl = request.nextUrl.clone();
      pathSegments[0] = localeFromPath;
      redirectUrl.pathname = `/${pathSegments.join("/")}`;
      return NextResponse.redirect(redirectUrl);
    }

    const response = NextResponse.next();
    const localeCookieValue = request.cookies.get(localeCookieName)?.value;

    if (localeCookieValue !== localeFromPath) {
      response.cookies.set(localeCookieName, localeFromPath, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
    }

    return response;
  }

  const localeFromCookie = normalizeLocale(
    request.cookies.get(localeCookieName)?.value,
  );
  const localeFromBrowser = resolveLocaleFromAcceptLanguage(
    request.headers.get("accept-language"),
  );
  const locale = localeFromCookie ?? localeFromBrowser ?? defaultLocale;

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = localizePathname(pathname, locale);

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
