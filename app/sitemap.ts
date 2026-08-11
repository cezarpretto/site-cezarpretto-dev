import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { getProjects } from '@/lib/projects';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();
  const baseUrl = 'https://cezarpretto.dev';

  const routes = ['', '#projects', '#experience', '#stack', '#contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, `${baseUrl}/${locale}${route}`])
      ),
    },
  }));

  const projectRoutes = projects.flatMap((project) =>
    routing.locales.map((locale) => ({
      url: `${baseUrl}/${locale}/projetos/${project.slug}`,
      lastModified: new Date(),
    }))
  );

  return [...routes, ...projectRoutes];
}
