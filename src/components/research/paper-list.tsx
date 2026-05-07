"use client";

import { useMemo, useState } from "react";
import { PaperCard } from "./paper-card";
import { cn } from "@/lib/utils";
import type { Paper } from "@/types";

interface PaperListProps {
  papers: Paper[];
}

export function PaperList({ papers }: PaperListProps) {
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => {
    const unique = Array.from(new Set(papers.flatMap((p) => p.tags)));
    return ["All", ...unique.sort()];
  }, [papers]);

  const filtered = useMemo(() => {
    if (activeTag === "All") return papers;
    return papers.filter((p) => p.tags.includes(activeTag));
  }, [papers, activeTag]);

  return (
    <div>
      {/* Tag filter bar */}
      <div className="mb-10 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              activeTag === tag
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Paper list — single column, full width for readability */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {filtered.map((paper) => (
            <PaperCard key={paper.slug} paper={paper} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          No papers tagged with &ldquo;{activeTag}&rdquo; yet.
        </p>
      )}
    </div>
  );
}
