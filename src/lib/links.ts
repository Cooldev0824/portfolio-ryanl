import { profile } from "@/content/profile";
import type { ProfileLink } from "@/content/profile";

export type ResolvedLink = { key: "email" | "linkedin" | "github"; label: string; href: string };

/** Links from the profile that have been filled in; null entries are skipped. */
export function availableLinks(): ResolvedLink[] {
  const entries = Object.entries(profile.links) as [ResolvedLink["key"], ProfileLink][];
  return entries.flatMap(([key, l]) =>
    l.href ? [{ key, label: l.label, href: key === "email" ? `mailto:${l.href}` : l.href }] : [],
  );
}

export const emailAddress = profile.links.email.href;
export const emailHref = emailAddress ? `mailto:${emailAddress}` : "/#contact";
