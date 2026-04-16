"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Also animate stat counters
  useEffect(() => {
    const stats = document.querySelectorAll<HTMLElement>("[data-count]");

    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = Number(el.dataset.count ?? "0");
          const suffix = el.dataset.suffix ?? "+";
          const duration = 1400;
          const start = performance.now();

          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = `${Math.round(target * eased)}${suffix}`;
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
          statObserver.unobserve(el);
        });
      },
      { threshold: 0.4 }
    );

    stats.forEach((el) => statObserver.observe(el));
    return () => statObserver.disconnect();
  }, []);

  return null;
}
