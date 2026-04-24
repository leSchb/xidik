import classes from "./info.module.css";

const items: string[] = [
  "Для детей 1,5-9 лет",
  "от 1000 ₽",
  "ТЦ «Центральный», 3 этаж",
];

export default function HeroInfoItems() {
  return (
    <ul
      className={`${classes.container} flex-row gap-6px align-center justify-center`}
    >
      {items.map((item, index) => (
        <li key={index + item} className={classes.item}>
          <span className="text-body-14 text-body bold white">{item}</span>
        </li>
      ))}
    </ul>
  );
}
