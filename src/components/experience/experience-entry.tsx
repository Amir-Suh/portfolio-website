import { Badge } from "@/components/ui/badge";
import type { WorkExperience } from "@/types";

interface ExperienceEntryProps {
  entry: WorkExperience;
}

export function ExperienceEntry({ entry }: ExperienceEntryProps) {
  const dateRange = entry.endDate
    ? `${entry.startDate} – ${entry.endDate}`
    : `${entry.startDate} – Present`;

  return (
    <div className="relative pl-6 border-l-2 border-border hover:border-accent transition-colors">
      {/* Timeline dot */}
      <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-border" />

      <div className="flex flex-col gap-3">
        {/* Header */}
        <div>
          <h3 className="font-semibold text-foreground">{entry.role}</h3>
          <p className="text-sm text-muted-foreground">
            {entry.company} · {entry.location}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">{dateRange}</p>
        </div>

        {/* Bullet points */}
        <ul className="space-y-1.5">
          {entry.description.map((point, i) => (
            <li key={i} className="flex gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {entry.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
