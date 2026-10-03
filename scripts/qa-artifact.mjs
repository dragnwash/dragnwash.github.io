#!/usr/bin/env node
/**
 * Fail the build if GitHub Pages out/ is missing required HTML/SEO artifacts.
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const root = process.cwd();
const outDir = join(root, "out");
const errors = [];

const generatedPages = require("../content/generated/pages.json");
// Expansion pages are TypeScript — read the slug list from the shared registry
// (this script runs via `node --import tsx`; tsx emits CJS, so handle interop)
// so new pages stay in sync automatically.
const expansionModule = await import("../content/expansion-pages.ts");
const expansionPages =
  expansionModule.expansionPages
  ?? expansionModule.default?.expansionPages
  ?? expansionModule["module.exports"]?.expansionPages;
if (!Array.isArray(expansionPages)) {
  console.error("Artifact QA failed: could not load expansionPages from content/expansion-pages.ts");
  process.exit(1);
}
const expansionSlugs = expansionPages.filter((p) => p.enabled).map((p) => p.slug);
const legalSlugs = ["about", "contact", "privacy", "terms", "copyright"];
const coreSlugs = [
  ...generatedPages.filter((p) => p.enabled).map((p) => p.slug),
  ...expansionSlugs,
];
const allSlugs = [...new Set([...coreSlugs, ...legalSlugs])];

function fail(message) {
  errors.push(message);
}

function mustFile(relative, minBytes = 1) {
  const absolute = join(outDir, relative);
  if (!existsSync(absolute)) {
    fail(`missing artifact: out/${relative}`);
    return false;
  }
  const stat = statSync(absolute);
  if (!stat.isFile()) {
    fail(`expected file: out/${relative}`);
    return false;
  }
  if (stat.size < minBytes) fail(`artifact too small (${stat.size}b): out/${relative}`);
  return true;
}

function mustDir(relative) {
  const absolute = join(outDir, relative);
  if (!existsSync(absolute) || !statSync(absolute).isDirectory()) {
    fail(`missing directory: out/${relative}`);
    return false;
  }
  return true;
}

if (!existsSync(outDir)) {
  console.error("Artifact QA failed: out/ does not exist. Run npm run build:site first.");
  process.exit(1);
}

mustFile(".nojekyll", 0);
mustFile("index.html", 500);
mustFile("404.html", 200);
mustFile("sitemap.xml", 50);
mustFile("robots.txt", 20);
mustDir("_next");
mustDir("_next/static");

if (mustDir("_next/static") && readdirSync(join(outDir, "_next", "static")).length < 1) {
  fail("out/_next/static is empty");
}

for (const slug of allSlugs) {
  mustFile(`${slug}/index.html`, 500);
}

// Explicit freeze + expansion checklist
for (const relative of [
  "gameplay/index.html",
  "mods/index.html",
  "characters/ryan/index.html",
  "characters/conrad/index.html",
  "characters/alexander/index.html",
  "download-and-platforms/index.html",
  "updates/index.html",
  "beginner-guide/index.html",
  "endings-guide/index.html",
  "characters/index.html",
  "controls-and-tools/index.html",
  "vr-mod/index.html",
  "how-to-escape/index.html",
]) {
  mustFile(relative, 500);
}

const sitemap = existsSync(join(outDir, "sitemap.xml"))
  ? readFileSync(join(outDir, "sitemap.xml"), "utf8")
  : "";
const robots = existsSync(join(outDir, "robots.txt"))
  ? readFileSync(join(outDir, "robots.txt"), "utf8")
  : "";

if (!sitemap.includes("https://dragnwash.github.io/")) fail("sitemap.xml missing homepage URL");
for (const slug of [...generatedPages.filter((p) => p.enabled).map((p) => p.slug), ...expansionSlugs]) {
  const expected = `https://dragnwash.github.io/${slug}/`;
  if (!sitemap.includes(expected)) fail(`sitemap.xml missing ${expected}`);
}
if (/disallow:\s*\/(gameplay|mods|characters|download-and-platforms|updates)/i.test(robots)) {
  fail("robots.txt appears to block new routes");
}

if (errors.length) {
  console.error("Artifact QA failed:\n" + errors.map((e) => `- ${e}`).join("\n"));
  process.exit(1);
}

console.log(
  `Artifact QA passed: out/ has homepage, ${allSlugs.length} routed HTML pages, sitemap.xml, robots.txt, and _next/static.`,
);
