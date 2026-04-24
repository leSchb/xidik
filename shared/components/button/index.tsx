import classNames from "classnames";

import classes from "./button.module.css";
import Container from "../container/ui";
import { ElementType } from "react";
import { ContainerProps } from "../container/ui";

type Props<T extends ElementType, RefT extends HTMLElement> = ContainerProps<
  T,
  RefT
> & {
  activeScale?: boolean;
  justifyCenter?: boolean;
};

export default function Button<
  T extends ElementType,
  RefT extends HTMLElement,
>({
  activeScale = true,
  justifyCenter = true,
  children,
  bgColor = "transparent",
  as,
  className,
  ...rest
}: Props<T, RefT>) {
  return (
    <Container
      bgColor={null}
      className={classNames(
        classes.button,
        classes[bgColor],
        activeScale && classes.activeScale,
        justifyCenter && classes.justifyCenter,
        className,
      )}
      as={as || "button"}
      {...(rest as ContainerProps<T, RefT>)}
    >
      {children}
    </Container>
  );
}
