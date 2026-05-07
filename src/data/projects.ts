import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A high-performance personal portfolio built with Next.js 16, TypeScript, and Tailwind CSS v4.",
    longDescription:
      "Designed and built from scratch using the Next.js App Router and React 19. Features a light/dark theme system powered by next-themes, fully typed data models, and a component-driven architecture. Optimized for SEO and accessibility with a Lighthouse score target of 95+.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    githubUrl: "https://github.com/Amir-Suh/portfolio-website",
    featured: true,
    category: "Web",
    year: 2026,
  },
  {
    slug: "research-api",
    title: "Research Paper API",
    description:
      "A RESTful API for indexing, searching, and retrieving academic research papers with full-text search.",
    longDescription:
      "Built with FastAPI and PostgreSQL. Supports full-text search via pg_trgm, author filtering, and pagination. Includes an async ingestion pipeline that processes PDF metadata and abstracts at scale.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/Amir-Suh",
    featured: true,
    category: "Backend",
    year: 2025,
  },
  {
    slug: "data-pipeline",
    title: "Distributed Data Pipeline",
    description:
      "An event-driven data pipeline for processing and transforming large datasets in real time.",
    longDescription:
      "Engineered a distributed pipeline using Python and Docker that processes high-volume event streams. Designed for fault tolerance with retry logic, dead-letter queues, and monitoring via structured logging.",
    technologies: ["Python", "Docker", "PostgreSQL", "Linux"],
    featured: false,
    category: "Systems",
    year: 2025,
  },
];
