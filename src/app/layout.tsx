'use client';
import React from 'react';
import s from './layout.module.scss';
import '@/styles/main.css';
import '@/styles/fonts.css';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <html lang="zh-CN" className={s.html}>
        <body className={s.body}>{children}</body>
    </html>;
}
