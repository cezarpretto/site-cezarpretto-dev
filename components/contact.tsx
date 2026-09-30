import { useTranslations } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

// Fechamento em Violeta pleno (a marca em campo), texto Branco (9,0:1).
// O cursor aqui é branco: é a versão mono-branco do logo, para fundos coloridos.
export default function Contact() {
  const t = useTranslations('contact');

  const links = [
    { label: t('email'), href: 'mailto:cezarolipretto@gmail.com', display: 'cezarolipretto@gmail.com' },
    { label: t('linkedin'), href: 'https://www.linkedin.com/in/cezarpretto', display: 'linkedin.com/in/cezarpretto' },
    { label: t('github'), href: 'https://github.com/cezarpretto', display: 'github.com/cezarpretto' },
    ...(WHATSAPP_NUMBER
      ? [{ label: t('whatsapp'), href: `https://wa.me/${WHATSAPP_NUMBER}`, display: t('whatsappLabel') }]
      : []),
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-violeta text-white"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
        <h2
          id="contact-title"
          className="max-w-[14ch] text-[clamp(2.75rem,8vw,6rem)] font-semibold leading-[1] tracking-[-0.03em] text-balance"
        >
          {t('titleA')} {t('titleB')}
          <span className="cur blink ml-[0.1em]" aria-hidden="true" />
        </h2>
        <p className="mt-8 max-w-[34rem] text-xl leading-[1.45] text-white/90">{t('subtitle')}</p>

        <ul className="mt-16 border-t border-white/30">
          {links.map((link) => {
            const external = link.href.startsWith('http');
            return (
              <li key={link.href} className="border-b border-white/30">
                <a
                  href={link.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="group flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-6 outline-offset-4 sm:flex-nowrap transition-[padding] duration-300 hover:pl-3 focus-visible:pl-3"
                >
                  <span className="label w-full shrink-0 text-white/80 sm:w-28">{link.label}</span>
                  <span className="min-w-0 flex-1 break-words font-mono text-[clamp(0.95rem,2.2vw,1.5rem)] font-medium">
                    {link.display}
                  </span>
                  <ArrowUpRight
                    size={24}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
