import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function PageWrapper({
  children,
  className,
}: Props) {
  return (
    <>
      <main className={classNames(className, "flex-column")}>{children}</main>
    </>
  );
}
