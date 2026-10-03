import { ExternalLink, Mail } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import type { InternalLink } from "@/config/types";
import { routePath } from "@/lib/urls";

export function SiteFooter({
  coreLinks,
  characterLinks = [],
  resourceLinks = [],
  legalLinks,
}: {
  coreLinks: InternalLink[];
  characterLinks?: InternalLink[];
  resourceLinks?: InternalLink[];
  legalLinks: InternalLink[];
}) {
  const contactHref = siteConfig.contact.email
    ? `mailto:${siteConfig.contact.email}`
    : siteConfig.contact.url;

  return (
    <footer className="mt-20 border-t border-border bg-card/45">
      <div className="site-container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          <p className="mb-3 text-lg font-black text-foreground">{siteConfig.siteName}</p>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">{siteConfig.description}</p>
          <p className="mt-4 max-w-xl text-xs leading-6 text-muted-foreground">
            Drag&apos;n Wash is an adult-only game. This independent guide provides non-explicit gameplay information for adult audiences. We are not affiliated with Gator Dragon Games. All trademarks and game assets belong to their respective owners.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-widest text-foreground">Guides</p>
          <ul className="grid gap-y-2 text-sm text-muted-foreground">
            {coreLinks.map((link) => (
              <li key={link.slug}>
                <Link className="hover:text-primary" href={routePath(link.slug)}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-widest text-foreground">Characters</p>
          <ul className="grid gap-y-2 text-sm text-muted-foreground">
            {characterLinks.map((link) => (
              <li key={link.slug}>
                <Link className="hover:text-primary" href={routePath(link.slug)}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {resourceLinks.length ? (
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-widest text-foreground">Resources</p>
            <ul className="grid gap-y-2 text-sm text-muted-foreground">
              {resourceLinks.map((link) => (
                <li key={link.slug}>
                  <Link className="hover:text-primary" href={routePath(link.slug)}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-widest text-foreground">Site</p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
            {legalLinks.map((link) => (
              <li key={link.slug}><Link className="hover:text-primary" href={routePath(link.slug)}>{link.label}</Link></li>
            ))}
          </ul>
          {contactHref ? (
            <a className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary" href={contactHref} rel="noopener noreferrer">
              {siteConfig.contact.email ? <Mail size={16} /> : <ExternalLink size={16} />}
              Contact the editorial team
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
