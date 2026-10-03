import type { CSSProperties, ReactNode } from "react";
import { Analytics } from "@/components/integrations/analytics";
import { SocialBar } from "@/components/integrations/social-bar";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { siteConfig } from "@/config/site";
import { themes } from "@/config/themes";
import {
  characterDetailPages,
  enabledLegalPages,
  getPrimaryNavItems,
  resourcePages,
  visibleCorePages,
} from "@/content/registry";
import { rootMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata = rootMetadata();

const navItems = getPrimaryNavItems();
const footerGuideLinks = visibleCorePages
  .filter((page) => page.slug !== "characters")
  .map((page) => ({ label: page.navLabel, slug: page.slug }));
const footerCharacterLinks = [
  { label: "All Characters", slug: "characters" },
  ...characterDetailPages.map((page) => ({ label: page.navLabel, slug: page.slug })),
];
const footerResourceLinks = resourcePages.map((page) => ({ label: page.navLabel, slug: page.slug }));
const legalLinks = enabledLegalPages.map((page) => ({ label: page.navLabel, slug: page.slug }));

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  // Unknown/stale presets (e.g. R2 template older than generator) must not crash preview.
  const theme = themes[siteConfig.theme.preset] ?? themes["obsidian-red"] ?? themes["midnight-red"] ?? Object.values(themes)[0];
  const headerStyle = siteConfig.theme.headerStyle ?? "solid";
  const componentStyle = siteConfig.theme.componentStyle ?? "rounded";
  const style = Object.fromEntries(
    Object.entries({ ...(theme?.tokens ?? {}), ...(siteConfig.theme.overrides ?? {}) }).map(([key, value]) => [`--${key}`, value]),
  ) as CSSProperties;

  return (
    <html
      lang={siteConfig.language}
      data-theme={theme?.name ?? siteConfig.theme.preset}
      data-skin={siteConfig.theme.skin ?? "portal"}
      data-header-style={headerStyle}
      data-component-style={componentStyle}
      style={style}
    >
      <head>
        <Analytics />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <SiteHeader items={navItems} />
        <div id="main-content">{children}</div>
        <SiteFooter
          coreLinks={footerGuideLinks}
          characterLinks={footerCharacterLinks}
          resourceLinks={footerResourceLinks}
          legalLinks={legalLinks}
        />
        <SocialBar />
      </body>
    </html>
  );
}
