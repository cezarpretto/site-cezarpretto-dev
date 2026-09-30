import { useTranslations } from 'next-intl';
import Section from './section';
import { stackCategories } from '@/lib/stack-data';

// Conteúdo técnico: aqui (e só aqui) entra o verde Terminal, como pede o manual.
export default function Stack() {
  const t = useTranslations('stack');

  return (
    <Section id="stack" ariaLabelledby="stack-title" className="!pt-8 md:!pt-12">
      <div className="mb-10 grid gap-6 md:grid-cols-[6fr_5fr] md:items-end md:gap-16">
        <h2
          id="stack-title"
          className="text-[clamp(2.1rem,4.4vw,3.6rem)] font-semibold leading-[1.06] tracking-[-0.02em]"
        >
          {t('title')}
        </h2>
        <p className="max-w-[30rem] leading-[1.6] text-muted">{t('subtitle')}</p>
      </div>

      <div className="grid gap-x-8 gap-y-10 rounded-[14px] border border-[var(--panel-line)] bg-[var(--panel)] p-7 text-papel sm:grid-cols-2 md:p-10 lg:grid-cols-4">
        {stackCategories.map((category) => (
          <div key={category.key}>
            <h3 className="font-mono text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-lavanda">
              <span className="mr-2 text-terminal" aria-hidden="true">
                $
              </span>
              {t(`categories.${category.key}`)}
            </h3>
            <ul className="mt-5 grid gap-2.5 font-mono text-sm">
              {category.items.map((item) => (
                <li key={item} className="text-papel/90">
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
