"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * One scroll engine for the whole site. It renders nothing; it only writes
 * attributes and CSS variables that globals.css turns into motion:
 *
 *   [data-reveal]   gets data-in while on screen, so it assembles on the way
 *                   in and folds away on the way out
 *   [data-depth]    gets --p (-1 above centre … +1 below) and --pv (1 centred)
 *   [data-count]    counts up to its value each time it is revealed
 *   [data-readout]  shows the page scroll as a percentage
 *   <html>          gets --scroll, 0 at the top and 1 at the bottom
 */
export default function ScrollFx() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveals = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const depths = Array.from(
      document.querySelectorAll<HTMLElement>("[data-depth]"),
    );
    const readouts = Array.from(
      document.querySelectorAll<HTMLElement>("[data-readout]"),
    );

    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      if (!Number.isFinite(target)) return;
      if (reduce) {
        el.textContent = String(target).padStart(2, "0");
        return;
      }
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / 1100, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = String(Math.round(target * eased)).padStart(2, "0");
        if (t < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const show = (el: HTMLElement) => {
      if (el.hasAttribute("data-in")) return;
      el.setAttribute("data-in", "");
      el.querySelectorAll<HTMLElement>("[data-count]").forEach(countUp);
      if (el.dataset.count) countUp(el);
    };

    // Mark what is already on screen before hiding anything, so the first
    // paint never flashes.
    const vh = window.innerHeight;
    for (const el of reveals) {
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) show(el);
    }
    root.classList.add("fx");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) show(el);
          else if (el.dataset.reveal !== "once") el.removeAttribute("data-in");
        }
      },
      { rootMargin: "-4% 0px -6% 0px", threshold: 0 },
    );
    reveals.forEach((el) => io.observe(el));

    let frame = 0;
    const update = () => {
      frame = 0;
      const h = window.innerHeight;
      const max = Math.max(root.scrollHeight - h, 1);
      const s = Math.min(Math.max(window.scrollY / max, 0), 1);
      root.style.setProperty("--scroll", s.toFixed(4));

      const pct = String(Math.round(s * 100)).padStart(3, "0");
      for (const el of readouts) el.textContent = pct;

      if (reduce) return;
      for (const el of depths) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -h || r.top > 2 * h) continue;
        const centre = r.top + r.height / 2;
        const p = Math.max(-1.5, Math.min(1.5, (centre - h / 2) / h));
        el.style.setProperty("--p", p.toFixed(4));
        el.style.setProperty("--pv", (1 - Math.min(Math.abs(p), 1)).toFixed(4));
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return null;
}
