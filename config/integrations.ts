import type { IntegrationConfig } from "./types";
import generatedIntegrationsRaw from "../content/generated/integrations.json";
import { ADSTERRA_NATIVE } from "@/config/adsterra";

type GeneratedIntegrations = {
  gaMeasurementId?: string | null;
  googleSiteVerification?: string | null;
  bingSiteVerification?: string | null;
};

const generatedIntegrations = generatedIntegrationsRaw as GeneratedIntegrations;

const gaFromEnv = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";
const gaFromGenerated = typeof generatedIntegrations.gaMeasurementId === "string"
  ? generatedIntegrations.gaMeasurementId.trim()
  : "";
const gaMeasurementId = gaFromEnv || gaFromGenerated || "";
const pirschCode = process.env.NEXT_PUBLIC_PIRSCH_CODE?.trim() || "";

const googleFromEnv = process.env.GOOGLE_SITE_VERIFICATION?.trim() || "";
const googleFromGenerated = typeof generatedIntegrations.googleSiteVerification === "string"
  ? generatedIntegrations.googleSiteVerification.trim()
  : "";
const googleVerification = googleFromEnv || googleFromGenerated || null;

const bingFromEnv = process.env.BING_SITE_VERIFICATION?.trim() || "";
const bingFromGenerated = typeof generatedIntegrations.bingSiteVerification === "string"
  ? generatedIntegrations.bingSiteVerification.trim()
  : "";
const bingVerification = bingFromEnv || bingFromGenerated || null;

function resolveAnalytics(): IntegrationConfig["analytics"] {
  if (/^G-[A-Z0-9]+$/i.test(gaMeasurementId)) {
    return { provider: "google-analytics", measurementId: gaMeasurementId.toUpperCase() };
  }
  if (pirschCode) {
    return { provider: "pirsch", code: pirschCode };
  }
  return { provider: "none" };
}

export const integrations: IntegrationConfig = {
  analytics: resolveAnalytics(),
  ads: {
    provider: "adsterra",
    nativeScriptUrl: ADSTERRA_NATIVE.scriptUrl,
    nativeContainerId: ADSTERRA_NATIVE.containerId,
  },
  verification: {
    google: googleVerification,
    bing: bingVerification,
  },
};
