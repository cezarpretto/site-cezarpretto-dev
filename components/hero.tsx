import { useTranslations } from 'next-intl';
import { ArrowDown } from 'lucide-react';
import PaperToProduct from './paper-to-product';

export default function Hero() {
  const t = useTranslations('hero');

  const copy = {
    label: t('sheet.label'),
    title: t('sheet.title'),
    forWho: t('sheet.for'),
    rows: [0, 1, 2, 3].map((i) => ({ k: t(`sheet.rows.${i}.k`), v: t(`sheet.rows.${i}.v`) })),
    panelTitle: t('panel.title'),
    nav: [0, 1, 2].map((i) => t(`panel.nav.${i}`)),
    orders: [0, 1, 2, 3].map((i) => ({
      id: t(`panel.orders.${i}.id`),
      mid: t(`panel.orders.${i}.mid`),
      tag: t(`panel.orders.${i}.tag`),
    })),
    weeks: t('panel.weeks'),
    deploy: t('panel.deploy'),
    ruleFrom: t('ruleFrom'),
    ruleTo: t('ruleTo'),
    caption: t('caption'),
    example: t('example'),
  };

  return (
    <section aria-labelledby="hero-title">
      <PaperToProduct copy={copy}>
        <div>
          <h1
            id="hero-title"
            className="text-[clamp(2.9rem,5.6vw,5.25rem)] font-semibold leading-[1.04] tracking-[-0.025em]"
          >
            {t('titleA')}
            <br />
            {t('titleB')}
            <span className="cur cur-accent blink ml-[0.12em]" aria-hidden="true" />
          </h1>

          <p className="mt-7 max-w-[34rem] text-xl font-medium leading-[1.3] md:text-[1.375rem]">
            {t('offer')}
          </p>
          <p className="mt-4 max-w-[34rem] leading-[1.6] text-muted">{t('intro')}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-[10px] bg-accent px-6 py-3.5 font-semibold text-accent-ink transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              {t('ctaContact')}
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-[10px] border border-line px-5 py-3.5 font-medium transition-colors hover:border-fg"
            >
              {t('ctaProjects')}
              <ArrowDown
                size={16}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </div>

          <p className="mt-9 font-mono text-[0.8125rem] leading-relaxed text-muted">
            {t('meta')}
          </p>
        </div>
      </PaperToProduct>
    </section>
  );
}
