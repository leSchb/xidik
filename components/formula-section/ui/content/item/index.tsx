import classes from "./item.module.css";
import Star from "@/public/formula/star.svg";
import { IFormulaItem } from "@/components/formula-section/model";

interface Props extends IFormulaItem {
  index: number;
}

export default function FormulaItem({ title, text, index }: Props) {
  return (
    <div
      className={`${classes.container} mandatory-x-item absolute`}
      style={
        {
          background: `url('/formula/${index}.png') no-repeat center bottom / cover`,
        } as React.CSSProperties
      }
    >
      <div className={`${classes.index} absolute`}>
        <Star className={classes.star} />
        <span className={`text-button subtitle--xxl white`}>
          {index}
        </span>
      </div>
      <div className="flex-column gap-1">
        <h3 className="headline headline--s white">{title}</h3>
        <p className="text-body text-body--14 white">{text}</p>
      </div>
    </div>
  );
}
