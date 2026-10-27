import { localeStorageKey, resolveLocale, type Locale } from './locale';

const listeners = new Set<() => void>();
let sessionLocale: Locale | undefined;

function notify() {
    for (const listener of listeners) listener();
}

function handleStorage(event: StorageEvent) {
    if (event.key === localeStorageKey || event.key === null) {
        sessionLocale = undefined;
        notify();
    }
}

export function subscribeToLocale(listener: () => void) {
    listeners.add(listener);
    if (listeners.size === 1) {
        window.addEventListener('storage', handleStorage);
        window.addEventListener('languagechange', notify);
    }
    return () => {
        listeners.delete(listener);
        if (listeners.size === 0) {
            window.removeEventListener('storage', handleStorage);
            window.removeEventListener('languagechange', notify);
        }
    };
}

export function getLocale(): Locale {
    if (sessionLocale) return sessionLocale;
    let saved: string | null = null;
    try {
        saved = window.localStorage.getItem(localeStorageKey);
    } catch {
        // Browser privacy settings may disable storage; switching still works in memory.
    }
    return resolveLocale(saved, navigator.languages);
}

export function setLocale(locale: Locale) {
    try {
        window.localStorage.setItem(localeStorageKey, locale);
        // Read persisted choices again on mount, including changes missed while away.
        sessionLocale = undefined;
    } catch {
        // Keep the explicit choice for this page session when persistence is unavailable.
        sessionLocale = locale;
    }
    notify();
}
