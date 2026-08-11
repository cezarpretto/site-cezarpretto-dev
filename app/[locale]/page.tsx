import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Experience from '@/components/experience';
import Stack from '@/components/stack';
import Contact from '@/components/contact';
import { getProjects } from '@/lib/projects';
import { routing, type Locale } from '@/i18n/routing';

interface HomePageProps {
  params: { locale: Locale };
}

export default async function HomePage({ params: { locale } }: HomePageProps) {
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const projects = await getProjects();

  return (
    <>
      <Hero />
      <Projects projects={projects} />
      <Experience />
      <Stack />
      <Contact />
    </>
  );
}
