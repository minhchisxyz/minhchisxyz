type Project = {
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

type SkillStack = {
  title: string;
  skills: string[];
}

const projectData: Project[] = [
  {
    title: 'Social Network',
    description:
        'A social network-like platform with posts and comments',
    tech: ['Python', 'Django', 'SQLite'],
    imageUrl: 'https://placehold.co/600x400/3B82F6/E0F2FE?text=Social+Network+Project',
    githubUrl: 'https://github.com/minhchisxyz/network'
  },
  {
    title: 'Account Management',
    description:
        'Visualizes bank transactions and currency rates over time ',
    tech: ['Java', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Angular'],
    imageUrl: 'https://placehold.co/600x400/8B5CF6/F5F3FF?text=Account+Management+Project',
    githubUrl: 'https://github.com/minhchisxyz/account-management'
  },
  {
    title: 'Debt Management',
    description:
        'Tracks client invoices, generates PDFs, and visualizes data',
    tech: ['Java', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Angular', 'iTextPDF'],
    imageUrl: 'https://placehold.co/600x400/10B981/ECFDF5?text=Debt+Management+Project',
    githubUrl: 'https://github.com/minhchisxyz/Debt-Management'
  },
  {
    title: 'Book-n-eat',
    description:
        'Tracks client invoices, generates PDFs, and visualizes data',
    tech: ['Java', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Angular', 'iTextPDF'],
    imageUrl: 'https://placehold.co/600x400/10B981/ECFDF5?text=Book+n+Eat+Project',
    githubUrl: 'https://github.com/minhchi1709/book-n-eat'
  },
  {
    title: 'Blackjack',
    description:
        'Client-side blackjack game against a bot, deployed on GitHub Pages',
    tech: ['TypeScript', 'Angular'],
    imageUrl: 'https://placehold.co/600x400/10B981/ECFDF5?text=Black+Jack+Project',
    githubUrl: 'https://github.com/minhchi1709/blackjack',
    liveUrl: 'https://minhchisxyz.github.io/blackjack/'
  },
];

const skillStacks: SkillStack[] = [
  {
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C/C++', 'C#']
  },
  {
    title: 'Backend',
    skills: ['Spring Boot', 'Node.js', 'Next.js', 'FastAPI', 'Flask', 'Django', '.NET']
  },
  {
    title: 'Frontend',
    skills: ['Next.js', 'Angular', 'Tailwind CSS', 'Bootstrap']
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'SQLite']
  },
  {
    title: 'Machine Learning',
    skills: ['NumPy', 'scikit-learn', 'PyTorch', 'TensorFlow', 'pandas']
  },
  {
    title: 'DevOps',
    skills: ['Git', 'CI/CD', 'Jenkins', 'Maven', 'Docker', 'Kubernetes', 'Helm']
  }
]

export function getProjects(): Project[] {
  return projectData;
}

export function getSkills(): SkillStack[] {
  return skillStacks;
}