export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "C", "C++", "TypeScript", "JavaScript", "Java", "SQL", "HTML", "CSS", "R", "Haskell"],
  },
  {
    name: "Frameworks & Libraries",
    skills: ["NumPy", "pandas", "tensorflow", "sickit-learn", "matplotlib", "Next.js", "React", "Node.js", "FastAPI", "Tailwind CSS"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "Docker", "PostgreSQL", "Linux", "Vercel"],
  },
];
