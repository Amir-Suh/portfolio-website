import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-foreground/20",
        className
      )}
    >
      {children}
    </div>
  );
}
