"use client";

import { useEffect, useState } from "react";
import {
  ADSTERRA_BANNER_BREAKPOINT_PX,
  ADSTERRA_DESKTOP_BANNER,
  ADSTERRA_MOBILE_BANNER,
} from "@/config/adsterra";

type BannerVariant = "desktop" | "mobile";

declare global {
  interface Window {
    atOptions?: {
      key: string;
      format: string;
      height: number;
      width: number;
      params: Record<string, never>;
    };
  }
}

function BannerFrame({ variant }: { variant: BannerVariant }) {
  const config = variant === "desktop" ? ADSTERRA_DESKTOP_BANNER : ADSTERRA_MOBILE_BANNER;

  useEffect(() => {
    const container = document.getElementById(`adsterra-banner-${config.key}`);
    if (!container) return;

    container.replaceChildren();

    window.atOptions = {
      key: config.key,
      format: "iframe",
      height: config.height,
      width: config.width,
      params: {},
    };

    const script = document.createElement("script");
    script.src = config.scriptSrc;
    script.async = true;
    script.dataset.adsterraBanner = config.key;
    container.appendChild(script);

    return () => {
      container.replaceChildren();
      if (window.atOptions?.key === config.key) {
        delete window.atOptions;
      }
    };
  }, [config]);

  return (
    <div
      id={`adsterra-banner-${config.key}`}
      className="adsterra-banner-frame"
      style={{ minHeight: config.height, maxWidth: config.width }}
      data-adsterra-banner={variant}
    />
  );
}

export function ResponsiveBanner() {
  const [variant, setVariant] = useState<BannerVariant | null>(null);

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${ADSTERRA_BANNER_BREAKPOINT_PX}px)`);
    const sync = () => setVariant(media.matches ? "desktop" : "mobile");
    sync();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", sync);
      return () => media.removeEventListener("change", sync);
    }

    media.addListener(sync);
    return () => media.removeListener(sync);
  }, []);

  return (
    <aside className="adsterra-banner-slot" aria-label="Advertisement" data-adsterra={variant ? `banner-${variant}` : "banner-pending"}>
      <p className="adsterra-label">Advertisement</p>
      {variant ? (
        <BannerFrame key={variant} variant={variant} />
      ) : (
        <div className="adsterra-banner-frame adsterra-banner-frame--pending" />
      )}
    </aside>
  );
}
