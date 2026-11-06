import Link from "next/link";
import { navItems, profile } from "@/content/profile";
import { availableLinks } from "@/lib/links";
import { Container } from "./Container";

export function Footer() {
  const links = availableLinks();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-text">
                  {item.label}
                </Link>
              </li>
            ))}
            {links.map((l) => (
              <li key={l.key}>
                <a
                  href={l.href}
                  {...(l.key === "email" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className="transition-colors hover:text-text"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
