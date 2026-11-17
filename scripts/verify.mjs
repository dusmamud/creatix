// Playwright check: every route at 390px and 1440px — horizontal overflow,
// console errors, failed requests, broken images. Screenshots to .screenshots/.
import { chromium } from 'playwright-core';
import fs from 'node:fs';

const BASE = 'http://127.0.0.1:4321';
const routes = [
  '/', '/about/', '/services/', '/services/ui-ux-design/', '/services/web-development/',
  '/services/3d-designs/', '/services/motion-graphics/', '/projects/',
  '/projects/lumina-brand-identity/', '/projects/finlytics-app-redesign/',
  '/projects/northwind-dashboard/', '/projects/orbit-3d-campaign/',
  '/projects/brewbox-motion/', '/projects/urbannest-ecommerce/',
  '/team/', '/reviews/', '/contact/', '/faq/', '/privacy/', '/terms/',
  '/blog/', '/blog/why-fast-websites-convert/', '/blog/brand-identity-process/',
  '/blog/ux-audit-checklist/', '/blog/3d-product-visuals-sell-more/',
  '/blog/motion-graphics-for-social/', '/blog/how-much-does-a-website-cost-india/',
  '/process/', '/careers/', '/careers/ui-ux-designer/', '/careers/frontend-developer/',
  '/careers/3d-artist/', '/careers/motion-designer/',
  '/clients/', '/pricing/', '/book/', '/book/?plan=web-development', '/search/', '/search/?q=pricing',
];
// Optional split: VERIFY_SLICE=start,end runs only that slice of routes, so a
// long run can be split across two shorter browser sessions (the VM runs low
// on memory and the Chromium target occasionally crashes past ~60 combos).
const slice = process.env.VERIFY_SLICE?.split(',').map(Number);
const routesToCheck = slice ? routes.slice(slice[0], slice[1]) : routes;
const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'desktop', width: 1440, height: 900 },
];
const out = '.screenshots';
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch({
  executablePath: process.env.HOME + '/.cache/ms-playwright/chromium-1187/chrome-linux/chrome',
  args: ['--no-sandbox'],
});
let failures = 0;
const summary = [];
for (const vp of viewports) {
  for (const route of routesToCheck) {
    const slug = route === '/' ? 'home' : route.replaceAll('/', '-').replace(/^-|-$/g, '');
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    const errors = [];
    const failedReqs = [];
    page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
    page.on('pageerror', (e) => errors.push(String(e)));
    page.on('requestfailed', (r) => failedReqs.push(r.url() + ' :: ' + (r.failure()?.errorText || '')));
    page.on('response', (r) => { if (r.status() >= 400) failedReqs.push(r.url() + ' :: HTTP ' + r.status()); });
    const res = await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1200);
    // Scroll like a real user (wheel events, which Lenis handles) so
    // ScrollTrigger reveals fire and lazy images load. Scroll until the
    // page bottom is reached — a fixed step count misses the lower
    // sections on tall mobile pages (home is ~16,000px at 390px).
    for (let i = 0; i < 40; i++) {
      const atBottom = await page.evaluate(() => window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 50);
      if (atBottom) break;
      await page.mouse.wheel(0, 700); await page.waitForTimeout(250);
    }
    await page.waitForTimeout(1500);
    try {
      await page.waitForFunction(() => [...document.images].every((im) => im.complete), null, { timeout: 10000 });
    } catch { /* report whatever is still incomplete below */ }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(800);
    const metrics = await page.evaluate(() => {
      const broken = [...document.images].filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.getAttribute('src'));
      return {
        scrollW: document.documentElement.scrollWidth,
        clientW: document.documentElement.clientWidth,
        overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
        broken,
        h1: document.querySelectorAll('h1').length,
        title: document.title,
      };
    });
    const status = res?.status() ?? 0;
    const bad = status !== 200 || metrics.overflow > 0 || errors.length || failedReqs.length || metrics.broken.length;
    if (bad) failures++;
    summary.push({ route, vp: vp.name, status, overflow: metrics.overflow, consoleErrors: errors.length, failedReqs: failedReqs.length, brokenImgs: metrics.broken.length, h1: metrics.h1 });
    if (bad) console.log('FAIL', route, vp.name, JSON.stringify({ status, overflow: metrics.overflow, errors, failedReqs, broken: metrics.broken }));
    const shot = (full) => page.screenshot({ path: `${out}/${slug}-${vp.name}${full ? '-full' : ''}.png`, fullPage: full });
    await shot(false);
    if (route === '/' || route === '/services/' || route === '/projects/') await shot(true);
    await page.close();
  }
}
// 404 check
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const r404 = await page.goto(BASE + '/definitely-not-a-page/', { waitUntil: 'networkidle' });
console.log('404 status:', r404?.status());
await page.screenshot({ path: `${out}/404-desktop.png` });
await page.close();
await browser.close();
console.log(`\nChecked ${summary.length} route/viewport combos, failures: ${failures}`);
console.log(JSON.stringify(summary, null, 1));
