import classNames from "classnames";

import Header from "@/components/header/ui";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className }: Props) {
  return (
    <>
      <Header />
      <main className={classNames(className, "flex-column")}>{children}</main>
    </>
  );
}
