import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Paper } from "@/types";

interface PaperCardProps {
  paper: Paper;
}

const ABSTRACT_LIMIT = 180;

export function PaperCard({ paper }: PaperCardProps) {
  const excerpt =
    paper.abstract.length > ABSTRACT_LIMIT
      ? paper.abstract.slice(0, ABSTRACT_LIMIT).trimEnd() + "…"
      : paper.abstract;

  return (
    <Card className="flex flex-col gap-4">
      {/* Venue + year */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span className="font-medium">{paper.venue}</span>
        <span>·</span>
        <span>{paper.year}</span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-foreground leading-snug">
        {paper.title}
      </h3>

      {/* Authors */}
      <p className="text-xs text-muted-foreground">
        {paper.authors.join(", ")}
      </p>

      {/* Abstract excerpt */}
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {paper.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      {/* PDF link */}
      {paper.pdfUrl && (
        <div className="border-t border-border pt-4">
          <a
            href={paper.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
          >
            <FileText className="h-3.5 w-3.5" /> Read Paper
          </a>
        </div>
      )}
    </Card>
  );
}
