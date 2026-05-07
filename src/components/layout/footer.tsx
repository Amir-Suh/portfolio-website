import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Container } from "./container";

const linkClass =
  "text-muted-foreground transition-colors hover:text-foreground";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Amir Suhail. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/Amir-Suh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={linkClass}
            >
              <FaGithub size={18} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/amir-suhail-1904b1328/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={linkClass}
            >
              <FaLinkedin size={18} />
            </Link>

            <Link
              href="mailto:amirsyedsuhail@gmail.com"
              aria-label="Email"
              className={linkClass}
            >
              <Mail className="h-[18px] w-[18px]" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
