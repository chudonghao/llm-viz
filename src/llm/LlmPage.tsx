'use client';

import Link from 'next/link';
import { LayerView } from './LayerView';
import { LanguageProvider, useI18n } from './i18n/LanguageProvider';
import { isLocale } from './i18n/locale';
import s from './LlmPage.module.scss';

function LlmHeader() {
    const { locale, setLocale, t } = useI18n();
    return <header className={s.header}>
        <h1 className={s.title}>{t('page.title')}</h1>
        <nav className={s.actions}>
            <select
                aria-label={t('page.language')}
                className={s.language}
                value={locale}
                onKeyDown={event => event.stopPropagation()}
                onChange={event => {
                    if (isLocale(event.target.value)) setLocale(event.target.value);
                }}
            >
                <option value="en" lang="en">English</option>
                <option value="zh-CN" lang="zh-CN">简体中文</option>
            </select>
            <Link href="/">{t('page.home')}</Link>
        </nav>
    </header>;
}

export function LlmPage() {
    return <LanguageProvider>
        <LlmHeader />
        <LayerView />
        <div id="portal-container" />
    </LanguageProvider>;
}
