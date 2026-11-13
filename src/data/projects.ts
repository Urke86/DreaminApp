export type ProjectCategory = 'SaaS' | 'Mobile Apps' | 'AI & Automation';

export interface StudioProject {
  id: string;
  name: string;
  category: ProjectCategory;
  stage: 'Released' | 'In development';
  technologies: string[];
  summary: { en: string; sr: string };
  accent: string;
  number: string;
}

/**
 * Public-facing summaries only. Do not add private repo URLs, client credentials,
 * internal business metrics or unapproved client testimonials.
 */
export const studioProjects: StudioProject[] = [
  {
    id: '18holes',
    name: '18Holes.Golf',
    category: 'Mobile Apps',
    stage: 'Released',
    technologies: ['React', 'React Native', 'Expo', 'Supabase'],
    summary: {
      en: 'A connected web and mobile golf experience, including a digital yardage book.',
      sr: 'Povezano web i mobilno golf iskustvo sa digitalnim yardage book funkcijama.',
    },
    accent: '#9DD6B8',
    number: '01',
  },
  {
    id: 'easybook',
    name: 'EasyBook',
    category: 'SaaS',
    stage: 'In development',
    technologies: ['React', 'TypeScript', 'Supabase'],
    summary: {
      en: 'A booking platform that simplifies scheduling and service management.',
      sr: 'Platforma za online zakazivanje koja pojednostavljuje termine i upravljanje uslugama.',
    },
    accent: '#B7A9FF',
    number: '02',
  },
  {
    id: 'garancije',
    name: 'Garancije.rs',
    category: 'Mobile Apps',
    stage: 'In development',
    technologies: ['React Native', 'Expo', 'Supabase'],
    summary: {
      en: 'A mobile-first way to organize receipts, warranties and purchase records.',
      sr: 'Mobilno rešenje za organizaciju računa, garancija i evidencije kupovine.',
    },
    accent: '#A9CBF7',
    number: '03',
  },
  {
    id: 'compa',
    name: 'Compa',
    category: 'AI & Automation',
    stage: 'In development',
    technologies: ['AI', 'Product Design', 'Mobile UX'],
    summary: {
      en: 'A thoughtful AI assistant concept focused on a clear, intuitive experience.',
      sr: 'Koncept AI asistenta sa fokusom na intuitivno i jasno korisničko iskustvo.',
    },
    accent: '#F1C8A0',
    number: '04',
  },
  {
    id: 'jobpilot',
    name: 'Jobpilot AI',
    category: 'AI & Automation',
    stage: 'In development',
    technologies: ['AI', 'Automation', 'Web App'],
    summary: {
      en: 'An AI-powered workspace for discovering and evaluating relevant opportunities.',
      sr: 'AI radno okruženje za pronalaženje i procenu relevantnih poslovnih prilika.',
    },
    accent: '#E5B6D6',
    number: '05',
  },
];
