type SkillStack = {
  title: string;
  skills: string[];
}

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

export function getSkills(): SkillStack[] {
  return skillStacks;
}