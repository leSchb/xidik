import { RefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { AnimatedContentProps } from "../../ui";

gsap.registerPlugin(ScrollTrigger);

export const useAnimatedContent = <El extends HTMLElement>({
  container,
  direction,
  reverse,
  distance,
  threshold,
  delay,
  duration,
  scale,
  ease,
  animateOpacity,
  initialOpacity,
  onComplete,
  disappearAfter,
  disappearDuration,
  disappearEase,
  onDisappearanceComplete,
  initRef,
}: NonNullable<AnimatedContentProps<El>> & {
  initRef?: RefObject<El | null>;
}) => {
  const ref = useRef<El>(null);

  useEffect(() => {
    if (initRef?.current) {
      ref.current = initRef.current;
    }
  }, [initRef]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let scrollerTarget: Element | string | null =
      container || document.getElementById("snap-main-container") || null;

    if (typeof scrollerTarget === "string") {
      scrollerTarget = document.querySelector(scrollerTarget);
    }

    const axis = direction === "horizontal" ? "x" : "y";
    const offset = reverse ? -distance! : distance;
    const startPct = (1 - threshold!) * 100;

    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
      visibility: "visible",
    });

    const tl = gsap.timeline({
      paused: true,
      delay,
      onComplete: () => {
        if (onComplete) onComplete();

        if (disappearAfter! > 0) {
          gsap.to(el, {
            [axis]: reverse ? distance : -distance!,
            scale: 0.8,
            opacity: animateOpacity ? initialOpacity : 0,
            delay: disappearAfter,
            duration: disappearDuration,
            ease: disappearEase,
            onComplete: () => onDisappearanceComplete?.(),
          });
        }
      },
    });

    tl.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease,
    });

    const st = ScrollTrigger.create({
      trigger: el,
      scroller: scrollerTarget || window,
      start: `top ${startPct}%`,
      once: true,
      onEnter: () => tl.play(),
    });

    return () => {
      st.kill();
      tl.kill();
    };
  }, [
    container,
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    disappearAfter,
    disappearDuration,
    disappearEase,
    onComplete,
    onDisappearanceComplete,
  ]);

  return ref;
};
