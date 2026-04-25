import classNames from "classnames";

import classes from "./button.module.css";
import Button from "@/shared/components/button";
import { RefObject } from "react";

interface Props {
  ref: RefObject<HTMLButtonElement | null>;
  className?: string;
}

export default function SubscribeButton({ className, ref }: Props) {
  return (
    <Button
      className={classNames(classes.button, className)}
      onClick={() => {}}
      bgColor="orange-60"
      ref={ref}
    >
      <span className="text-button text-button-20 white">
        записаться на пробное
      </span>
    </Button>
  );
}
