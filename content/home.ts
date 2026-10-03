import type { HomePageDefinition } from "@/config/types";
import rawHomePage from "./generated/home.json";
import { resourcePages } from "./registry";

export const homePage = rawHomePage as HomePageDefinition;

const CHOOSE_WHAT_YOU_NEED_ID = "choose-what-you-need";

// Resource pages (Download & Platforms, Updates) join the home router grid from
// the shared registry so home never needs hand edits when the group grows.
const resourceLinks = resourcePages.map((page) => ({
  label: page.navLabel,
  slug: page.slug,
  description: page.description,
}));

const chooseSection = homePage.sections.find((section) => section.id === CHOOSE_WHAT_YOU_NEED_ID);
if (chooseSection && resourceLinks.length) {
  const existing = new Set((chooseSection.links ?? []).map((link) => link.slug));
  chooseSection.links = [...(chooseSection.links ?? []), ...resourceLinks.filter((link) => !existing.has(link.slug))];
}
