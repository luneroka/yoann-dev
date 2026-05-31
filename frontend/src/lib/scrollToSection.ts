import type { MouseEvent } from "react";

export function scrollToSection(href: string) {
  const element = document.querySelector(href);

  if (element) {
    if (window.location.hash) {
      window.history.replaceState(
        window.history.state,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }

    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function handleSectionLinkClick(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  scrollToSection(event.currentTarget.hash);
}
