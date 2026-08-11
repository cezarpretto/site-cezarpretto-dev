import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

export interface ProjectFrontmatter {
  title: string;
  title_en: string;
  summary: string;
  summary_en: string;
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  order?: number;
}

export interface Project {
  slug: string;
  frontmatter: ProjectFrontmatter;
  content: React.ReactNode;
}

const projectsDirectory = path.join(process.cwd(), 'content/projects');

export async function getProjects(): Promise<Project[]> {
  const fileNames = fs.readdirSync(projectsDirectory);

  const projects = await Promise.all(
    fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(projectsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        const { content: compiledContent } = await compileMDX({
          source: content,
          options: { parseFrontmatter: false },
        });

        return {
          slug,
          frontmatter: data as ProjectFrontmatter,
          content: compiledContent,
        };
      })
  );

  return projects.sort((a, b) => (a.frontmatter.order ?? 0) - (b.frontmatter.order ?? 0));
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const { content: compiledContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  });

  return {
    slug,
    frontmatter: data as ProjectFrontmatter,
    content: compiledContent,
  };
}
