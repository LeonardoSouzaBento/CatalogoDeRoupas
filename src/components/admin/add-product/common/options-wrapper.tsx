import React from "react";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {
  children: React.ReactNode;
  wrapperCss?: string;
  title?: string;
}

const OptionsWrapper = ({
  children,
  wrapperCss,
  title = "Selecione",
  ref,
}: Props) => {
  return (
    <div className={wrapperCss} ref={ref}>
      <p className="font-[475] mb-2 uppercase text-blue-600 tracking-wide small-text">
        {title}
      </p>
      {children}
    </div>
  );
};

export { OptionsWrapper };
