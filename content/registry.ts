import type { InternalLink, SeoPageDefinition } from "@/config/types";
import { legalPages } from "./legal";
import { corePages } from "./pages";

export const allPages: SeoPageDefinition[] = [...corePages, ...legalPages];
export const enabledPages = allPages.filter((page) => page.enabled);
export const enabledCorePages = corePages.filter((page) => page.enabled);
export const visibleCorePages = enabledCorePages.filter((page) => page.navVisible);
export const enabledLegalPages = legalPages.filter((page) => page.enabled);
export const characterDetailPages = enabledCorePages.filter((page) => page.parentSlug === "characters");

/** P1 pages grouped under the header "Resources" dropdown (and the footer Resources column). */
export const resourceSlugs = ["download-and-platforms", "updates", "speedrun"] as const;

export const resourcePages = resourceSlugs
  .map((slug) => enabledCorePages.find((page) => page.slug === slug))
  .filter((page): page is SeoPageDefinition => Boolean(page));

export type PrimaryNavItem =
  | { kind: "link"; label: string; slug: string }
  | { kind: "menu"; label: string; slug: string; children: InternalLink[] };

const PRIMARY_NAV_ORDER = [
  "beginner-guide",
  "gameplay",
  "endings-guide",
  "characters",
  "controls-and-tools",
  "mods",
  "vr-mod",
  "how-to-escape",
];

export function getPageBySlug(slug: string) {
  return enabledPages.find((page) => page.slug === slug);
}

export function getRelatedPages(page: SeoPageDefinition) {
  return (page.relatedSlugs ?? [])
    .map((slug) => getPageBySlug(slug))
    .filter((related): related is SeoPageDefinition => Boolean(related));
}

export function getPrimaryNavItems(): PrimaryNavItem[] {
  const bySlug = new Map(visibleCorePages.map((page) => [page.slug, page]));
  const seen = new Set<string>();
  const ordered: SeoPageDefinition[] = [];

  for (const slug of PRIMARY_NAV_ORDER) {
    const page = bySlug.get(slug);
    if (page) {
      ordered.push(page);
      seen.add(slug);
    }
  }
  for (const page of visibleCorePages) {
    if (!seen.has(page.slug)) ordered.push(page);
  }

  const items: PrimaryNavItem[] = ordered.map((page) => {
    if (page.slug === "characters") {
      return {
        kind: "menu",
        label: page.navLabel,
        slug: page.slug,
        children: [
          { label: "All Characters", slug: "characters" },
          ...characterDetailPages.map((child) => ({ label: child.navLabel, slug: child.slug })),
        ],
      };
    }
    return { kind: "link", label: page.navLabel, slug: page.slug };
  });

  if (resourcePages.length) {
    items.push({
      kind: "menu",
      label: "Resources",
      slug: "resources",
      children: resourcePages.map((page) => ({ label: page.navLabel, slug: page.slug })),
    });
  }

  return items;
}
