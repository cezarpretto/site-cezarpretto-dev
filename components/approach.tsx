import { useTranslations } from 'next-intl';
import Section from './section';

const pillars = ['clarity', 'delivery', 'partnership'] as const;

export default function Approach() {
  const t = useTranslations('approach');

  return (
    <Section id="approach" ariaLabelledby="approach-title" className="!pt-8 md:!pt-16">
      <div className="grid gap-14 lg:grid-cols-[6fr_5fr] lg:gap-20">
        <div>
          <h2
            id="approach-title"
            className="max-w-[16ch] text-[clamp(2.1rem,4.4vw,3.6rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-balance"
          >
            {t('title')}
          </h2>
          <p className="mt-7 max-w-[34rem] text-lg leading-[1.6] text-muted">{t('body')}</p>

          <dl className="mt-10 max-w-[34rem] rounded-[14px] border border-line bg-surface p-6 font-mono text-sm leading-[1.9]">
            {[0, 1, 2].map((i) => (
              <div key={i} className="grid grid-cols-[5.5rem_1fr] gap-4">
                <dt className="text-accent">{t(`method.${i}.k`)}</dt>
                <dd>{t(`method.${i}.v`)}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="grid content-start gap-9">
          {pillars.map((key) => (
            <li key={key} className="border-t-[3px] border-fg pt-4">
              <p className="label text-accent">{t(`pillars.${key}.name`)}</p>
              <p className="mt-2 text-xl font-medium leading-[1.35]">{t(`pillars.${key}.text`)}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
