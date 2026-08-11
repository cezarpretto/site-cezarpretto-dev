import { useTranslations } from 'next-intl';
import Section from './section';
import ProjectCard from './project-card';
import type { Project } from '@/lib/projects';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const t = useTranslations('projects');

  return (
    <Section id="projects" ariaLabelledby="projects-title">
      <div className="max-w-2xl">
        <h2
          id="projects-title"
          className="font-display text-3xl font-bold text-dracula-fg md:text-4xl"
        >
          {t('title')}
        </h2>
        <p className="mt-4 font-body text-lg text-dracula-fg-muted">{t('subtitle')}</p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
