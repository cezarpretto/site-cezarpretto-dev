'use client';

import { usePathname, Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { cn } from '@/lib/utils';
import type { Locale } from '@/i18n/routing';

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;

  return (
    <div
      className="flex items-center gap-1 font-mono text-[0.8125rem] font-medium"
      role="group"
      aria-label="Idioma / Language"
    >
      {(['pt', 'en'] as Locale[]).map((locale, i) => {
        const isActive = locale === currentLocale;
        return (
          <span key={locale} className="flex items-center gap-1">
            {i > 0 && <span className="text-line" aria-hidden="true">/</span>}
            <Link
              href={pathname || '/'}
              locale={locale}
              className={cn(
                'rounded px-1 uppercase tracking-[0.12em] transition-colors',
                isActive ? 'text-accent' : 'text-muted hover:text-fg'
              )}
              aria-current={isActive ? 'true' : undefined}
            >
              {locale}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
