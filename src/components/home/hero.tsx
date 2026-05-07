import { ArrowRight, FileText, User } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          {/* Text content */}
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
              I build performant, accessible web applications and conduct
              research at the intersection of software engineering and systems
              design.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="/projects" size="lg">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Me <FileText className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://github.com/Amir-Suh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground transition-all hover:scale-110 hover:text-foreground"
              >
                <FaGithub size={32} />
              </a>
              <a
                href="https://www.linkedin.com/in/amir-suhail-1904b1328/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-all hover:scale-110 hover:text-foreground"
              >
                <FaLinkedin size={32} />
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-2 border-border bg-muted sm:h-80 sm:w-80">
              {/*
               * To add your photo:
               * 1. Place your image in /public (e.g. /public/profile.jpg)
               * 2. Replace the placeholder below with:
               *    <Image src="/profile.jpg" alt="Amir Suhail" fill className="object-cover" priority />
               */}
              <div className="flex h-full w-full items-center justify-center">
                <User className="h-32 w-32 text-muted-foreground/30" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
