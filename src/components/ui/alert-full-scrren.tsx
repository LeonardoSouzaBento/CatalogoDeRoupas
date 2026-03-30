import React from "react";
import type { StateSetter } from "@/types/types";
import { X } from "lucide-react";
import { Button, Icon } from "@/components/ui";

interface Props {
  text?: string;
  title?: string;
  children?: React.ReactElement;
  setState: StateSetter<boolean>;
}

const css = {
  wrapper: `w-full min-h-screen fixed top-0 right-0 flex-center bg-black/25 z-4`,
  container: `w-120 h-auto rounded-md shadow-lg bg-light-bg hover:shadow-lg-hover p-6 relative`,
  header: `min-h-10 w-full flex flex items-center justify-start gap-2 mb-4`,
  title: `font-medium `,
  text: "",
};

const AlertFullScrren = ({ text, title, children, setState }: Props) => {
  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.container}`}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2"
          onClick={() => setState(false)}
        >
          <Icon Svg={X} />
        </Button>
        <header className={`${css.header}`}>
          {children}
          <p className={`${css.title}`}>{title}</p>
        </header>
        <p>{text}</p>
      </div>
    </div>
  );
};

export { AlertFullScrren };
