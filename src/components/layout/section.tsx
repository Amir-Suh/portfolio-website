import { cn } from "@/lib/utils";

type SectionTag = "section" | "div" | "article";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  as?: SectionTag;
}

export function Section({ children, className, as: Tag = "section" }: SectionProps) {
  return (
    <Tag className={cn("py-16 sm:py-24", className)}>
      {children}
    </Tag>
  );
}
