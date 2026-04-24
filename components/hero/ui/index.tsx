import classNames from "classnames";

import classes from "./hero.module.css";
import HeroInfo from "./info";
import SubscribeButtonContainer from "@/components/subscribe-button/ui";

export default function Hero() {
  return (
    <div className={classNames("place-center", classes.wrapper)}>
      <div className={`flex-column align-center ${classes.container}`}>
        <HeroInfo />
        <SubscribeButtonContainer />
      </div>
    </div>
  );
}
