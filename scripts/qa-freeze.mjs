#!/usr/bin/env node
/**
 * Freeze QA for the 12 pages that currently hold search traffic:
 *   /, /beginner-guide/, /endings-guide/, /characters/, /controls-and-tools/,
 *   /vr-mod/, /how-to-escape/, /gameplay/, /mods/,
 *   /characters/ryan/, /characters/conrad/, /characters/alexander/
 *
 * Layer 1: the seven launch pages (home.json + generated/pages.json) are
 *   compared field-by-field against the committed fixture — title,
 *   description, H1, lead, H2/H3 structure, body paragraphs, FAQ.
 * Layer 2: the five expansion pages live in TypeScript content, so their
 *   committed snapshots (below) pin the same core SEO fields.
 * Layer 3: the built HTML of all 12 routes must keep the frozen title,
 *   description, H1 and self-referencing canonical.
 *
 * Allowed site-wide changes (header/footer navigation, contextual link grids)
 * are outside these fields by design.
 */
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const root = process.cwd();
const fixture = JSON.parse(readFileSync(join(root, "scripts/fixtures/freeze-baseline.json"), "utf8"));
const pages = require("../content/generated/pages.json");
const home = require("../content/generated/home.json");
// qa:freeze runs via `node --import tsx`; tsx transpiles TS to CJS, so named
// exports may land on default / module.exports depending on interop.
const expansionModule = await import("../content/expansion-pages.ts");
const expansionPages =
  expansionModule.expansionPages
  ?? expansionModule.default?.expansionPages
  ?? expansionModule["module.exports"]?.expansionPages;
if (!Array.isArray(expansionPages)) {
  console.error("Freeze QA failed: could not load expansionPages from content/expansion-pages.ts");
  process.exit(1);
}
const errors = [];

function snap(page) {
  return {
    title: page.title,
    description: page.description,
    h1: page.hero.heading,
    lead: page.hero.lead,
    h2: page.sections.map((section) => section.heading),
    h3: page.sections.flatMap((section) => (section.subsections || []).map((item) => item.heading)),
    paragraphs: page.sections.flatMap((section) => [section.intro, ...(section.paragraphs || [])].filter(Boolean)),
    faq: (page.faq || []).map((item) => ({ q: item.question, a: item.answer })),
  };
}

function compare(label, before, after) {
  for (const field of ["title", "description", "h1", "lead", "h2", "h3", "paragraphs", "faq"]) {
    if (JSON.stringify(before[field]) !== JSON.stringify(after[field])) {
      errors.push(`${label}: unauthorized change in ${field}`);
    }
  }
}

compare("home", fixture.home, snap(home));
for (const before of fixture.pages) {
  const page = pages.find((item) => item.slug === before.slug);
  if (!page) {
    errors.push(`${before.slug}: missing from pages.json`);
    continue;
  }
  compare(before.slug, before, snap(page));
}

// Frozen expansion traffic pages — snapshots pin the same core SEO fields.
const expansionFreezeBaseline = {
  gameplay: {
    title: "Drag'n Wash Gameplay & Full Playthrough Guide",
    description:
      "Explore Drag'n Wash gameplay, its cleaning loop, progression and full playthrough flow, with spoiler-aware tips and links to detailed guides for first runs.",
    h1: "Drag'n Wash Gameplay and Playthrough Guide",
  },
  mods: {
    title: "Drag'n Wash Mods Guide — Types, Setup & Safety",
    description:
      "A practical Drag'n Wash mods guide covering mod types, safe setup checks, compatibility, troubleshooting, and the separate community VR mod guide.",
    h1: "Drag'n Wash Mods Guide",
  },
  "characters/ryan": {
    title: "Ryan in Drag'n Wash — Character & Route Guide",
    description:
      "Learn about Ryan in Drag'n Wash, including the character's role, visit tone, route context, and links to endings guidance without full spoiler steps.",
    h1: "Ryan in Drag'n Wash",
  },
  "characters/conrad": {
    title: "Conrad in Drag'n Wash — Character & Route Guide",
    description:
      "A focused guide to Conrad in Drag'n Wash, covering the character's role, request-order caution, route context, and related ending information.",
    h1: "Conrad in Drag'n Wash",
  },
  "characters/alexander": {
    title: "Alexander in Drag'n Wash — Character & Route Guide",
    description:
      "Explore Alexander's role in Drag'n Wash, key interactions, route context, and the relevant ending guidance without unnecessary spoilers or copied walkthroughs.",
    h1: "Alexander in Drag'n Wash",
  },
};

for (const [slug, expected] of Object.entries(expansionFreezeBaseline)) {
  const page = expansionPages.find((item) => item.slug === slug);
  if (!page) {
    errors.push(`${slug}: missing from content/expansion-pages.ts`);
    continue;
  }
  if (page.title !== expected.title) errors.push(`${slug}: unauthorized change in title`);
  if (page.description !== expected.description) errors.push(`${slug}: unauthorized change in description`);
  if (page.hero.heading !== expected.h1) errors.push(`${slug}: unauthorized change in h1`);
}

// Built HTML TDH / canonical sanity for freeze routes
function decode(value) {
  return value
    .replace(/&#x27;/gi, "'")
    .replace(/&#39;/gi, "'")
    .replace(/&apos;/gi, "'")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"');
}

function builtMeta(route) {
  const file = route === "/" ? "out/index.html" : `out${route}index.html`;
  const html = readFileSync(join(root, file), "utf8");
  const title = decode(html.match(/<title>([^<]*)<\/title>/i)?.[1] || "");
  const description = decode(
    html.match(/<meta\s+name=["']description["'][^>]*content=["']([^"']*)["']/i)?.[1]
      || html.match(/<meta\s+content=["']([^"']*)["'][^>]*name=["']description["']/i)?.[1]
      || "",
  );
  const h1 = decode(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, "").trim() || "");
  const canonical =
    html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1]
    || html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1]
    || "";
  return { title, description, h1, canonical };
}

const freezeRoutes = [
  { route: "/", title: fixture.home.title, description: fixture.home.description, h1: fixture.home.h1 },
  ...fixture.pages.map((page) => ({
    route: `/${page.slug}/`,
    title: page.title,
    description: page.description,
    h1: page.h1,
  })),
  ...Object.entries(expansionFreezeBaseline).map(([slug, item]) => ({
    route: `/${slug}/`,
    title: item.title,
    description: item.description,
    h1: item.h1,
  })),
];

for (const item of freezeRoutes) {
  try {
    const built = builtMeta(item.route);
    if (built.title !== item.title) errors.push(`built ${item.route}: title mismatch`);
    if (built.description !== item.description) errors.push(`built ${item.route}: description mismatch`);
    if (built.h1 !== item.h1) errors.push(`built ${item.route}: H1 mismatch`);
    const expectedCanon = `https://dragnwash.github.io${item.route}`;
    if (built.canonical !== expectedCanon) errors.push(`built ${item.route}: canonical ${built.canonical}`);
  } catch (error) {
    errors.push(`built ${item.route}: ${error.message}`);
  }
}

if (errors.length) {
  console.error("Freeze QA failed:\n" + errors.map((e) => `- ${e}`).join("\n"));
  process.exit(1);
}

console.log("Freeze QA passed: 12 traffic pages unchanged in TDH/H structure/body paragraphs + built canonicals.");
