// Menu-fix focused check: mobile menu must cover the full viewport with solid bg.
import { chromium } from 'playwright-core';

const BASE = process.env.MENU_BASE || 'http://127.0.0.1:4322';
const browser = await chromium.launch({
  executablePath: process.env.HOME + '/.cache/ms-playwright/chromium-1187/chrome-linux/chrome',
  args: ['--no-sandbox'],
});
let failures = 0;
const fail = (msg) => { failures++; console.log('FAIL:', msg); };

// --- Mobile 390x844 ---
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errors = [], failed = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('requestfailed', (r) => { if (!String(r.failure()?.errorText || '').includes('ERR_ABORTED')) failed.push(r.url()); });
  page.on('response', (r) => { if (r.status() >= 400) failed.push(r.url() + ' HTTP ' + r.status()); });
  await page.goto(BASE + '/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1500);

  // BEFORE: menu hidden
  const before = await page.evaluate(() => {
    const m = document.getElementById('mobile-menu');
    return { hidden: m.classList.contains('hidden'), parent: m.parentElement.tagName };
  });
  console.log('mobile before-open:', JSON.stringify(before));
  if (before.parent !== 'BODY') fail('menu parent is ' + before.parent + ', expected BODY (sibling of header)');

  // OPEN
  await page.click('#menu-btn');
  await page.waitForTimeout(400);
  const open = await page.evaluate(() => {
    const m = document.getElementById('mobile-menu');
    const r = m.getBoundingClientRect();
    const cs = getComputedStyle(m);
    const el = document.elementFromPoint(195, 700);
    const inside = el ? (el === m || m.contains(el)) : false;
    return {
      rect: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) },
      bg: cs.backgroundColor, display: cs.display,
      vw: window.innerWidth, vh: window.innerHeight,
      elAt700: el ? (el.id || el.tagName + '.' + String(el.className).slice(0, 40)) : 'null',
      elInsideMenu: inside,
      bodyOverflow: document.body.style.overflow,
      ariaExpanded: document.getElementById('menu-btn').getAttribute('aria-expanded'),
      scrollW: document.documentElement.scrollWidth,
    };
  });
  console.log('mobile open:', JSON.stringify(open, null, 1));
  if (open.rect.w !== 390 || open.rect.h !== 844) fail(`menu rect ${open.rect.w}x${open.rect.h}, expected 390x844`);
  if (open.bg !== 'rgb(11, 11, 11)') fail('menu bg ' + open.bg + ', expected rgb(11, 11, 11)');
  if (!open.elInsideMenu) fail('elementFromPoint(195,700) is outside the menu: ' + open.elAt700);
  if (open.bodyOverflow !== 'hidden') fail('body scroll not locked while open');
  if (open.scrollW > 390) fail('horizontal overflow while menu open');
  // all links reachable: menu must scroll internally to its last link + CTA
  const scrollReach = await page.evaluate(() => {
    const m = document.getElementById('mobile-menu');
    const links = [...m.querySelectorAll('ul a')];
    const last = links[links.length - 1];
    const cta = m.querySelector('a[href="/contact"].mt-auto');
    const before = last.getBoundingClientRect().bottom;
    m.scrollTop = m.scrollHeight;
    const after = last.getBoundingClientRect();
    const ctaR = cta.getBoundingClientRect();
    return {
      linkCount: links.length, lastLabel: last.textContent,
      lastBottomBeforeScroll: Math.round(before), vh: window.innerHeight,
      lastVisibleAfterScroll: after.top >= 0 && after.bottom <= window.innerHeight,
      ctaVisibleAfterScroll: ctaR.top >= 0 && ctaR.bottom <= window.innerHeight,
    };
  });
  console.log('mobile menu scroll reach:', JSON.stringify(scrollReach));
  if (!scrollReach.lastVisibleAfterScroll) fail('last menu link not reachable by scrolling the menu');
  if (!scrollReach.ctaVisibleAfterScroll) fail('Start Your Project CTA not reachable by scrolling the menu');
  await page.evaluate(() => { document.getElementById('mobile-menu').scrollTop = 0; });
  await page.screenshot({ path: '.screenshots/menu-fix-mobile-open.png' });

  // CLOSE via X
  await page.click('#menu-close');
  await page.waitForTimeout(300);
  const closed = await page.evaluate(() => {
    const m = document.getElementById('mobile-menu');
    return { hidden: m.classList.contains('hidden'), bodyOverflow: document.body.style.overflow };
  });
  console.log('mobile after-close:', JSON.stringify(closed));
  if (!closed.hidden) fail('menu did not close via X button');

  // REOPEN + link click closes it (synchronous handler check, before navigation)
  await page.click('#menu-btn');
  await page.waitForTimeout(300);
  const linkCloses = await page.evaluate(() => {
    const m = document.getElementById('mobile-menu');
    document.querySelector('#mobile-menu a[href="/about"]').click();
    return m.classList.contains('hidden');
  });
  console.log('mobile link-click closes menu:', linkCloses);
  if (!linkCloses) fail('menu did not close on link click');
  // link click navigated to /about — go back home before the scroll test
  await page.goto(BASE + '/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  // Header hide-on-scroll still works
  await page.evaluate(() => window.scrollTo(0, 800));
  await page.waitForTimeout(600);
  const headerHidden = await page.evaluate(() => document.getElementById('site-header').classList.contains('header-hidden'));
  console.log('mobile header-hidden after scroll:', headerHidden);
  if (!headerHidden) fail('header did not hide on scroll (regression?)');

  if (errors.length || failed.length) fail('console/failed: ' + JSON.stringify({ errors, failed }));
  await page.close();
}

// --- Desktop 1440x900: header/nav unchanged ---
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [], failed = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('requestfailed', (r) => failed.push(r.url()));
  page.on('response', (r) => { if (r.status() >= 400) failed.push(r.url() + ' HTTP ' + r.status()); });
  await page.goto(BASE + '/', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1500);
  const d = await page.evaluate(() => {
    const btn = document.getElementById('menu-btn');
    const nav = document.querySelector('#site-header nav ul');
    const m = document.getElementById('mobile-menu');
    return {
      menuBtnVisible: getComputedStyle(btn).display !== 'none' || btn.offsetParent !== null,
      navVisible: nav.offsetParent !== null,
      menuHidden: m.classList.contains('hidden'),
      menuParent: m.parentElement.tagName,
      scrollW: document.documentElement.scrollWidth,
    };
  });
  console.log('desktop:', JSON.stringify(d));
  if (d.menuBtnVisible) fail('hamburger button visible at 1440px');
  if (!d.navVisible) fail('desktop nav not visible at 1440px');
  if (!d.menuHidden) fail('mobile menu not hidden on desktop load');
  if (d.scrollW > 1440) fail('horizontal overflow at 1440px');
  if (errors.length || failed.length) fail('console/failed: ' + JSON.stringify({ errors, failed }));
  await page.close();
}

await browser.close();
console.log(failures === 0 ? 'MENU CHECK PASS' : `MENU CHECK FAILURES: ${failures}`);
process.exit(failures ? 1 : 0);
