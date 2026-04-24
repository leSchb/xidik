import Button from "@/shared/components/button";
import classes from "./buttons.module.css";
import { ILinkItem } from "@/shared/model";

interface IItem extends ILinkItem {
  typeButton: "black-border" | "green-60";
}

const items: IItem[] = [
  {
    href: "tel:74950009999",
    title: "+ 7 495 000 99 99",
    typeButton: "black-border",
  },
  {
    href: "/login",
    title: "войти",
    typeButton: "green-60",
  },
];

export default function HeaderButtons() {
  return (
    <div className={`flex-row align-center ${classes.container}`}>
      {items.map((item, index) => (
        <Button
          key={item.href + index}
          as={"a"}
          className={classes.button}
          bgColor={item.typeButton}
          href={item.href}
        >
          <span className="neutral-100 text-button text-button-16">
            {item.title}
          </span>
        </Button>
      ))}
    </div>
  );
}
