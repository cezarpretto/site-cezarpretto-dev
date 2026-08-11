import { useLocale, useTranslations } from 'next-intl';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Project } from '@/lib/projects';
import type { Locale } from '@/i18n/routing';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations('projects');
  const { frontmatter } = project;

  const title = locale === 'en' && frontmatter.title_en ? frontmatter.title_en : frontmatter.title;
  const summary =
    locale === 'en' && frontmatter.summary_en ? frontmatter.summary_en : frontmatter.summary;

  return (
    <article
      className="group animate-slide-up relative flex flex-col rounded-2xl border border-dracula-current/60 bg-dracula-bg-soft/40 p-6 opacity-0 transition-all hover:border-dracula-purple/60 hover:bg-dracula-bg-soft/80 hover:shadow-xl hover:shadow-dracula-purple/10"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link
        href={`/projetos/${project.slug}`}
        aria-label={title}
        className="absolute inset-0 z-0 rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dracula-cyan"
      />

      <div className="mb-4 flex flex-wrap gap-2">
        {frontmatter.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-dracula-current/80 px-2.5 py-1 font-mono text-xs text-dracula-cyan"
          >
            {tech}
          </span>
        ))}
      </div>

      <h3 className="font-display text-2xl font-bold text-dracula-fg transition-colors group-hover:text-dracula-cyan">
        {title}
      </h3>
      <p className="mt-3 flex-1 font-body leading-relaxed text-dracula-fg-muted">{summary}</p>

      <div className="relative z-10 mt-6 flex flex-wrap items-center gap-4">
        {frontmatter.demoUrl && (
          <a
            href={frontmatter.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-dracula-green transition-colors hover:text-dracula-fg"
          >
            <ExternalLink size={16} />
            {t('viewDemo')}
          </a>
        )}
        {frontmatter.repoUrl && (
          <a
            href={frontmatter.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-dracula-pink transition-colors hover:text-dracula-fg"
          >
            <Github size={16} />
            {t('viewSource')}
          </a>
        )}
      </div>
    </article>
  );
}
