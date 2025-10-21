import React from "react";
import type { LucideProps } from "lucide-react";

const css = { header: ``, title: `` };

const HeaderCard = ({
  title,
  child,
}: {
  title: string;
  child: React.ReactElement<LucideProps>;
}): React.ReactElement => {
  return (
    <header className={`${css.header}`}>
      <h1 className={`${css.title}`}>{title}</h1>
      {child}
    </header>
  );
};

export default HeaderCard;
