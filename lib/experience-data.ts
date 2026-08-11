export interface ExperienceRole {
  company: string;
  role: string;
  period: string;
  summary: string;
}

export const experienceByLocale: Record<string, ExperienceRole[]> = {
  pt: [
    {
      company: 'Gupy',
      role: 'Sócio e Lead Software Engineer',
      period: '2021 — Atual',
      summary:
        'Sócio na trilha técnica: responsabilidade sobre arquitetura, decisões técnicas críticas e estratégia de produto em soluções que impactam milhares de empresas e candidatos no RH digital.',
    },
    {
      company: 'Tech Leads Club',
      role: 'Membro',
      period: '2025 — Atual',
      summary:
        'Comunidade brasileira voltada para desenvolvimento de carreira, liderança técnica e engenharia de software de alta performance. Aulas semanais, cursos avançados, mentorias e trocas de experiências práticas entre líderes técnicos.',
    },
    {
      company: 'Super Simples',
      role: 'Software Engineer',
      period: '2018 — 2021',
      summary:
        'Desenvolvimento de soluções para simplificar a gestão contábil e fiscal de pequenas empresas, com foco em produtos web escaláveis.',
    },
    {
      company: 'Planos Assessoria',
      role: 'Analista de Sistemas',
      period: '2013 — 2021',
      summary:
        'Atuação em consultoria e análise de sistemas, apoiando clientes na estruturação de processos e soluções tecnológicas.',
    },
  ],
  en: [
    {
      company: 'Gupy',
      role: 'Partner & Lead Software Engineer',
      period: '2021 — Present',
      summary:
        'Partner on the technical track: ownership of architecture, critical technical decisions, and product strategy across solutions impacting thousands of companies and candidates in digital HR.',
    },
    {
      company: 'Tech Leads Club',
      role: 'Member',
      period: '2025 — Present',
      summary:
        'Brazilian community focused on career development, technical leadership, and high-performance software engineering. Weekly classes, advanced courses, mentoring, and practical experience exchanges among technical leaders.',
    },
    {
      company: 'Super Simples',
      role: 'Software Engineer',
      period: '2018 — 2021',
      summary:
        'Development of solutions to simplify accounting and tax management for small businesses, focusing on scalable web products.',
    },
    {
      company: 'Planos Assessoria',
      role: 'Systems Analyst',
      period: '2013 — 2021',
      summary:
        'Consulting and systems analysis, supporting clients in structuring processes and technology solutions.',
    },
  ],
};
