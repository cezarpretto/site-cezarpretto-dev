import { useLocale, useTranslations } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import Section from './section';
import { Link } from '@/i18n/navigation';
import type { Project } from '@/lib/projects';
import type { Locale } from '@/i18n/routing';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const t = useTranslations('projects');
  const locale = useLocale() as Locale;

  return (
    <Section id="projects" ariaLabelledby="projects-title">
      <div className="grid gap-6 md:grid-cols-[6fr_5fr] md:items-end md:gap-16">
        <h2
          id="projects-title"
          className="text-[clamp(2.1rem,4.4vw,3.6rem)] font-semibold leading-[1.06] tracking-[-0.02em]"
        >
          {t('title')}
        </h2>
        <p className="max-w-[30rem] leading-[1.6] text-muted">{t('subtitle')}</p>
      </div>

      <div className="mt-14">
        {projects.map((project, index) => {
          const { frontmatter } = project;
          const title =
            locale === 'en' && frontmatter.title_en ? frontmatter.title_en : frontmatter.title;
          const summary =
            locale === 'en' && frontmatter.summary_en
              ? frontmatter.summary_en
              : frontmatter.summary;

          return (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="case">
              <span className="case-idx tnum">
                <span className="cur" aria-hidden="true" />
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>
                <span className="case-title block">{title}</span>
                <span className="case-sum block">{summary}</span>
              </span>
              <span className="case-tech flex items-start justify-end gap-3 max-md:col-start-2 max-md:justify-start">
                <span>{frontmatter.tech.slice(0, 4).join(' · ')}</span>
                <ArrowUpRight size={20} className="case-arrow mt-0.5 shrink-0 max-md:hidden" />
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
