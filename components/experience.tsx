import { useTranslations, useLocale } from 'next-intl';
import Section from './section';
import { experienceByLocale } from '@/lib/experience-data';
import { Briefcase } from 'lucide-react';
import type { Locale } from '@/i18n/routing';

export default function Experience() {
  const t = useTranslations('experience');
  const locale = useLocale() as Locale;
  const roles = experienceByLocale[locale] ?? experienceByLocale.pt;

  return (
    <Section id="experience" ariaLabelledby="experience-title" className="bg-dracula-bg-soft/20">
      <div className="max-w-2xl">
        <h2
          id="experience-title"
          className="font-display text-3xl font-bold text-dracula-fg md:text-4xl"
        >
          {t('title')}
        </h2>
        <p className="mt-4 font-body text-lg text-dracula-fg-muted">{t('subtitle')}</p>
      </div>

      <div className="mt-12 space-y-8">
        {roles.map((role, index) => (
          <article
            key={role.company}
            className="animate-slide-up relative grid gap-4 rounded-xl border-l-4 border-dracula-purple bg-dracula-bg-soft/30 p-6 opacity-0 pl-8 transition-all hover:bg-dracula-bg-soft/60 md:grid-cols-[1fr_2fr]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-3">
              <Briefcase className="mt-1 shrink-0 text-dracula-purple" size={20} />
              <div>
                <h3 className="font-display text-lg font-bold text-dracula-fg">
                  {role.company}
                </h3>
                <p className="font-mono text-sm text-dracula-cyan">{role.role}</p>
                <p className="mt-1 font-mono text-xs text-dracula-comment">{role.period}</p>
              </div>
            </div>
            <p className="font-body leading-relaxed text-dracula-fg-muted md:pl-6">
              {role.summary}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
