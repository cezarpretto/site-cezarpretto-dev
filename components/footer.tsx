import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/cezarpretto-compacta-fundo-escuro.svg"
            alt="cp"
            className="logo-on-dark block h-11 w-auto"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/cezarpretto-compacta-fundo-claro.svg"
            alt="cp"
            className="logo-on-light h-11 w-auto"
          />
          <p className="text-sm text-muted">{t('tagline')}</p>
        </div>
        <p className="font-mono text-[0.8125rem] text-muted">{t('copyright', { year })}</p>
      </div>
    </footer>
  );
}
