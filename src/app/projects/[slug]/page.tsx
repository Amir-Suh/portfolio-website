import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { projects } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <Section>
      <Container className="max-w-3xl">
        {/* Back link */}
        <Button href="/projects" variant="ghost" size="sm" className="mb-8 -ml-2">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Button>

        {/* Meta row */}
        <div className="mb-4 flex items-center gap-3">
          <Badge>{project.category}</Badge>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {project.title}
        </h1>

        {/* Tagline */}
        <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Action links */}
        <div className="mb-10 flex flex-wrap gap-3">
          {project.githubUrl && (
            <Button href={project.githubUrl} variant="outline" size="sm">
              <Code2 className="mr-2 h-4 w-4" /> View Code
            </Button>
          )}
          {project.liveUrl && (
            <Button href={project.liveUrl} variant="outline" size="sm">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Button>
          )}
        </div>

        {/* Tech stack */}
        <div className="mb-10">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>

        {/* Long description */}
        {project.longDescription && (
          <div>
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
}
