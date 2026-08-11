export interface StackCategory {
  key: string;
  items: string[];
}

export const stackCategories: StackCategory[] = [
  {
    key: 'frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Ant Design', 'Zustand'],
  },
  {
    key: 'backend',
    items: ['Node.js', 'NestJS', 'Express', 'PostgreSQL', 'MongoDB', 'Sequelize', 'Docker'],
  },
  {
    key: 'data',
    items: [
      'GitHub Actions',
      'CapRover',
      'Cloudflare R2',
      'Pino',
      'New Relic',
      'Graphile Worker',
    ],
  },
  {
    key: 'practices',
    items: [
      'DDD',
      'Clean Architecture',
      'TDD',
      'Modular Monolith',
      'Spec-Driven Development',
      'Mentoria',
    ],
  },
];
