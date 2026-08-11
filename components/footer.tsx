import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-dracula-current/50 bg-dracula-bg-soft/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-dracula-fg-muted">
          {t('copyright', { year })}
        </p>
        <p className="font-mono text-xs text-dracula-comment">
          Built with Next.js + Tailwind + Dracula
        </p>
      </div>
    </footer>
  );
}
