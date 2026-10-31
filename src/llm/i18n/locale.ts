export type Locale = 'en' | 'zh-CN';

export const defaultLocale: Locale = 'zh-CN';
export const localeStorageKey = 'llm-viz.locale';

export function isLocale(value: unknown): value is Locale {
    return value === 'en' || value === 'zh-CN';
}

export function resolveLocale(saved: unknown, languages: readonly string[]): Locale {
    if (isLocale(saved)) return saved;
    for (const language of languages) {
        if (/^zh(?:-|$)/i.test(language)) return 'zh-CN';
        if (/^en(?:-|$)/i.test(language)) return 'en';
    }
    return defaultLocale;
}
