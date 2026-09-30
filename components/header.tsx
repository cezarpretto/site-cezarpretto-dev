'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import LocaleSwitcher from './locale-switcher';
import ThemeToggle from './theme-toggle';
import { cn } from '@/lib/utils';

const navItems = [
  { key: 'projects', href: '/#projects' },
  { key: 'experience', href: '/#experience' },
  { key: 'stack', href: '/#stack' },
];

export default function Header() {
  const t = useTranslations('nav');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <div className="mx-auto flex h-[var(--header-h)] max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="Cezar Pretto" className="shrink-0">
          {/* min. 120px de largura (manual); o SVG já inclui a área de proteção */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/cezarpretto-principal-fundo-escuro.svg"
            alt="cezarpretto"
            className="logo-on-dark block h-[38px] w-auto"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/cezarpretto-principal-fundo-claro.svg"
            alt="cezarpretto"
            className="logo-on-light h-[38px] w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label={t('aria')}>
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="label text-muted transition-colors hover:text-fg"
            >
              {t(item.key)}
            </Link>
          ))}
          <LocaleSwitcher />
          <ThemeToggle />
          <Link
            href="/#contact"
            className="rounded-[8px] bg-accent px-4 py-2 text-sm font-semibold text-accent-ink transition-transform duration-200 hover:-translate-y-0.5"
          >
            {t('contact')}
          </Link>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LocaleSwitcher />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-[8px] border border-line"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? t('close') : t('open')}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-line bg-bg transition-[max-height] duration-300 md:hidden',
          mobileOpen ? 'max-h-80 border-t' : 'max-h-0'
        )}
      >
        <nav className="flex flex-col px-6 py-3" aria-label={t('aria')}>
          {[...navItems, { key: 'contact', href: '/#contact' }].map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="label border-b border-line py-4 text-fg last:border-0"
              tabIndex={mobileOpen ? 0 : -1}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
