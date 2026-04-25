import classes from "./hero-info.module.css";
import HeroInfoItems from "./info-items";

export default function HeroInfo() {
  return (
    <div className={`flex-column align-center ${classes.container}`}>
      <HeroInfoItems />
      <div className="flex-column gap-3 align-center">
        <h1 className="headline headline--xxl white text-center">
          Направь <br className={classes.br} /> энергию ребёнка <br />в развитие
        </h1>
        <p className="text-body text-body--18 white text-center">
          Игровые тренировки, <br className={classes.br} />
          от которых он будет в восторге
        </p>
      </div>
    </div>
  );
}
