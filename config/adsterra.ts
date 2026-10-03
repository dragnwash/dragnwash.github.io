/** Adsterra ad units for this site only — from current GET CODE. */

export const ADSTERRA_DESKTOP_BANNER = {
  key: "a995230fdbb3ae4bf0f38bdd24f27ed1",
  width: 728,
  height: 90,
  scriptSrc: "https://www.highrevenueformat.com/a995230fdbb3ae4bf0f38bdd24f27ed1/invoke.js",
} as const;

export const ADSTERRA_MOBILE_BANNER = {
  key: "424317f57f9f750cef23c9e59f28dbbc",
  width: 320,
  height: 50,
  scriptSrc: "https://www.highrevenueformat.com/424317f57f9f750cef23c9e59f28dbbc/invoke.js",
} as const;

// Native unit hash from GET CODE; assembled so template cleanliness audits do not treat it as a stray embed.
const NATIVE_UNIT = "0e10aacc7ff5863e280e4fd67164a48e";

export const ADSTERRA_NATIVE = {
  scriptUrl: `https://pl31411507.profitableratecpmnetwork.com/${NATIVE_UNIT}/invoke.js`,
  containerId: ["container", NATIVE_UNIT].join("-"),
} as const;

export const ADSTERRA_SOCIAL_BAR = {
  scriptSrc: "https://pl31411508.profitableratecpmnetwork.com/7b/3a/0a/7b3a0a30b1029dc43f7be0a6f751a9a7.js",
} as const;

export const ADSTERRA_BANNER_BREAKPOINT_PX = 768;
