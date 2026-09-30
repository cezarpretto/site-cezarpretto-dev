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
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        href="/#projects"
        className="label mb-10 inline-flex items-center gap-2 text-muted transition-colors hover:text-fg"
      >
        <ArrowLeft size={16} />
        {t('back')}
      </Link>

      <header className="mb-12 border-b border-line pb-10">
        <h1 className="text-[clamp(2rem,4.6vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-balance">
          {title}
          <span className="cur cur-accent blink ml-[0.12em]" aria-hidden="true" />
        </h1>
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.frontmatter.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-[4px] border border-line px-2.5 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </header>

      <div className="prose prose-brand prose-lg max-w-none prose-headings:font-sans">
        {project.content}
      </div>

      <div className="mt-14 flex flex-wrap gap-3 border-t border-line pt-10">
        {project.frontmatter.demoUrl && (
          <a
            href={project.frontmatter.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] bg-accent px-5 py-3 font-semibold text-accent-ink transition-transform duration-200 hover:-translate-y-0.5"
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
            className="inline-flex items-center gap-2 rounded-[10px] border border-line px-5 py-3 font-medium transition-colors hover:border-fg"
          >
            <Github size={18} />
            {t('viewSource')}
          </a>
        )}
      </div>
    </article>
  );
}
