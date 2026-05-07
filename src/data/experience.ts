import type { WorkExperience, Education } from "@/types";

export const workExperience: WorkExperience[] = [
  {
    company: "Company Name",
    role: "Software Engineer",
    location: "Remote",
    startDate: "Jan 2025",
    endDate: null,
    description: [
      "Developed and maintained full-stack web applications serving thousands of users.",
      "Collaborated with cross-functional teams to deliver features on schedule.",
      "Improved application performance by 40% through query optimisation and caching.",
    ],
    technologies: ["TypeScript", "Next.js", "PostgreSQL", "Docker"],
  },
  {
    company: "Previous Company",
    role: "Junior Software Developer",
    location: "City, Country",
    startDate: "Jun 2023",
    endDate: "Dec 2024",
    description: [
      "Built REST APIs and internal tooling using Python and FastAPI.",
      "Wrote comprehensive unit and integration tests, maintaining 90%+ coverage.",
      "Participated in code reviews and contributed to engineering best practices.",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Linux"],
  },
];

export const education: Education[] = [
  {
    institution: "University Name",
    degree: "Bachelor of Science",
    field: "Computer Science",
    startDate: "Sep 2020",
    endDate: "Jun 2024",
    gpa: "3.8 / 4.0",
    description:
      "Relevant coursework: Algorithms, Distributed Systems, Machine Learning, Software Engineering.",
  },
];
