import React from "react";

interface Props {
  children: React.ReactNode;
  wrapperCss?: string;
  title?: string;
}

const OptionsWrapper = ({
  children,
  wrapperCss,
  title = "Selecione",
}: Props) => {
  return (
    <div className={wrapperCss}>
      <p className="font-[475] mb-2 pt-1 uppercase text-blue-600 tracking-wide">
        {title}
      </p>
      {children}
    </div>
  );
};

export { OptionsWrapper };
