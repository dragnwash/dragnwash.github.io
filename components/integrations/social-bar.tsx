"use client";

import { useEffect } from "react";
import { ADSTERRA_SOCIAL_BAR } from "@/config/adsterra";

declare global {
  interface Window {
    __adsterraSocialBarInitialized?: boolean;
  }
}

/**
 * Site-wide Social Bar — initialize once from the root layout.
 * Do not mount this from individual page components.
 */
export function SocialBar() {
  useEffect(() => {
    if (window.__adsterraSocialBarInitialized) return;
    if (document.querySelector('script[data-adsterra-social-bar="true"]')) {
      window.__adsterraSocialBarInitialized = true;
      return;
    }

    window.__adsterraSocialBarInitialized = true;

    const script = document.createElement("script");
    script.src = ADSTERRA_SOCIAL_BAR.scriptSrc;
    script.async = true;
    script.dataset.adsterraSocialBar = "true";
    document.body.appendChild(script);
  }, []);

  return null;
}
