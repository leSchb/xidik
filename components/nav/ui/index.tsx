"use client";
import classNames from "classnames";
import { useSlidingHover } from "@/shared/components/sliding-hover/lib/hooks";

import classes from "./nav.module.css";
import Link from "next/link";
import SlidingHover from "@/shared/components/sliding-hover/ui";
import { navItems } from "../model";

interface Props {
  className?: string;
}

export default function Nav({ className }: Props) {
  const { containerRef, slidingHoverRef, onMouseEnter, onMouseLeave } =
    useSlidingHover();
  return (
    <nav
      className={classNames(className, classes.container, "flex relative")}
      ref={containerRef}
    >
      {navItems.map((item, index) => (
        <Link
          key={item.href + index}
          href={item.href}
          className={classes.link}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <span className="headline headline-xs neutral-100">{item.title}</span>
        </Link>
      ))}
      <SlidingHover ref={slidingHoverRef} bgColor="green-20" />
    </nav>
  );
}
