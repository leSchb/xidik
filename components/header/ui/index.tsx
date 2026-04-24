import classNames from "classnames";

import classes from "./header.module.css";
import Image from "next/image";
import Container from "@/shared/components/container/ui";
import Nav from "@/components/nav/ui";
import HeaderButtons from "./buttons";
import Link from "next/link";

interface Props {
  containerClassName?: string;
}

export default function Header({ containerClassName }: Props) {
  return (
    <header className={classes.wrapper}>
      <Container
        bgColor="white"
        className={classNames(
          containerClassName,
          classes.container,
          "flex-row align-center justify-between",
        )}
      >
        <Link href="/">
          <Image
            src={"/header/logo.svg"}
            alt="Kidix"
            width={102}
            height={34}
            className={classes.logo}
            priority
          />
        </Link>
        <Nav />
        <HeaderButtons />
      </Container>
    </header>
  );
}
