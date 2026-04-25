import classes from "./formula.module.css";
import FormulaContent from "./content";

export default function FormulaSection() {
  return (
    <section
      id="formula"
      className={`flex-column justify-center ${classes.container}`}
    >
      <div className={`flex-column align-center self-center ${classes.text}`}>
        <h2 className="headline headline--xxl neutral-100 text-center">
          Формула KIDIX
        </h2>
        <p className="text-body text-body--18 neutral-100 text-center">
          Сочетаем движение, когнитивные задачи и работу с эмоциями, чтобы
          ребёнок развивался гармонично.
        </p>
      </div>
      <FormulaContent />
    </section>
  );
}
