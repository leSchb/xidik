"use client";
import { useAnimatedContent } from "../lib/hooks";

import Container, { ContainerProps } from "../../container/ui";
import { ElementType } from "react";

export interface AnimatedContentProps<El extends HTMLElement> {
  container?: El | string | null;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  ease?: string;
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  disappearAfter?: number;
  disappearDuration?: number;
  disappearEase?: string;
  onComplete?: () => void;
  onDisappearanceComplete?: () => void;
}

export type Props<
  T extends ElementType,
  RefT extends HTMLElement,
> = ContainerProps<T, RefT> & AnimatedContentProps<RefT>;

export default function AnimatedContent<
  El extends ElementType,
  RefT extends HTMLElement,
>({
  container,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = "cubic-bezier(0,1.08,.39,.96)",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = "power3.in",
  onComplete,
  onDisappearanceComplete,
  className = "",
  asChild = false,
  bgColor = "",
  ref,
  as,
  children,
  ...props
}: Props<El, RefT>) {
  const containerRef = useAnimatedContent({
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
    initRef: ref,
  });

  return (
    <Container
      ref={containerRef}
      className={className}
      asChild={asChild}
      as={as}
      bgColor={bgColor}
      {...(props as ContainerProps<El, RefT>)}
    >
      {children}
    </Container>
  );
}
