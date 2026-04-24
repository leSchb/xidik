"use client";
import { useSubscribeButton } from "../lib/hooks";

import classes from "./subscirbe-button.module.css";
import SubscribeButton from "./button";

export default function SubscribeButtonContainer() {
  const { stickyButtonRef, normalButtonRef } = useSubscribeButton();

  return (
    <>
      <SubscribeButton ref={normalButtonRef} />
      <SubscribeButton ref={stickyButtonRef} className={classes.sticky} />
    </>
  );
}
