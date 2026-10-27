'use client';

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from 'react';
import { defaultLocale, type Locale } from './locale';
import { getLocale, setLocale, subscribeToLocale } from './localeStore';
import { translate, type MessageKey } from './messages';

const LocaleContext = createContext<Locale>(defaultLocale);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const locale = useSyncExternalStore(subscribeToLocale, getLocale, () => defaultLocale);
    useEffect(() => {
        const previousLanguage = document.documentElement.lang;
        document.documentElement.lang = locale;
        return () => {
            document.documentElement.lang = previousLanguage;
        };
    }, [locale]);
    return <LocaleContext.Provider value={locale}>
        <title>{translate(locale, 'page.title')}</title>
        {children}
    </LocaleContext.Provider>;
}

export function useI18n() {
    const locale = useContext(LocaleContext);
    return { locale, setLocale, t: (key: MessageKey) => translate(locale, key) };
}
