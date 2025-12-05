import React from "react";
import { StateSetter } from "@/types/types";
import ButtonClose from "./ButtonClose";

interface Props {
  text?: string;
  title?: string;
  children?: React.ReactElement;
  setState: StateSetter<boolean>;
}

const css = {
  wrapper: `w-full min-h-screen fixed top-0 right-0 centralize bg-black/25 z-4`,
  container: `w-120 h-auto br-lg shadow-lg bg-white hover:shadow-lg-hover p-6 relative`,
  header: `min-h-10 w-full flex flex items-center justify-start gap-2 mb-4`,
  title: `font-medium text-[1.12em]`,
  text: "",
};

const AlertFullScrren = ({ text, title, children, setState }: Props) => {

  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.container}`}>
        <ButtonClose setState={setState} />
        <header className={`${css.header}`}>
          {children}
          <p className={`${css.title}`}>{title}</p>
        </header>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default AlertFullScrren;
