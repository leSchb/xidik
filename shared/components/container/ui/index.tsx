import { Slot } from "@radix-ui/react-slot";
import classNames from "classnames";

import classes from "./container.module.css";
import { ElementType, RefObject } from "react";
import { PolymorphicProps } from "@/shared/model";

interface ContainerOwnProps<RefT extends HTMLElement> {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  bgColor?: string;
  needHoverAnimation?: boolean;
  ref?: RefObject<RefT | null>;
}

export type ContainerProps<
  T extends ElementType,
  RefT extends HTMLElement,
> = PolymorphicProps<T, ContainerOwnProps<RefT>>;

export default function Container<
  T extends ElementType,
  RefT extends HTMLElement,
>({
  className,
  children,
  asChild,
  as,
  bgColor = "white",
  needHoverAnimation = true,
  ...rest
}: ContainerProps<T, RefT>) {
  const Tag = asChild ? Slot : as || "div";
  return (
    <Tag
      className={classNames(
        className,
        `bg-${bgColor}`,
        needHoverAnimation && classes.hoverAnimation,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
