/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

import type { Locale } from "@/data/types";
import { content, type Content } from "@/i18n";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  copy: Content;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

type LanguageProviderProps = {
  children: ReactNode;
};

const LOCALE_STORAGE_KEY = "locale";

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "fr";
}

function getSavedLocale(): Locale | null {
  try {
    const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);

    return isLocale(savedLocale) ? savedLocale : null;
  } catch {
    return null;
  }
}

function getBrowserLocale(): Locale {
  const browserLanguages = navigator.languages.length > 0 ? navigator.languages : [navigator.language];

  for (const language of browserLanguages) {
    const locale = language.toLowerCase().split("-")[0];

    if (isLocale(locale)) {
      return locale;
    }
  }

  return "fr";
}

function getInitialLocale(): Locale {
  return getSavedLocale() ?? getBrowserLocale();
}

function saveLocale(locale: Locale) {
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Keep language switching functional when storage is unavailable.
  }
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(nextLocale: Locale) {
    setLocaleState(nextLocale);
    saveLocale(nextLocale);
  }

  function toggleLocale() {
    setLocaleState((currentLocale) => {
      const nextLocale = currentLocale === "en" ? "fr" : "en";

      saveLocale(nextLocale);
      return nextLocale;
    });
  }

  const value: LanguageContextValue = {
    locale,
    setLocale,
    toggleLocale,
    copy: content[locale],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
