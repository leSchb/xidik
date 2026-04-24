import { ElementType } from "react";

export type PolymorphicProps<T extends ElementType, P> = P &
  Omit<React.ComponentPropsWithoutRef<T>, keyof P | "as"> & {
    as?: T;
  };

export type ILinkItem = {
  title: string;
  href: string;
  blank?: boolean;
};

export type SvgType = React.FC<React.SVGProps<React.SVGElementType>>;
