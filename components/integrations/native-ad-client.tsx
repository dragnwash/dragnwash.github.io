"use client";

import { useEffect, useRef } from "react";

export function NativeAdClient({ scriptUrl, containerId }: { scriptUrl: string; containerId: string }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // Ensure a single mount per page slot; clear any prior children first.
    host.replaceChildren();

    const script = document.createElement("script");
    script.async = true;
    script.src = scriptUrl;
    script.dataset.cfasync = "false";
    script.dataset.adsterraNative = containerId;

    const container = document.createElement("div");
    container.id = containerId;

    host.appendChild(script);
    host.appendChild(container);

    return () => {
      host.replaceChildren();
    };
  }, [containerId, scriptUrl]);

  return <div ref={hostRef} data-native-ad-slot />;
}
