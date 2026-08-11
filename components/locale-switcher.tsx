'use client';

import { usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import type { Locale } from '@/i18n/routing';

const labels: Record<Locale, string> = {
  pt: 'PT',
  en: 'EN',
};

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;

  return (
    <div
      className="flex items-center rounded-full border border-dracula-current bg-dracula-bg-soft p-1"
      role="group"
      aria-label="Seletor de idioma"
    >
      {(['pt', 'en'] as Locale[]).map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <Link
            key={locale}
            href={pathname || '/'}
            locale={locale}
            className={cn(
              'rounded-full px-3 py-1 text-xs font-semibold transition-all',
              isActive
                ? 'bg-dracula-purple text-dracula-bg'
                : 'text-dracula-fg-muted hover:text-dracula-fg'
            )}
            aria-current={isActive ? 'true' : undefined}
          >
            {labels[locale]}
          </Link>
        );
      })}
    </div>
  );
}
