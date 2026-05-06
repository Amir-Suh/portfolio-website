import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

const highlights = [
  "Full-stack web development",
  "Systems & distributed computing",
  "Research & technical writing",
  "Open source contribution",
];

export function About() {
  return (
    <Section className="border-t border-border">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Text */}
          <div>
            <p className="mb-2 font-mono text-sm tracking-widest text-accent">
              About Me
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Building things that matter
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a software engineer passionate about crafting clean,
                efficient solutions to complex problems. My work spans full-stack
                web development, systems design, and applied research.
              </p>
              <p>
                When I&apos;m not writing code, I&apos;m exploring new
                technologies, contributing to open source, or reading about
                computer science fundamentals.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="rounded-lg border border-border bg-muted/40 p-8">
            <p className="mb-4 text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Focus Areas
            </p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
