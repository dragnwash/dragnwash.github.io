import { chromium } from "playwright";

const base = process.env.QA_BASE_URL || "http://127.0.0.1:4173";

async function inspect(page, label) {
  const result = await page.evaluate(() => {
    const banners = [...document.querySelectorAll("[data-adsterra^='banner']")];
    const natives = [...document.querySelectorAll("[data-adsterra='native-banner']")];
    const socialScripts = [...document.querySelectorAll('script[data-adsterra-social-bar="true"]')];
    const desktopFrames = [...document.querySelectorAll('[data-adsterra-banner="desktop"]')];
    const mobileFrames = [...document.querySelectorAll('[data-adsterra-banner="mobile"]')];
    const desktopScripts = [...document.querySelectorAll('script[data-adsterra-banner="a995230fdbb3ae4bf0f38bdd24f27ed1"]')];
    const mobileScripts = [...document.querySelectorAll('script[data-adsterra-banner="424317f57f9f750cef23c9e59f28dbbc"]')];
    const nativeScripts = [...document.querySelectorAll('script[data-adsterra-native]')];
    const hero = document.querySelector(".wiki-hero, .hero-surface");
    const banner = document.querySelector(".adsterra-banner-slot");
    const native = document.querySelector(".adsterra-native-slot");
    const spacer =
      document.querySelector(".wiki-facts") ||
      document.querySelector(".wiki-toc") ||
      document.querySelector(".wiki-quick-nav");

    function top(el) {
      return el ? el.getBoundingClientRect().top + window.scrollY : -1;
    }

    return {
      bannerCount: banners.length,
      nativeCount: natives.length,
      socialScriptCount: socialScripts.length,
      desktopFrameCount: desktopFrames.length,
      mobileFrameCount: mobileFrames.length,
      desktopScriptCount: desktopScripts.length,
      mobileScriptCount: mobileScripts.length,
      nativeScriptCount: nativeScripts.length,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      order: {
        hero: top(hero),
        banner: top(banner),
        spacer: top(spacer),
        native: top(native),
      },
      labels: [...document.querySelectorAll(".adsterra-label")].map((el) => el.textContent?.trim()),
    };
  });

  const issues = [];
  if (result.bannerCount !== 1) issues.push(`expected 1 banner slot, got ${result.bannerCount}`);
  if (result.nativeCount !== 1) issues.push(`expected 1 native slot, got ${result.nativeCount}`);
  if (result.socialScriptCount !== 1) issues.push(`expected 1 social bar script, got ${result.socialScriptCount}`);
  if (result.order.hero < 0 || result.order.banner < 0 || result.order.native < 0) {
    issues.push("missing hero/banner/native in DOM order");
  } else if (!(result.order.hero < result.order.banner && result.order.banner < result.order.native)) {
    issues.push(`bad vertical order hero/banner/native: ${JSON.stringify(result.order)}`);
  }
  if (result.order.spacer >= 0 && !(result.order.banner < result.order.spacer && result.order.spacer < result.order.native)) {
    issues.push(`spacer not between banner and native: ${JSON.stringify(result.order)}`);
  }
  if (result.scrollWidth > result.clientWidth + 1) {
    issues.push(`horizontal overflow: scrollWidth=${result.scrollWidth} clientWidth=${result.clientWidth}`);
  }

  console.log(`\n[${label}]`, JSON.stringify(result, null, 2));
  if (issues.length) {
    console.error(`[${label}] FAIL:`, issues.join("; "));
    return false;
  }
  console.log(`[${label}] PASS`);
  return true;
}

async function runViewport(browser, width, height, expectVariant) {
  const context = await browser.newContext({ viewport: { width, height } });
  const page = await context.newPage();
  let ok = true;

  await page.goto(`${base}/`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  const home = await inspect(page, `${width}px home`);
  ok = home && ok;

  const homeEval = await page.evaluate(() => ({
    desktop: document.querySelectorAll('[data-adsterra-banner="desktop"]').length,
    mobile: document.querySelectorAll('[data-adsterra-banner="mobile"]').length,
    desktopScript: document.querySelectorAll('script[data-adsterra-banner="a995230fdbb3ae4bf0f38bdd24f27ed1"]').length,
    mobileScript: document.querySelectorAll('script[data-adsterra-banner="424317f57f9f750cef23c9e59f28dbbc"]').length,
  }));
  if (expectVariant === "desktop") {
    if (homeEval.desktop !== 1 || homeEval.mobile !== 0 || homeEval.desktopScript !== 1 || homeEval.mobileScript !== 0) {
      console.error(`[${width}px] FAIL desktop exclusivity`, homeEval);
      ok = false;
    } else {
      console.log(`[${width}px] desktop exclusivity PASS`);
    }
  } else {
    if (homeEval.mobile !== 1 || homeEval.desktop !== 0 || homeEval.mobileScript !== 1 || homeEval.desktopScript !== 0) {
      console.error(`[${width}px] FAIL mobile exclusivity`, homeEval);
      ok = false;
    } else {
      console.log(`[${width}px] mobile exclusivity PASS`);
    }
  }

  await page.goto(`${base}/beginner-guide/`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  const sub = await inspect(page, `${width}px beginner-guide`);
  ok = sub && ok;

  // Client navigation: home -> sub -> home
  await page.goto(`${base}/`, { waitUntil: "networkidle" });
  await page.waitForTimeout(600);
  await page.click('a[href="/beginner-guide/"], a[href*="beginner-guide"]').catch(() => {});
  await page.waitForTimeout(1000);
  await page.goto(`${base}/`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1000);
  const afterNav = await page.evaluate(() => ({
    banners: document.querySelectorAll("[data-adsterra^='banner']").length,
    natives: document.querySelectorAll("[data-adsterra='native-banner']").length,
    social: document.querySelectorAll('script[data-adsterra-social-bar="true"]').length,
  }));
  if (afterNav.banners !== 1 || afterNav.natives !== 1 || afterNav.social !== 1) {
    console.error(`[${width}px] FAIL after navigation counts`, afterNav);
    ok = false;
  } else {
    console.log(`[${width}px] after navigation PASS`, afterNav);
  }

  await context.close();
  return ok;
}

const browser = await chromium.launch({ headless: true });
let allOk = true;
allOk = (await runViewport(browser, 375, 812, "mobile")) && allOk;
allOk = (await runViewport(browser, 1440, 900, "desktop")) && allOk;
await browser.close();
if (!allOk) process.exit(1);
console.log("\nAll ad QA checks passed.");
