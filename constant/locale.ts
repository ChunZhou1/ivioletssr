export const supportedLocales = ["zh-CN", "zh-TW", "en"] as const;

export type SupportedLocale = (typeof supportedLocales)[number];

export type LocaleRecord<T> = Record<SupportedLocale, T>;

export const defaultLocale: SupportedLocale = "zh-CN";

export const localeCookieName = "NEXT_LOCALE";

export const localeLabelMap: LocaleRecord<string> = {
  "zh-CN": "中",
  "zh-TW": "繁",
  en: "English",
};

const supportedLocaleSet = new Set<string>(supportedLocales);

const localeAliasMap: Record<string, SupportedLocale> = {
  zh: "zh-CN",
  "zh-cn": "zh-CN",
  "zh-sg": "zh-CN",
  "zh-hans": "zh-CN",
  "zh-tw": "zh-TW",
  "zh-hk": "zh-TW",
  "zh-mo": "zh-TW",
  "zh-hant": "zh-TW",
  en: "en",
  "en-us": "en",
  "en-gb": "en",
  "en-ca": "en",
  "en-au": "en",
};

export const isSupportedLocale = (locale: string): locale is SupportedLocale =>
  supportedLocaleSet.has(locale);

export const normalizeLocale = (
  locale: string | null | undefined,
): SupportedLocale | null => {
  if (!locale) {
    return null;
  }

  if (isSupportedLocale(locale)) {
    return locale;
  }

  return localeAliasMap[locale.toLowerCase()] ?? null;
};

export const stripLocaleFromPathname = (pathname: string): string => {
  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const segments = withLeadingSlash.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (!firstSegment || !normalizeLocale(firstSegment)) {
    return withLeadingSlash;
  }

  const nextPath = `/${segments.slice(1).join("/")}`;
  return nextPath === "/" ? "/" : nextPath;
};

export const localizePathname = (
  pathname: string,
  locale: SupportedLocale,
): string => {
  const pathWithoutLocale = stripLocaleFromPathname(pathname);
  return pathWithoutLocale === "/"
    ? `/${locale}`
    : `/${locale}${pathWithoutLocale}`;
};

type LocalePreference = {
  locale: string;
  quality: number;
};

const parseAcceptLanguage = (
  acceptLanguageHeader: string | null | undefined,
): LocalePreference[] => {
  if (!acceptLanguageHeader) {
    return [];
  }

  return acceptLanguageHeader
    .split(",")
    .map((entry) => {
      const [localePart, qualityPart] = entry.trim().split(";q=");
      const quality = qualityPart ? Number.parseFloat(qualityPart) : 1;
      return { locale: localePart, quality: Number.isFinite(quality) ? quality : 0 };
    })
    .filter((entry) => Boolean(entry.locale))
    .sort((a, b) => b.quality - a.quality);
};

export const resolveLocaleFromAcceptLanguage = (
  acceptLanguageHeader: string | null | undefined,
): SupportedLocale => {
  const preferences = parseAcceptLanguage(acceptLanguageHeader);

  for (const preference of preferences) {
    const exactMatch = normalizeLocale(preference.locale);
    if (exactMatch) {
      return exactMatch;
    }

    const baseMatch = normalizeLocale(preference.locale.split("-")[0]);
    if (baseMatch) {
      return baseMatch;
    }
  }

  return defaultLocale;
};
