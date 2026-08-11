import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { getProjectBySlug, getProjects } from '@/lib/projects';
import { routing, type Locale } from '@/i18n/routing';

interface ProjectPageProps {
  params: {
    locale: Locale;
    slug: string;
  };
}

export async function generateStaticParams({ params: { locale } }: { params: { locale: Locale } }) {
  const projects = await getProjects();
  return projects.map((project) => ({ locale, slug: project.slug }));
}

export async function generateMetadata({ params: { slug, locale } }: ProjectPageProps) {
  const project = await getProjectBySlug(slug);
  if (!project) return {};

  const title =
    locale === 'en' && project.frontmatter.title_en
      ? project.frontmatter.title_en
      : project.frontmatter.title;

  return {
    title: `${title} — Cezar Pretto`,
    description:
      locale === 'en' && project.frontmatter.summary_en
        ? project.frontmatter.summary_en
        : project.frontmatter.summary,
  };
}

export default async function ProjectPage({ params: { slug, locale } }: ProjectPageProps) {
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const project = await getProjectBySlug(slug);
  const t = await getTranslations('projects');

  if (!project) {
    notFound();
  }

  const title =
    locale === 'en' && project.frontmatter.title_en
      ? project.frontmatter.title_en
      : project.frontmatter.title;

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center gap-2 font-mono text-sm text-dracula-fg-muted transition-colors hover:text-dracula-cyan"
      >
        <ArrowLeft size={16} />
        {t('back')}
      </Link>

      <header className="mb-10">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.frontmatter.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-dracula-current px-3 py-1 font-mono text-xs text-dracula-cyan"
            >
              {tech}
            </span>
          ))}
        </div>
        <h1 className="font-display text-4xl font-bold text-dracula-fg md:text-5xl">{title}</h1>
      </header>

      <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:text-dracula-fg prose-strong:text-dracula-pink prose-a:text-dracula-cyan">
        {project.content}
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        {project.frontmatter.demoUrl && (
          <a
            href={project.frontmatter.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-dracula-green px-5 py-2.5 font-display font-semibold text-dracula-bg transition-colors hover:bg-dracula-fg"
          >
            <ExternalLink size={18} />
            {t('viewDemo')}
          </a>
        )}
        {project.frontmatter.repoUrl && (
          <a
            href={project.frontmatter.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-dracula-current px-5 py-2.5 font-display font-semibold text-dracula-fg transition-colors hover:border-dracula-pink hover:text-dracula-pink"
          >
            <Github size={18} />
            {t('viewSource')}
          </a>
        )}
      </div>
    </article>
  );
}
