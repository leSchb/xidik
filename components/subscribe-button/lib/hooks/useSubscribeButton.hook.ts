import { useCallback, useEffect, useRef } from "react";
import { convertCssPropertiesToString } from "@/shared/lib/utils";

import { stickyButtonStyles } from "../../model";

export const useSubscribeButton = () => {
  const stickyButtonRef = useRef<HTMLButtonElement>(null);
  const normalButtonRef = useRef<HTMLButtonElement>(null);

  const observeButton = useCallback((button: HTMLButtonElement | null) => {
    if (!button) return;
    const currentScrollY = window.scrollY;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (stickyButtonRef.current) {
          if (entry.isIntersecting || currentScrollY < 300) {
            stickyButtonRef.current.style = convertCssPropertiesToString(
              stickyButtonStyles.hidden,
            );
          } else {
            stickyButtonRef.current.style = convertCssPropertiesToString(
              stickyButtonStyles.visible,
            );
          }
        }
      },
      {
        root: null,
        threshold: 0,
      },
    );
    observer.observe(button);
  }, []);

  useEffect(() => {
    observeButton(normalButtonRef.current);
  }, [observeButton]);

  return { stickyButtonRef, normalButtonRef };
};
