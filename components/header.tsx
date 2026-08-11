'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import LocaleSwitcher from './locale-switcher';
import { cn } from '@/lib/utils';

const navItems = [
  { key: 'projects', href: '#projects' },
  { key: 'experience', href: '#experience' },
  { key: 'stack', href: '#stack' },
  { key: 'contact', href: '#contact' },
];

export default function Header() {
  const t = useTranslations('nav');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-dracula-current/50 bg-dracula-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-dracula-fg transition-colors hover:text-dracula-cyan"
          aria-label="Cezar Pretto"
        >
          cp<span className="text-dracula-pink">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-dracula-fg-muted transition-colors hover:text-dracula-cyan"
            >
              {t(item.key)}
            </a>
          ))}
          <LocaleSwitcher />
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <LocaleSwitcher />
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded p-2 text-dracula-fg hover:bg-dracula-current"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-t border-dracula-current/50 bg-dracula-bg transition-all duration-300 md:hidden',
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col gap-4 px-6 py-6" aria-label="Navegação mobile">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-dracula-fg-muted transition-colors hover:text-dracula-cyan"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
