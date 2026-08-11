import { useTranslations } from 'next-intl';
import Section from './section';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

export default function Contact() {
  const t = useTranslations('contact');

  const links = [
    {
      label: t('email'),
      href: 'mailto:cezarolipretto@gmail.com',
      icon: Mail,
      color: 'text-dracula-yellow hover:text-dracula-fg',
      display: 'cezarolipretto@gmail.com',
    },
    {
      label: t('linkedin'),
      href: 'https://www.linkedin.com/in/cezarpretto',
      icon: Linkedin,
      color: 'text-dracula-cyan hover:text-dracula-fg',
      display: 'linkedin.com/in/cezarpretto',
    },
    {
      label: t('github'),
      href: 'https://github.com/cezarpretto',
      icon: Github,
      color: 'text-dracula-pink hover:text-dracula-fg',
      display: 'github.com/cezarpretto',
    },
    ...(WHATSAPP_NUMBER
      ? [
          {
            label: t('whatsapp'),
            href: `https://wa.me/${WHATSAPP_NUMBER}`,
            icon: MessageCircle,
            color: 'text-dracula-green hover:text-dracula-fg',
            display: t('whatsappLabel'),
          },
        ]
      : []),
  ];

  return (
    <Section id="contact" ariaLabelledby="contact-title" className="bg-dracula-bg-soft/20">
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="contact-title"
          className="font-display text-3xl font-bold text-dracula-fg md:text-5xl"
        >
          {t('title')}
        </h2>
        <p className="mt-6 font-body text-lg text-dracula-fg-muted md:text-xl">
          {t('subtitle')}
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') || link.href.startsWith('https://wa.me') ? '_blank' : undefined}
                rel={link.href.startsWith('http') || link.href.startsWith('https://wa.me') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-dracula-current/60 bg-dracula-bg-soft/40 p-5 text-left transition-all hover:border-dracula-purple/60 hover:bg-dracula-bg-soft/80"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-dracula-current/50 transition-colors group-hover:bg-dracula-purple/20">
                  <Icon className={link.color} size={22} />
                </span>
                <div>
                  <span className="block font-display font-semibold text-dracula-fg">
                    {link.label}
                  </span>
                  <span className="text-sm text-dracula-fg-muted">{link.display}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
