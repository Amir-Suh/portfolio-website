export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "C++", "Java", "SQL"],
  },
  {
    name: "Frameworks & Libraries",
    skills: ["Next.js", "React", "Node.js", "FastAPI", "Tailwind CSS"],
  },
  {
    name: "Tools & Platforms",
    skills: ["Git", "Docker", "PostgreSQL", "Linux", "Vercel"],
  },
];
