import { useTranslations, useLocale } from 'next-intl';
import Section from './section';
import { experienceByLocale } from '@/lib/experience-data';
import type { Locale } from '@/i18n/routing';

export default function Experience() {
  const t = useTranslations('experience');
  const locale = useLocale() as Locale;
  const roles = experienceByLocale[locale] ?? experienceByLocale.pt;

  return (
    <Section id="experience" ariaLabelledby="experience-title">
      <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+3rem)] lg:self-start">
          <h2
            id="experience-title"
            className="text-[clamp(2.1rem,4.4vw,3.6rem)] font-semibold leading-[1.06] tracking-[-0.02em]"
          >
            {t('title')}
          </h2>
          <p className="mt-6 max-w-[26rem] leading-[1.6] text-muted">{t('subtitle')}</p>
        </div>

        <ol className="ledger">
          {roles.map((role) => {
            const now = /Atual|Present/i.test(role.period);
            return (
              <li key={role.company} className={now ? 'ledger-item now' : 'ledger-item'}>
                <p className="font-mono text-[0.8125rem] tnum text-muted">{role.period}</p>
                <h3 className="mt-1.5 text-2xl font-semibold leading-tight">{role.company}</h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {role.role}
                </p>
                <p className="mt-3 max-w-[54ch] leading-[1.65] text-muted">{role.summary}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
