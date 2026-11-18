// Hero-update focused check: hero image identity, geometry, overflow, console, screenshots.
import { chromium } from 'playwright-core';
import fs from 'node:fs';

const BASE = 'http://127.0.0.1:4321';
const browser = await chromium.launch({
  executablePath: process.env.HOME + '/.cache/ms-playwright/chromium-1187/chrome-linux/chrome',
  args: ['--no-sandbox'],
});
let failures = 0;
for (const vp of [{ name: 'desktop', width: 1440, height: 900 }, { name: 'mobile', width: 390, height: 844 }]) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  const errors = [], failed = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('requestfailed', (r) => failed.push(r.url()));
  page.on('response', (r) => { if (r.status() >= 400) failed.push(r.url() + ' HTTP ' + r.status()); });
  await page.goto(BASE + '/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(2000); // let hero entrance settle
  const info = await page.evaluate(() => {
    const img = document.querySelector('picture img');
    const r = img.getBoundingClientRect();
    const cs = getComputedStyle(img);
    return {
      src: img.currentSrc, natural: [img.naturalWidth, img.naturalHeight],
      complete: img.complete, rect: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) },
      opacity: cs.opacity, vw: window.innerWidth, vh: window.innerHeight,
      scrollW: document.documentElement.scrollWidth,
      h1: document.querySelector('h1')?.innerText?.slice(0, 40),
      imgTopInViewport: r.top >= 0, imgBottomInViewport: r.bottom <= window.innerHeight,
    };
  });
  console.log(vp.name, JSON.stringify(info, null, 1));
  if (!info.complete || info.natural[0] !== 1024 || info.natural[1] !== 1536) { failures++; console.log('FAIL: hero not loaded or wrong size'); }
  if (info.scrollW > vp.width) { failures++; console.log('FAIL: horizontal overflow'); }
  if (errors.length || failed.length) { failures++; console.log('FAIL: console/failed', errors, failed); }
  await page.screenshot({ path: `.screenshots/hero-update-${vp.name}.png` });
  await page.close();
}
await browser.close();
console.log(failures === 0 ? 'HERO CHECK PASS' : `HERO CHECK FAILURES: ${failures}`);
process.exit(failures ? 1 : 0);
