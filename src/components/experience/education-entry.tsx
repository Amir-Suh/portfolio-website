import type { Education } from "@/types";

interface EducationEntryProps {
  entry: Education;
}

export function EducationEntry({ entry }: EducationEntryProps) {
  const dateRange = entry.endDate
    ? `${entry.startDate} – ${entry.endDate}`
    : `${entry.startDate} – Present`;

  return (
    <div className="relative pl-6 border-l-2 border-border hover:border-accent transition-colors">
      {/* Timeline dot */}
      <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-border" />

      <div className="flex flex-col gap-2">
        <div>
          <h3 className="font-semibold text-foreground">
            {entry.degree} in {entry.field}
          </h3>
          <p className="text-sm text-muted-foreground">{entry.institution}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{dateRange}</p>
        </div>

        {entry.gpa && (
          <p className="text-sm text-muted-foreground">GPA: {entry.gpa}</p>
        )}

        {entry.description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {entry.description}
          </p>
        )}
      </div>
    </div>
  );
}
