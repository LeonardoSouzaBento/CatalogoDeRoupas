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
      <p className="font-[475] mb-2 uppercase text-blue-600 tracking-wide small-text">
        {title}
      </p>
      {children}
    </div>
  );
};

export { OptionsWrapper };
