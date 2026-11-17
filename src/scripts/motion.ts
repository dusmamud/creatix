// GSAP + Lenis motion. Skipped entirely under prefers-reduced-motion;
// no-JS state stays readable because .reveal defaults to visible and
// the .js class (added in Layout) only hides elements when JS runs.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  gsap.from('[data-hero]', { y: 28, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.1 });

  // Scroll reveals — gsap.from() so the from-state only applies when
  // GSAP actually runs; if animation setup fails, content stays visible.
  document.querySelectorAll('.reveal').forEach((el) => {
    gsap.from(el, {
      opacity: 0, y: 24, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  // Animated counters
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count || 0);
    const obj = { v: 0 };
    gsap.to(obj, {
      v: target, duration: 1.6, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 92%' },
      onUpdate: () => { el.textContent = Math.round(obj.v).toLocaleString('en-IN'); },
    });
  });
}

// Testimonial slider (works without GSAP too)
const track = document.querySelector<HTMLElement>('#testi-track');
const slides = track?.querySelectorAll<HTMLElement>('[data-slide]');
let idx = 0;
const go = (i: number) => {
  if (!track || !slides?.length) return;
  idx = (i + slides.length) % slides.length;
  track.style.transform = `translateX(-${idx * 100}%)`;
  document.querySelectorAll('[data-dot]').forEach((d, di) => {
    d.classList.toggle('bg-lime', di === idx);
    d.classList.toggle('bg-white/25', di !== idx);
  });
};
document.getElementById('testi-prev')?.addEventListener('click', () => go(idx - 1));
document.getElementById('testi-next')?.addEventListener('click', () => go(idx + 1));
document.querySelectorAll('[data-dot]').forEach((d, di) => d.addEventListener('click', () => go(di)));
if (track && slides?.length) setInterval(() => go(idx + 1), 6000);
