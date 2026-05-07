import Link from "next/link";
import { ArrowRight, Code2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-foreground leading-snug">
          {project.title}
        </h3>
        {project.featured && (
          <span
            className={cn(
              "shrink-0 rounded-full border px-2 py-0.5 text-xs font-medium",
              "border-accent/30 bg-accent/10 text-accent"
            )}
          >
            Featured
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tech badges — show max 4 to keep cards uniform */}
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 4).map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
        {project.technologies.length > 4 && (
          <Badge>+{project.technologies.length - 4}</Badge>
        )}
      </div>

      {/* Footer links */}
      <div className="flex items-center justify-between border-t border-border pt-4">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
        >
          View Details <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source code"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Code2 className="h-4 w-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live demo"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
