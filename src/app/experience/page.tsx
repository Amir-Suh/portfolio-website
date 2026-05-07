import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ExperienceEntry } from "@/components/experience/experience-entry";
import { EducationEntry } from "@/components/experience/education-entry";
import { workExperience, education } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work history, education, and professional background.",
};

export default function ExperiencePage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <div className="mb-12">
          <p className="mb-2 font-mono text-sm tracking-widest text-accent">
            Background
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Experience
          </h1>
        </div>

        {/* Work experience */}
        <div className="mb-16">
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Work
          </h2>
          <div className="flex flex-col gap-10">
            {workExperience.map((entry, i) => (
              <ExperienceEntry key={i} entry={entry} />
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Education
          </h2>
          <div className="flex flex-col gap-10">
            {education.map((entry, i) => (
              <EducationEntry key={i} entry={entry} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
