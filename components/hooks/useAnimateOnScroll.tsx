"use client";
import { useEffect, useRef } from "react";
import type React from "react";

type Options = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean; // if true, keep the animation class once added
  leaveDelay?: number; // milliseconds to wait before removing the class on leave (hysteresis)
};

/**
 * useAnimationOnScroll
 * - Adds `animationClass` to the element when it is meaningfully in view.
 * - Removes the class when it leaves (with a configurable delay to avoid flicker).
 * - Honors prefers-reduced-motion by immediately adding the class and skipping intersection logic.
 *
 * Usage:
 * const ref = useAnimationOnScroll('fade-in-up');
 * <div ref={ref}>...</div>
 */

export default function useAnimateOnScroll<T extends HTMLElement = HTMLDivElement>(
  animationClass: string,
  options?: Options
): React.RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current as T | null;
    if (!el || typeof window === "undefined") return;

    const prefersReduced =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const opts = {
      root: options?.root ?? null,
      rootMargin: options?.rootMargin ?? "0px 0px -10% 0px",
      threshold: options?.threshold ?? 0.15,
      once: options?.once ?? false,
      leaveDelay: options?.leaveDelay ?? 150,
    } as Required<Options>;

    // Small hysteresis to avoid toggling around the threshold.
    const HYSTERESIS = 0.03;

    // If user prefers reduced motion, just add the class and exit.
    if (prefersReduced) {
      el.classList.add(animationClass);
      return;
    }

    // Remove initial class so animation can trigger when observed
    el.classList.remove(animationClass);

    let leaveTimer: number | null = null;

    // helper to perform DOM writes via rAF to reduce layout thrashing
    const raf = (cb: () => void) => {
      if (typeof window === "undefined") return;
      window.requestAnimationFrame(cb);
    };

    // normalize threshold value for hysteresis checks
    const primaryThreshold = Array.isArray(opts.threshold)
      ? Math.min(...opts.threshold)
      : opts.threshold;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;

          // show when well above threshold
          if (ratio >= Math.min(1, primaryThreshold + HYSTERESIS)) {
            if (leaveTimer) {
              window.clearTimeout(leaveTimer);
              leaveTimer = null;
            }
            raf(() => el.classList.add(animationClass));
            if (opts.once) observer.unobserve(entry.target);
            return;
          }

          // hide only when well below threshold (with optional delay)
          if (!opts.once && ratio <= Math.max(0, primaryThreshold - HYSTERESIS)) {
            if (leaveTimer) window.clearTimeout(leaveTimer);
            leaveTimer = window.setTimeout(() => {
              raf(() => el.classList.remove(animationClass));
              leaveTimer = null;
            }, opts.leaveDelay) as unknown as number;
          }
        });
      },
      { root: opts.root, rootMargin: opts.rootMargin, threshold: opts.threshold }
    );

    observer.observe(el);

    return () => {
      if (leaveTimer) window.clearTimeout(leaveTimer);
      observer.disconnect();
    };
    // Intentionally run once on mount for this ref. We purposely avoid
    // depending on `ref.current` - the ref object is stable and the hook
    // should observe the element present at mount. If the element is
    // created later you can recreate the ref or re-mount the component.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
