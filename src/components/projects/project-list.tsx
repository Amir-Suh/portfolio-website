"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...unique.sort()];
  }, [projects]);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [projects, activeFilter]);

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              activeFilter === cat
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground text-sm">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
