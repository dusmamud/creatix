// Batch 3 checks: (a) keyboard — tab through home, slider arrow keys, FAQ
// Enter/Space, focus-ring screenshot; (b) reduced-motion — hero/sections
// fully visible, no animation, no console errors; (c) form validation +
// toast; (d) filter + back-to-top + progress bar behaviour.
import { chromium } from 'playwright-core';

const browser = await chromium.launch({
  executablePath: process.env.HOME + '/.cache/ms-playwright/chromium-1187/chrome-linux/chrome',
  args: ['--no-sandbox'],
});
const errors = [];
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
page.on('pageerror', (e) => errors.push(String(e)));
await page.goto('http://127.0.0.1:4321/', { waitUntil: 'networkidle', timeout: 30000 });
await page.waitForTimeout(1800);

// (a) keyboard: tab to slider viewport, arrow right changes slide
await page.keyboard.press('Tab');
for (let i = 0; i < 12; i++) await page.keyboard.press('Tab');
const focused1 = await page.evaluate(() => document.activeElement?.tagName + '#' + (document.activeElement?.id || document.activeElement?.textContent?.slice(0, 20)));
await page.locator('#testi-viewport').focus();
const t0 = await page.evaluate(() => document.querySelector('#testi-track')?.style.transform);
await page.keyboard.press('ArrowRight');
await page.waitForTimeout(700);
const t1 = await page.evaluate(() => document.querySelector('#testi-track')?.style.transform);
console.log('KEYBOARD slider transform before/after ArrowRight:', JSON.stringify(t0), '->', JSON.stringify(t1));
console.log('KEYBOARD focused after tabs:', focused1);
// focus ring visible on the slider viewport
const ring = await page.evaluate(() => {
  const el = document.activeElement;
  const cs = getComputedStyle(el);
  return { outline: cs.outlineStyle + ' ' + cs.outlineWidth + ' ' + cs.outlineColor, tag: el.tagName, id: el.id };
});
console.log('KEYBOARD focus ring:', JSON.stringify(ring));
await page.screenshot({ path: '.screenshots/batch3-focused-slider.png' });
// FAQ via keyboard: scroll to home FAQ, focus first button, Space toggles
await page.evaluate(() => document.querySelector('#home-faq-btn-1')?.scrollIntoView({ block: 'center' }));
await page.waitForTimeout(600);
await page.locator('#home-faq-btn-1').focus();
const before = await page.evaluate(() => document.querySelector('#home-faq-panel-1')?.dataset.open);
await page.keyboard.press('Space');
await page.waitForTimeout(500);
const after = await page.evaluate(() => document.querySelector('#home-faq-panel-1')?.dataset.open);
console.log('KEYBOARD FAQ panel-1 open before/after Space:', before, '->', after);
// scroll behaviour: progress bar + header hide + back-to-top
await page.mouse.wheel(0, 1200); await page.waitForTimeout(600);
await page.mouse.wheel(0, 1200); await page.waitForTimeout(600);
const scrollState = await page.evaluate(() => ({
  progress: document.getElementById('scroll-progress')?.style.transform,
  headerHidden: document.getElementById('site-header')?.classList.contains('header-hidden'),
  toTopShown: document.getElementById('back-to-top')?.classList.contains('show'),
}));
console.log('SCROLL state after scrolling down:', JSON.stringify(scrollState));
await page.locator('#back-to-top').click(); await page.waitForTimeout(1200);
console.log('SCROLL y after back-to-top click:', await page.evaluate(() => Math.round(window.scrollY)));
// filter on /projects
await page.goto('http://127.0.0.1:4321/projects/', { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);
await page.locator('[data-filter="Motion"]').click(); await page.waitForTimeout(800);
const filter = await page.evaluate(() => ({
  count: document.getElementById('filter-count')?.textContent,
  visible: [...document.querySelectorAll('[data-project-card]')].filter((c) => c.style.display !== 'none').length,
  cats: [...document.querySelectorAll('[data-project-card]')].filter((c) => c.style.display !== 'none').map((c) => c.dataset.category),
}));
console.log('FILTER Motion:', JSON.stringify(filter));
await page.locator('[data-filter="All"]').click(); await page.waitForTimeout(800);
console.log('FILTER All visible:', await page.evaluate(() => [...document.querySelectorAll('[data-project-card]')].filter((c) => c.style.display !== 'none').length));
// form validation: contact, bad email -> per-field error + no mailto; toast on newsletter
await page.goto('http://127.0.0.1:4321/contact/', { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
await page.fill('#cf-email', 'not-an-email');
await page.fill('#cf-name', 'Test');
await page.fill('#cf-message', 'Hello world, this is a test project.');
await page.locator('#contact-form button[type="submit"]').click(); await page.waitForTimeout(400);
console.log('FORM contact bad-email error:', await page.evaluate(() => document.getElementById('cf-email-error')?.textContent + ' | invalid=' + document.getElementById('cf-email')?.getAttribute('aria-invalid')));
await page.fill('#cf-email', 'test@example.com');
await page.locator('#contact-form button[type="submit"]').click(); await page.waitForTimeout(400);
console.log('FORM contact toast after valid submit:', await page.evaluate(() => document.getElementById('toast')?.textContent + ' | shown=' + document.getElementById('toast')?.classList.contains('show')));
await page.evaluate(() => document.getElementById('newsletter-email') && (document.getElementById('newsletter-email').value = 'bad'));
await page.locator('#newsletter-form button[type="submit"]').click(); await page.waitForTimeout(400);
console.log('FORM newsletter bad-email error:', await page.evaluate(() => document.getElementById('newsletter-email-error')?.textContent));
console.log('CONSOLE ERRORS (main page):', JSON.stringify(errors));
await page.close();

// (b) reduced motion
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
const rp = await ctx.newPage();
const rerrors = [];
rp.on('console', (m) => { if (m.type() === 'error') rerrors.push(m.text()); });
rp.on('pageerror', (e) => rerrors.push(String(e)));
await rp.goto('http://127.0.0.1:4321/', { waitUntil: 'networkidle', timeout: 30000 });
await rp.waitForTimeout(1000);
const rm = await rp.evaluate(() => {
  const vis = (sel) => { const el = document.querySelector(sel); if (!el) return 'missing'; const cs = getComputedStyle(el); const r = el.getBoundingClientRect(); return { opacity: cs.opacity, h: Math.round(r.height) }; };
  return {
    h1: vis('h1'), heroImg: vis('picture img'), cursor: getComputedStyle(document.getElementById('cursor-dot')).display,
    marqueeAnim: getComputedStyle(document.querySelector('.marquee-track')).animationName,
    sectionsVisible: [...document.querySelectorAll('.reveal')].filter((el) => getComputedStyle(el).opacity === '1').length + '/' + document.querySelectorAll('.reveal').length,
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
  };
});
console.log('REDUCED-MOTION:', JSON.stringify(rm));
console.log('REDUCED-MOTION console errors:', JSON.stringify(rerrors));
await rp.screenshot({ path: '.screenshots/batch3-reduced-motion-home.png' });
// reduced-motion: scroll down, sections still fully visible
await rp.mouse.wheel(0, 3000); await rp.waitForTimeout(800);
console.log('REDUCED-MOTION after scroll, hidden reveals:', await rp.evaluate(() => [...document.querySelectorAll('.reveal')].filter((el) => getComputedStyle(el).opacity !== '1').length));
await ctx.close();

// mobile home screenshot
const mctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
const mp = await mctx.newPage();
await mp.goto('http://127.0.0.1:4321/', { waitUntil: 'networkidle', timeout: 30000 });
await mp.waitForTimeout(1800);
await mp.screenshot({ path: '.screenshots/batch3-hero-mobile.png' });
await mp.goto('http://127.0.0.1:4321/', { waitUntil: 'networkidle' });
await mp.waitForTimeout(1800);
await mp.screenshot({ path: '.screenshots/batch3-hero-desktop.png', fullPage: false });
await mctx.close();
await browser.close();
console.log('done');
