import React, { useRef } from "react";

// Container — тип элемента, внутри которого располагается скользящий ховер
// HoverElement — тип элемента, который вызывает скользящий ховер при наведении
export const useSlidingHover = <
  Container extends HTMLElement,
  HoverElement extends HTMLElement,
>() => {
  const containerRef = useRef<Container | null>(null);
  const slidingHoverRef = useRef<HTMLDivElement | null>(null);

  const onMouseEnter = (event: React.MouseEvent<HoverElement>) => {
    if (!slidingHoverRef.current) return;
    const hover = slidingHoverRef.current;

    const container = containerRef.current;
    if (!container) return;
    const hoverElement = event.currentTarget;

    const hoverElementRect = hoverElement.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const top = hoverElementRect.top - containerRect.top;
    const left = hoverElementRect.left - containerRect.left;

    hover.style.top = `${top}px`;
    hover.style.left = `${left}px`;
    hover.style.width = `${hoverElementRect.width}px`;
    hover.style.height = `${hoverElementRect.height}px`;
    hover.style.opacity = "1";
  };

  const onMouseLeave = () => {
    if (!slidingHoverRef.current) return;
    const hover = slidingHoverRef.current;
    hover.style.opacity = "0";
  };

  return {
    containerRef,
    slidingHoverRef,
    onMouseEnter,
    onMouseLeave,
  };
};
