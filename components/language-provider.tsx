"use client";

import * as React from "react";

type Language = "es" | "en";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageProviderContext = React.createContext<LanguageProviderState | undefined>(
  undefined
);

export function LanguageProvider({
  children,
  defaultLanguage = "es",
  ...props
}: LanguageProviderProps) {
  const [language, setLanguage] = React.useState<Language>(defaultLanguage);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("language") as Language | null;
      if (stored) {
        setLanguage(stored);
      }
    }
  }, []);

  React.useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;
    localStorage.setItem("language", language);
  }, [language, mounted]);

  const value = {
    language,
    setLanguage: (newLanguage: Language) => {
      setLanguage(newLanguage);
    },
  };

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = React.useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
};
