import { useTranslations } from 'next-intl';
import { ArrowDown, Mail } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-gradient-mesh noise-overlay"
    >
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="animate-slide-up font-mono text-sm uppercase tracking-widest text-dracula-cyan opacity-0 stagger-1">
            {t('greeting')}
          </p>
          <h1
            id="hero-title"
            className="animate-slide-up mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight text-dracula-fg opacity-0 stagger-2 md:text-7xl lg:text-8xl"
          >
            {t('name')}
          </h1>
          <p className="animate-slide-up mt-4 font-display text-2xl font-medium text-dracula-purple opacity-0 stagger-3 md:text-3xl">
            {t('role')}
          </p>
          <p className="animate-slide-up mt-2 font-mono text-sm text-dracula-fg-muted opacity-0 stagger-3 md:text-base">
            {t('currentPosition')}
          </p>
          <p className="animate-slide-up mt-8 max-w-2xl font-body text-lg leading-relaxed text-dracula-fg-muted opacity-0 stagger-4 md:text-xl">
            {t('intro')}
          </p>

          <div className="animate-slide-up mt-10 flex flex-wrap items-center gap-4 opacity-0 stagger-5">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-dracula-purple px-6 py-3 font-display font-semibold text-dracula-bg transition-all hover:bg-dracula-pink hover:shadow-lg hover:shadow-dracula-pink/20"
            >
              {t('ctaProjects')}
              <ArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-dracula-current px-6 py-3 font-display font-semibold text-dracula-fg transition-all hover:border-dracula-cyan hover:text-dracula-cyan"
            >
              <Mail size={18} />
              {t('ctaContact')}
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dracula-bg to-transparent" />
    </section>
  );
}
