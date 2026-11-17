// First-paint checks for Batch 2: (a) JS-disabled home must show all hero
// content (visible-by-default fail-safe); (b) early paint with JS on (~300ms
// after commit) must already show hero content, not a blank page.
import { chromium } from 'playwright-core';

const browser = await chromium.launch({
  executablePath: process.env.HOME + '/.cache/ms-playwright/chromium-1187/chrome-linux/chrome',
  args: ['--no-sandbox'],
});

// (a) JS disabled, desktop + mobile
for (const vp of [{ name: 'desktop', width: 1440, height: 900 }, { name: 'mobile', width: 390, height: 844 }]) {
  const ctx = await browser.newContext({ viewport: vp, javaScriptEnabled: false });
  const page = await ctx.newPage();
  await page.goto('http://127.0.0.1:4321/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(500);
  const m = await page.evaluate(() => {
    const vis = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return 'missing';
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return { text: (el.textContent || '').trim().slice(0, 40), opacity: cs.opacity, rect: [Math.round(r.width), Math.round(r.height)], inView: r.top < innerHeight && r.bottom > 0 };
    };
    return {
      h1: vis('h1'),
      heroImg: vis('picture img'),
      stats: document.querySelector('[data-count]')?.textContent,
      cta: vis('a[href="/contact"]'),
      overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    };
  });
  console.log('JS-DISABLED', vp.name, JSON.stringify(m));
  await page.screenshot({ path: `.screenshots/batch2-firstpaint-nojs-${vp.name}.png` });
  await ctx.close();
}

// (b) early paint with JS on, desktop: screenshot ~300ms after commit
const ctx2 = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page2 = await ctx2.newPage();
await page2.goto('http://127.0.0.1:4321/', { waitUntil: 'commit', timeout: 30000 });
await page2.waitForTimeout(300);
const early = await page2.evaluate(() => {
  const h1 = document.querySelector('h1');
  const cs = h1 ? getComputedStyle(h1) : null;
  const img = document.querySelector('picture img');
  return { h1Opacity: cs?.opacity, h1Text: h1?.textContent?.slice(0, 30), imgComplete: img?.complete, imgNatural: img?.naturalWidth };
});
console.log('EARLY-300ms', JSON.stringify(early));
await page2.screenshot({ path: '.screenshots/batch2-firstpaint-early-300ms.png' });
await page2.waitForTimeout(1500);
const settled = await page2.evaluate(() => {
  const h1 = document.querySelector('h1');
  return { h1Opacity: getComputedStyle(h1).opacity };
});
console.log('SETTLED-1800ms', JSON.stringify(settled));
await page2.screenshot({ path: '.screenshots/batch2-firstpaint-settled.png' });
await ctx2.close();
await browser.close();
console.log('done');
