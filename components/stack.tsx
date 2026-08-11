import { useTranslations } from 'next-intl';
import Section from './section';
import { stackCategories } from '@/lib/stack-data';
import { Layers } from 'lucide-react';

export default function Stack() {
  const t = useTranslations('stack');

  return (
    <Section id="stack" ariaLabelledby="stack-title">
      <div className="max-w-2xl">
        <h2
          id="stack-title"
          className="font-display text-3xl font-bold text-dracula-fg md:text-4xl"
        >
          {t('title')}
        </h2>
        <p className="mt-4 font-body text-lg text-dracula-fg-muted">{t('subtitle')}</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stackCategories.map((category, catIndex) => (
          <div
            key={category.key}
            className="animate-slide-up rounded-2xl border border-dracula-current/60 bg-dracula-bg-soft/30 p-6 opacity-0 transition-all hover:border-dracula-cyan/60"
            style={{ animationDelay: `${catIndex * 0.1}s` }}
          >
            <div className="mb-4 flex items-center gap-2 text-dracula-cyan">
              <Layers size={18} />
              <h3 className="font-display text-sm font-bold uppercase tracking-wider">
                {t(`categories.${category.key}`)}
              </h3>
            </div>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="font-mono text-sm text-dracula-fg-muted transition-colors hover:text-dracula-fg"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
