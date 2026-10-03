import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";

const root = process.cwd();
const output = join(root, "out");
const publicDir = join(root, "public");

writeFileSync(join(output, ".nojekyll"), "", "utf8");

const customDomain = process.env.NEXT_PUBLIC_CUSTOM_DOMAIN?.trim();
if (customDomain) writeFileSync(join(output, "CNAME"), `${customDomain}\n`, "utf8");

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    const absolute = join(directory, name);
    return statSync(absolute).isDirectory() ? walk(absolute) : [absolute];
  });
}

/** Ensure technical verification files from public/ are present at the build output root. */
function ensureTechnicalPublicFiles() {
  if (!existsSync(publicDir) || !existsSync(output)) return [];
  const copied = [];
  for (const absolute of walk(publicDir)) {
    const local = relative(publicDir, absolute).split(sep).join("/");
    const base = local.split("/").pop() || "";
    const technical = /^google[a-z0-9_-]*\.html$/i.test(base)
      || /^(robots\.txt|ads\.txt)$/i.test(base)
      || local.startsWith(".well-known/");
    if (!technical) continue;
    const target = join(output, local);
    mkdirSync(dirname(target), { recursive: true });
    if (!existsSync(target)) {
      copyFileSync(absolute, target);
      copied.push(local);
    }
  }
  return copied;
}

const ensured = ensureTechnicalPublicFiles();
console.log(
  customDomain
    ? `Static output prepared with CNAME ${customDomain}.`
    : "Static output prepared for GitHub Pages.",
);
if (ensured.length) {
  console.log(`Ensured technical public files in out/: ${ensured.join(", ")}`);
}

/** Hard fail before CI uploads a hollow out/ directory. */
function assertExportIntegrity() {
  if (!existsSync(output)) {
    throw new Error("postbuild integrity: out/ does not exist");
  }
  const required = [
    "index.html",
    "404.html",
    "sitemap.xml",
    "robots.txt",
    ".nojekyll",
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
  ];
  const missing = required.filter((relative) => !existsSync(join(output, relative)));
  if (missing.length) {
    throw new Error(`postbuild integrity: missing export files: ${missing.join(", ")}`);
  }
  const nextStatic = join(output, "_next", "static");
  if (!existsSync(nextStatic) || !statSync(nextStatic).isDirectory()) {
    throw new Error("postbuild integrity: missing out/_next/static");
  }
}

assertExportIntegrity();
console.log("postbuild integrity: required HTML/SEO artifacts present in out/.");
