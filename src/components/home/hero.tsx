import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-4 font-mono text-sm tracking-widest text-accent">
            Hello, I&apos;m
          </p>

          <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Amir Suhail
          </h1>

          <h2 className="mb-6 text-xl font-medium text-muted-foreground sm:text-2xl">
            Software Engineer &amp; Researcher
          </h2>

          <p className="mb-10 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build performant, accessible web applications and conduct research
            at the intersection of software engineering and systems design.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button href="/projects" size="lg">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Me <FileText className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
