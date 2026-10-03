#!/usr/bin/env node
/**
 * Static expansion QA — no browser dependency.
 * Reads out/*.html and content sources after build:site.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const outDir = join(root, "out");
const errors = [];
const warnings = [];

const NEW_ROUTES = [
  "/gameplay/",
  "/mods/",
  "/characters/ryan/",
  "/characters/conrad/",
  "/characters/alexander/",
  "/download-and-platforms/",
  "/updates/",
  "/speedrun/",
];
const FREEZE_ROUTES = [
  "/",
  "/beginner-guide/",
  "/endings-guide/",
  "/characters/",
  "/controls-and-tools/",
  "/vr-mod/",
  "/how-to-escape/",
];

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function decode(value) {
  return value
    .replace(/&#x27;/gi, "'")
    .replace(/&#39;/gi, "'")
    .replace(/&apos;/gi, "'")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">");
}

function readHtml(route) {
  const file = route === "/" ? join(outDir, "index.html") : join(outDir, route.slice(1), "index.html");
  if (!existsSync(file)) throw new Error(`missing ${file}`);
  return readFileSync(file, "utf8");
}

function meta(html, name) {
  return decode(
    html.match(new RegExp(`<meta\\s+name=["']${name}["'][^>]*content=["']([^"']*)["']`, "i"))?.[1]
      || html.match(new RegExp(`<meta\\s+content=["']([^"']*)["'][^>]*name=["']${name}["']`, "i"))?.[1]
      || "",
  );
}

function property(html, name) {
  return decode(
    html.match(new RegExp(`<meta\\s+property=["']${name}["'][^>]*content=["']([^"']*)["']`, "i"))?.[1]
      || html.match(new RegExp(`<meta\\s+content=["']([^"']*)["'][^>]*property=["']${name}["']`, "i"))?.[1]
      || "",
  );
}

function count(html, pattern) {
  return (html.match(pattern) || []).length;
}

function hrefs(html) {
  return [...html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)].map((match) => match[1]);
}

function inspectRoute(route) {
  const html = readHtml(route);
  const title = decode(html.match(/<title>([^<]*)<\/title>/i)?.[1] || "");
  const description = meta(html, "description");
  const h1Count = count(html, /<h1\b/gi);
  const h2Count = count(html, /<h2\b/gi);
  const canonical =
    html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1]
    || html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i)?.[1]
    || "";
  const expectedCanon = `https://dragnwash.github.io${route}`;
  const links = hrefs(html);
  const jsonLd = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => match[1]);
  const hasFaqHeading = /id=["']faq["']|<h2[^>]*>\s*Frequently Asked Questions\s*<\/h2>/i.test(html);
  const hasFaqSchema = jsonLd.some((raw) => /"@type"\s*:\s*"FAQPage"/i.test(raw));
  const hasBreadcrumb = jsonLd.some((raw) => /"@type"\s*:\s*"BreadcrumbList"/i.test(raw));
  const hasBanner = /adsterra-banner-slot|data-adsterra="banner/i.test(html);
  const hasNative = /adsterra-native-slot|data-adsterra="native-banner"/i.test(html);

  if (h1Count !== 1) fail(`${route}: expected 1 H1, found ${h1Count}`);
  if (h2Count < 1) fail(`${route}: expected at least 1 H2`);
  if (!title) fail(`${route}: missing title`);
  if (title.length > 60) fail(`${route}: title length ${title.length} > 60`);
  if (!description) fail(`${route}: missing description`);
  if (description.length < 120 || description.length > 170) {
    fail(`${route}: description length ${description.length} outside 120-170`);
  }
  if (canonical !== expectedCanon) fail(`${route}: canonical ${canonical}`);
  if (!property(html, "og:title") || !property(html, "og:description") || !property(html, "og:url")) {
    fail(`${route}: missing Open Graph metadata`);
  }
  if (!meta(html, "twitter:card") && !html.toLowerCase().includes("twitter:card")) {
    fail(`${route}: missing twitter card metadata`);
  }
  // Homepage uses WebSite/WebPage schemas; BreadcrumbList is for subpages.
  if (route !== "/" && !hasBreadcrumb) fail(`${route}: missing BreadcrumbList schema`);
  if (hasFaqHeading && !hasFaqSchema) fail(`${route}: FAQ heading without FAQPage schema`);
  if (!hasFaqHeading && hasFaqSchema) fail(`${route}: FAQPage schema without visible FAQ heading`);
  if (!hasBanner) fail(`${route}: missing banner ad slot markup`);
  if (!hasNative) fail(`${route}: missing native ad slot markup`);

  return { title, description, links, html };
}

if (!existsSync(outDir)) {
  console.error("Expansion QA failed: out/ missing. Run build:site first.");
  process.exit(1);
}

const seenTitles = new Map();
const home = inspectRoute("/");
for (const route of [...FREEZE_ROUTES.filter((r) => r !== "/"), ...NEW_ROUTES]) {
  const data = inspectRoute(route);
  if (seenTitles.has(data.title)) fail(`${route}: duplicate title with ${seenTitles.get(data.title)}`);
  else seenTitles.set(data.title, route);
}
if (seenTitles.has(home.title)) fail(`/: duplicate title`);
else seenTitles.set(home.title, "/");

// Header / Footer discovery on homepage HTML (layout is shared)
for (const href of NEW_ROUTES) {
  if (!home.links.includes(href)) fail(`home HTML missing crawlable link ${href} (nav/footer/start-here)`);
}

const footerOrNavRequired = [
  "/gameplay/",
  "/mods/",
  "/characters/",
  "/characters/ryan/",
  "/characters/conrad/",
  "/characters/alexander/",
  "/download-and-platforms/",
  "/updates/",
];
for (const href of footerOrNavRequired) {
  if (!home.links.includes(href)) fail(`global discovery missing ${href} on home HTML`);
}

// Internal links from new pages should not 404 against out/
function routeExists(href) {
  if (!href.startsWith("/") || href.startsWith("//")) return true;
  const clean = href.split(/[?#]/)[0];
  if (clean === "/") return existsSync(join(outDir, "index.html"));
  const normalized = clean.endsWith("/") ? clean : `${clean}/`;
  return existsSync(join(outDir, normalized.slice(1), "index.html"))
    || existsSync(join(outDir, normalized.slice(1).replace(/\/$/, "")));
}

for (const route of NEW_ROUTES) {
  const html = readHtml(route);
  for (const href of hrefs(html)) {
    if (!href.startsWith("/") || href.startsWith("//") || /\.[a-z0-9]+$/i.test(href.split(/[?#]/)[0])) continue;
    if (!routeExists(href)) fail(`${route}: broken internal link ${href}`);
  }
}

// Defensive copy should not appear on new pages
const banned = [
  /this guide intentionally avoids inventing/i,
  /does not invent download links/i,
  /this page stays SFW/i,
  /keep expectations honest/i,
  /there is no long official bio to quote here/i,
  /this (character )?page is the doorway/i,
  /we could not verify/i,
  /insufficient evidence/i,
  /SEO audit/i,
  /AI generated/i,
];
for (const route of NEW_ROUTES) {
  const html = readHtml(route);
  for (const pattern of banned) {
    if (pattern.test(html)) fail(`${route}: defensive/internal phrasing matched ${pattern}`);
  }
}

function visibleWords(html) {
  const main = html.match(/<main[\s\S]*?<\/main>/i)?.[0] || html;
  const text = main
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  return text ? text.split(/\s+/).length : 0;
}

const wordCounts = {};
for (const route of NEW_ROUTES) {
  const words = visibleWords(readHtml(route));
  wordCounts[route] = words;
  if ((route === "/gameplay/" || route === "/mods/") && words < 700) {
    warn(`${route}: visible word count ${words} lower than expected ~800`);
  }
  if ((route === "/download-and-platforms/" || route === "/updates/") && words < 850) {
    fail(`${route}: visible word count ${words} below the 900-word target for this page`);
  }
  if (route === "/speedrun/" && words < 900) {
    fail(`${route}: visible word count ${words} below the 900-word minimum`);
  }
}

// New pages must not ship pirate/warez guidance or made-up version claims.
const newPageGuards = [
  { route: "/download-and-platforms/", banned: [/warez/i, /crack(ed)? (download|copy|version)/i, /torrent/i] },
  { route: "/updates/", banned: [/v0\.6\.0 (patch|hotfix|update)/i, /season pass/i, /roadmap 2027/i] },
];
for (const { route, banned: pageBanned } of newPageGuards) {
  const html = readHtml(route);
  for (const pattern of pageBanned) {
    if (pattern.test(html)) fail(`${route}: risky phrasing matched ${pattern}`);
  }
}

const sitemap = readFileSync(join(outDir, "sitemap.xml"), "utf8");
const robots = readFileSync(join(outDir, "robots.txt"), "utf8");
for (const route of [...FREEZE_ROUTES, ...NEW_ROUTES]) {
  const expected = `https://dragnwash.github.io${route}`;
  if (!sitemap.includes(expected)) fail(`sitemap missing ${expected}`);
}
if (/disallow:\s*\/(gameplay|mods|characters|download-and-platforms|updates)/i.test(robots)) fail("robots blocks expansion routes");

if (errors.length) {
  console.error("Expansion QA failed:\n" + errors.map((e) => `- ${e}`).join("\n"));
  process.exit(1);
}

console.log("Expansion QA passed.");
console.log("Word counts:", JSON.stringify(wordCounts));
if (warnings.length) console.log("Warnings:\n" + warnings.map((w) => `- ${w}`).join("\n"));
