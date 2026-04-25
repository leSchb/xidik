import classes from "./cosmetics.module.css";
import Star from "@/public/formula/right-bottom-star.svg";
import LeftTopStar from "@/public/formula/top-left-star.svg";
import RightStar from "@/public/formula/right-star.svg";
import LeftBottomStar from "@/public/formula/left-bottom-star.svg";

export default function FormulaCosmetics() {
  return (
    <>
      <div className={`${classes.mascote}`}>
        <LeftBottomStar className={`absolute ${classes.lbStar}`} />
        <RightStar className={`absolute ${classes.rStar}`} />
        <LeftTopStar className={`absolute ${classes.ltStar}`} />
      </div>
      <Star className={`absolute ${classes.rbStar}`} />
    </>
  );
}
