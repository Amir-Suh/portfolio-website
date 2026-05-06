import Link from "next/link";
import { Code2, Globe, Mail } from "lucide-react";
import { Container } from "./container";

const socialLinks = [
  {
    href: "https://github.com/Amir-Suh",
    label: "GitHub",
    icon: Code2,
  },
  {
    href: "https://www.linkedin.com/in/amir-suhail-1904b1328/",
    label: "LinkedIn",
    icon: Globe,
  },
  {
    href: "mailto:amirsyedsuhail@gmail.com",
    label: "Email",
    icon: Mail,
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Amir Syed. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
