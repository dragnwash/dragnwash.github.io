"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import type { PrimaryNavItem } from "@/content/registry";
import { assetPath, routePath } from "@/lib/urls";

export function SiteHeader({ items }: { items: PrimaryNavItem[] }) {
  const [open, setOpen] = useState(false);
  // Slug of the currently expanded dropdown, desktop and mobile tracked
  // separately so the two layouts never share a boolean or a menu id.
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setActiveDesktopMenu(null);
        setActiveMobileMenu(null);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!desktopNavRef.current?.contains(event.target as Node)) {
        setActiveDesktopMenu(null);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  function closeAll() {
    setOpen(false);
    setActiveDesktopMenu(null);
    setActiveMobileMenu(null);
  }

  const linkClass =
    "site-nav-link whitespace-nowrap px-2.5 py-2 text-sm font-bold text-muted-foreground transition hover:bg-secondary hover:text-foreground md:px-1.5 md:text-sm lg:px-2.5";

  return (
    <header className="site-header relative sticky top-0 z-50">
      <div className="site-container flex h-16 items-center justify-between gap-3 sm:gap-4">
        <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3" onClick={closeAll}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetPath(siteConfig.assets.logo)}
            alt={`${siteConfig.shortName} logo`}
            width={36}
            height={36}
            className="h-9 w-9 rounded-theme object-cover"
          />
          <span className="truncate text-base font-black tracking-tight text-foreground sm:text-lg">
            {siteConfig.shortName}
          </span>
        </Link>

        <button
          type="button"
          className="site-nav-toggle border border-border p-2 text-foreground md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          ref={desktopNavRef}
          aria-label="Primary navigation"
          className={`site-nav ${open ? "flex" : "hidden"} absolute inset-x-0 top-16 flex-col gap-1 border-b border-border p-4 shadow-theme md:static md:flex md:flex-row md:flex-nowrap md:items-center md:justify-end md:gap-0.5 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {items.map((item) => {
            if (item.kind === "link") {
              return (
                <Link key={item.slug} href={routePath(item.slug)} className={linkClass} onClick={closeAll}>
                  {item.label}
                </Link>
              );
            }

            const desktopMenuId = `nav-menu-${item.slug}-desktop`;
            const mobileMenuId = `nav-menu-${item.slug}-mobile`;
            const desktopOpen = activeDesktopMenu === item.slug;
            const mobileOpen = activeMobileMenu === item.slug;

            return (
              <div key={item.slug} className="site-nav-menu">
                <div className="hidden md:block relative">
                  <button
                    type="button"
                    className={`${linkClass} inline-flex items-center gap-1`}
                    aria-expanded={desktopOpen}
                    aria-controls={desktopMenuId}
                    aria-haspopup="true"
                    onClick={() => setActiveDesktopMenu(desktopOpen ? null : item.slug)}
                  >
                    {item.label}
                    <ChevronDown size={14} aria-hidden="true" className={desktopOpen ? "rotate-180" : undefined} />
                  </button>
                  <div
                    id={desktopMenuId}
                    hidden={!desktopOpen}
                    className="site-nav-dropdown absolute right-0 top-full z-50 mt-1 min-w-[12.5rem] rounded-[calc(var(--radius)*.55)] border border-border bg-card p-1 shadow-theme"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.slug}
                        href={routePath(child.slug)}
                        className="block whitespace-nowrap rounded-[calc(var(--radius)*.4)] px-3 py-2 text-sm font-bold text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                        onClick={closeAll}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="md:hidden">
                  <button
                    type="button"
                    className="site-nav-link flex w-full items-center justify-between px-2.5 py-2 text-sm font-bold text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                    aria-expanded={mobileOpen}
                    aria-controls={mobileMenuId}
                    onClick={() => setActiveMobileMenu(mobileOpen ? null : item.slug)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown size={16} aria-hidden="true" className={mobileOpen ? "rotate-180" : undefined} />
                  </button>
                  <div id={mobileMenuId} hidden={!mobileOpen} className="ml-2 mt-1 space-y-1 border-l border-border pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.slug}
                        href={routePath(child.slug)}
                        className="site-nav-link block px-2.5 py-2 text-sm font-bold text-muted-foreground transition hover:bg-secondary hover:text-foreground"
                        onClick={closeAll}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
