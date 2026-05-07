import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectList } from "@/components/projects/project-list";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of software engineering projects and side experiments.",
};

export default function ProjectsPage() {
  return (
    <Section>
      <Container>
        <div className="mb-12">
          <p className="mb-2 font-mono text-sm tracking-widest text-accent">
            My Work
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Projects
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            A collection of things I&apos;ve built — from web apps to systems
            tools. Filter by category below.
          </p>
        </div>

        <ProjectList projects={projects} />
      </Container>
    </Section>
  );
}
