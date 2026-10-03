import { BookOpen, CalendarCheck2, ExternalLink, Gamepad2 } from "lucide-react";
import Link from "next/link";
import { NativeAdSlot } from "@/components/integrations/native-ad-slot";
import { ResponsiveBanner } from "@/components/integrations/responsive-banner";
import { Faq } from "@/components/site/faq";
import { JsonLd } from "@/components/site/json-ld";
import { WikiPageSections } from "@/components/site/wiki-page-sections";
import { WikiShell } from "@/components/site/wiki-shell";
import { WikiToc, wikiTocItems } from "@/components/site/wiki-toc";
import { siteConfig } from "@/config/site";
import type { InternalLink } from "@/config/types";
import { homePage } from "@/content/home";
import { visibleCorePages } from "@/content/registry";
import { homeSchemas } from "@/lib/schema";
import { assetPath, routePath } from "@/lib/urls";

function quickFacts() {
  return (
    [
      ["Game", siteConfig.game.name],
      ["Developer", siteConfig.game.developer],
      ["Platforms", siteConfig.game.platform],
      ["Genre", siteConfig.game.genre],
      ["Release", "September 10, 2026"],
      ["Mode", "Single-player · Full controller support"],
    ] as const
  ).filter(([, value]) => {
    const trimmed = value.trim();
    return trimmed.length > 0 && !/^needs verification$/i.test(trimmed) && trimmed.toLowerCase() !== "unknown";
  });
}

function isInternalLink(link: InternalLink | { label: string; url: string }): link is InternalLink {
  return "slug" in link;
}

export function WikiHomePage() {
  const facts = quickFacts();
  const tocItems = wikiTocItems(homePage.sections, [
    ...(homePage.screenshots.length ? [{ id: "screenshots", heading: "Example Game Screenshots" }] : []),
    ...(homePage.faq.length ? [{ id: "faq", heading: "Frequently Asked Questions" }] : []),
  ]);
  const secondary = homePage.hero.secondaryLink;

  return (
    <>
      <JsonLd data={homeSchemas(homePage)} />
      <main>
        <section className="hero-surface wiki-hero border-b border-border">
          <div className="site-container wiki-hero-grid">
            <div className="wiki-hero-copy">
              <p className="eyebrow">{homePage.hero.eyebrow}</p>
              <h1>{homePage.hero.heading}</h1>
              <p className="wiki-hero-lead">{homePage.hero.lead}</p>
              <p className="wiki-hero-support">{homePage.hero.supportingText}</p>
              <p className="wiki-reviewed">
                <CalendarCheck2 size={16} className="text-primary" />
                Last reviewed: <time dateTime={homePage.lastReviewed}>{homePage.lastReviewed}</time>
              </p>
              <div className="wiki-hero-actions">
                {homePage.hero.primaryLink ? (
                  <Link href={routePath(homePage.hero.primaryLink.slug)} className="button-primary">
                    <BookOpen size={18} />{homePage.hero.primaryLink.label}
                  </Link>
                ) : null}
                {secondary && isInternalLink(secondary) ? (
                  <Link href={routePath(secondary.slug)} className="button-secondary">
                    <BookOpen size={18} />{secondary.label}
                  </Link>
                ) : null}
                {secondary && !isInternalLink(secondary) ? (
                  <a href={secondary.url} rel="noopener noreferrer" className="button-secondary">
                    <Gamepad2 size={18} />{secondary.label}<ExternalLink size={15} />
                  </a>
                ) : null}
                {siteConfig.game.officialUrl && (!secondary || isInternalLink(secondary)) ? (
                  <a href={siteConfig.game.officialUrl} rel="noopener noreferrer" className="button-secondary">
                    <Gamepad2 size={18} />Steam store<ExternalLink size={15} />
                  </a>
                ) : null}
              </div>
            </div>
            <aside className="wiki-hero-banner" aria-label="Featured banner">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetPath(siteConfig.assets.cover)}
                alt={`${siteConfig.game.name} guide banner`}
                width={1280}
                height={720}
              />
            </aside>
          </div>
        </section>

        <div className="site-container">
          <ResponsiveBanner />
        </div>

        <div className="site-container wiki-page-body">
          {facts.length ? (
            <section className="wiki-facts" aria-label="Quick facts">
              <dl>
                {facts.map(([term, value]) => (
                  <div key={term}>
                    <dt>{term}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          {/* Priority A: Native after Quick Facts. Fallback: after quick-nav or first section. */}
          {facts.length ? <NativeAdSlot /> : null}

          {visibleCorePages.length ? (
            <nav className="wiki-quick-nav" aria-label="Quick navigation">
              <p className="wiki-kicker">Start here</p>
              <ul>
                {visibleCorePages.map((page) => (
                  <li key={page.slug}>
                    <Link href={routePath(page.slug)}>
                      <strong>{page.navLabel}</strong>
                      <span>{page.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          {!facts.length && visibleCorePages.length ? <NativeAdSlot /> : null}

          <WikiShell
            sidebar={(
              <>
                <WikiToc items={tocItems} />
                <section className="wiki-site-info" aria-label="Site info">
                  <p className="wiki-sidebar-title">Site info</p>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetPath(siteConfig.assets.cover)}
                    alt={`${siteConfig.game.name} guide banner`}
                    width={1280}
                    height={720}
                  />
                  <dl>
                    {facts.map(([term, value]) => (
                      <div key={term}>
                        <dt>{term}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              </>
            )}
          >
            <WikiPageSections
              sections={homePage.sections}
              afterFirstSection={!facts.length && !visibleCorePages.length ? <NativeAdSlot /> : undefined}
            />
            {homePage.screenshots.length ? (
              <section id="screenshots" className="scroll-mt-24">
                <p className="eyebrow">Visual reference</p>
                <h2>Example Game Screenshots</h2>
                <div className="wiki-gallery">
                  {homePage.screenshots.map((shot) => (
                    <figure key={shot.src}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={assetPath(shot.src)} alt={shot.alt} />
                      {shot.caption ? <figcaption>{shot.caption}</figcaption> : null}
                    </figure>
                  ))}
                </div>
              </section>
            ) : null}
            {homePage.faq.length ? <Faq items={homePage.faq} /> : null}
          </WikiShell>
        </div>
      </main>
    </>
  );
}
