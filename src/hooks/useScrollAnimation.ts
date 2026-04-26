import { useEffect, useRef } from 'react';
import { animate, createTimeline, utils } from 'animejs';

export interface ScrollAnimationOptions {
  /** translateY: [from, to] in px. Default: [40, 0] */
  translateY?: [number, number];
  /** translateX: [from, to] in px. Default: [0, 0] */
  translateX?: [number, number];
  /** opacity: [from, to]. Default: [0, 1] */
  opacity?: [number, number];
  /** scale: [from, to]. Default: [1, 1] */
  scale?: [number, number];
  /** Animation duration in ms. Default: 700 */
  duration?: number;
  /** Fixed delay in ms (ignored when stagger is set). Default: 0 */
  delay?: number;
  /** Stagger delay in ms between [data-animate] children. Default: undefined */
  stagger?: number;
  /** AnimeJS easing string. Default: 'easeOutExpo' */
  easing?: string;
  /** IntersectionObserver threshold. Default: 0.15 */
  threshold?: number;
}

export function useScrollAnimation<T extends HTMLElement = HTMLElement>(
  options: ScrollAnimationOptions = {}
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const {
      translateY = [40, 0],
      translateX = [0, 0],
      opacity = [0, 1],
      scale = [1, 1],
      duration = 700,
      delay = 0,
      stagger,
      easing = 'easeOutExpo',
      threshold = 0.15,
    } = options;

    const children = el.querySelectorAll<HTMLElement>('[data-animate]');
    const targets: HTMLElement[] | NodeListOf<HTMLElement> =
      children.length > 0 ? children : [el];

    // Check if element is already in viewport — if so, skip animation entirely
    const rect = el.getBoundingClientRect();
    const alreadyVisible =
      rect.top < window.innerHeight * (1 - threshold) &&
      rect.bottom > window.innerHeight * threshold;

    if (alreadyVisible) {
      // Already visible: show immediately, no animation needed
      utils.set(targets, {
        opacity: opacity[1],
        translateY: translateY[1],
        translateX: translateX[1],
        scale: scale[1],
      });
      return;
    }

    // Not yet visible: set hidden state and wait for scroll
    utils.set(targets, {
      opacity: opacity[0],
      translateY: translateY[0],
      translateX: translateX[0],
      scale: scale[0],
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          animate(targets, {
            opacity: opacity[1],
            translateY: translateY[1],
            translateX: translateX[1],
            scale: scale[1],
            duration,
            delay: stagger != null ? utils.stagger(stagger) : delay,
            ease: easing,
          });

          observer.unobserve(entry.target);
        });
      },
      { threshold }
    );

    observer.observe(el);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

export function useSlideUp(stagger?: number, delay?: number) {
  return useScrollAnimation({ translateY: [50, 0], opacity: [0, 1], stagger, delay });
}

export function useSlideLeft(delay = 0) {
  return useScrollAnimation({ translateX: [-50, 0], opacity: [0, 1], duration: 700, delay });
}

export function useSlideRight(delay = 0) {
  return useScrollAnimation({ translateX: [50, 0], opacity: [0, 1], duration: 700, delay });
}

export function useScaleFade(delay = 0) {
  return useScrollAnimation({
    scale: [0.9, 1],
    opacity: [0, 1],
    duration: 600,
    easing: 'easeOutBack',
    delay,
  });
}

export { createTimeline, animate, utils };
