import classes from "./formula-content.module.css";
import FormulaCosmetics from "./cosmetics";
import FormulaItem from "./item";
import Bg from "@/public/formula/bg.svg";
import BgMedia from "@/public/formula/bg-media.svg";
import { formulaItems } from "../../model";

export default function FormulaContent() {
  return (
    <div
      className={`relative flex-column gap-8 self-center ${classes.container}`}
    >
      <div className={`flex-row relative no-scrollbar ${classes.items}`}>
        {formulaItems.map((item, index) => (
          <FormulaItem key={index + item.title} {...item} index={index + 1} />
        ))}
        <Bg className={`${classes.bg} ${classes.icon}`} />
        <BgMedia className={`${classes.bg} ${classes.mediaIcon}`} />
      </div>
      <FormulaCosmetics />
    </div>
  );
}
