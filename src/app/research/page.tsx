import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PaperList } from "@/components/research/paper-list";
import { papers } from "@/data/papers";

export const metadata: Metadata = {
  title: "Research",
  description: "Academic research papers and publications.",
};

export default function ResearchPage() {
  return (
    <Section>
      <Container>
        <div className="mb-12">
          <p className="mb-2 font-mono text-sm tracking-widest text-accent">
            Publications
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Research
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Academic papers and research I&apos;ve authored or contributed to.
            Filter by topic below.
          </p>
        </div>

        <PaperList papers={papers} />
      </Container>
    </Section>
  );
}
