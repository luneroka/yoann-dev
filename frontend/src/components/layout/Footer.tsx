import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { copy } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/20 py-6 md:py-12">
      <div className="container px-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
          <div className="text-center md:text-left">
            <p className="font-body text-xs text-muted-foreground sm:text-sm">
              © {currentYear} {copy.footer.name}. {copy.footer.copyright}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a
              href="https://www.linkedin.com/in/robertyoann/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-muted-foreground transition-smooth hover:text-primary"
              aria-label={copy.footer.linkedinLabel}
            >
              <FaLinkedin className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">LinkedIn</span>
            </a>

            <a
              href="https://github.com/luneroka"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-muted-foreground transition-smooth hover:text-primary"
              aria-label={copy.footer.githubLabel}
            >
              <FaGithub className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
