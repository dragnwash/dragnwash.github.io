import { ADSTERRA_NATIVE } from "@/config/adsterra";
import { NativeAdClient } from "./native-ad-client";

export function NativeAdSlot() {
  return (
    <aside className="adsterra-native-slot" aria-label="Sponsored" data-adsterra="native-banner">
      <p className="adsterra-label">Advertisement</p>
      <div className="adsterra-native-frame">
        <NativeAdClient
          scriptUrl={ADSTERRA_NATIVE.scriptUrl}
          containerId={ADSTERRA_NATIVE.containerId}
        />
      </div>
    </aside>
  );
}
