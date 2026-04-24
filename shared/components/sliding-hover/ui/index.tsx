import classNames from "classnames";
import Container from "../../container/ui";
import classes from "./sliding-hover.module.css";

type Props = {
  ref: React.RefObject<HTMLDivElement | null>;
  bgColor?: string;
  children?: null;
};

export default function SlidingHover({ ref, bgColor = "orange-10" }: Props) {
  return (
    <Container
      as="div"
      ref={ref}
      bgColor={bgColor}
      className={classNames(classes.container)}
    />
  );
}
