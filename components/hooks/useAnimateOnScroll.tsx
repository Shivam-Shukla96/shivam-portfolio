"use client";
import { useEffect, useRef } from "react";
import type React from "react";

type Options = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean; // if true, keep the animation class once added
};

/**
 * Hook that toggles an animation class on an element when it enters/leaves the viewport.
 * Use like:
 * const ref = useAnimateOnScroll('fade-in-up', { rootMargin: '0px 0px -10% 0px', once: false });
 * <div ref={ref}>...</div>
 */
export default function useAnimateOnScroll<T extends HTMLElement = HTMLDivElement>(animationClass: string, options?: Options): React.RefObject<T | null> {
  const ref = useRef<T | null>(null);
  const opts = {
    root: options?.root ?? null,
    rootMargin: options?.rootMargin ?? "0px 0px -10% 0px",
    threshold: options?.threshold ?? 0,
    once: options?.once ?? false,
  };

  useEffect(() => {
  const el = ref.current as HTMLElement | null;
    if (!el || typeof window === "undefined") return;

    // Ensure the animation class is not present initially so it can be added when observed
    el.classList.remove(animationClass);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add(animationClass);
            if (opts.once) {
              // if once, unobserve after first trigger
              io.unobserve(entry.target);
            }
          } else {
            // remove the class so animation can replay when re-entering
            if (!opts.once) el.classList.remove(animationClass);
          }
        });
      },
      { root: opts.root, rootMargin: opts.rootMargin, threshold: opts.threshold }
    );

    io.observe(el);

    return () => io.disconnect();
    // We only want this effect to run once for the element ref, not when animationClass changes frequently
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return ref;
}
