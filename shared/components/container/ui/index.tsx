import { Slot } from "@radix-ui/react-slot";
import classNames from "classnames";

import { ElementType, RefObject } from "react";
import { PolymorphicProps } from "@/shared/model";

interface ContainerOwnProps<RefT extends HTMLElement> {
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
  bgColor?: string;
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
  ...rest
}: ContainerProps<T, RefT>) {
  const Tag = asChild ? Slot : as || "div";
  return (
    <Tag
      className={classNames(className, bgColor && `bg-${bgColor}`)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
