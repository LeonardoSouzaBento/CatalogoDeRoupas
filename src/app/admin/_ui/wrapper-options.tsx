import React from "react";

interface Props {
  children: React.ReactNode;
  styles?: string;
  title?: string;
}

const WrapperOptions = ({ children, styles, title = "Selecione" }: Props) => {
  return (
    <div className={styles}>
      <p className="p16 font-medium mb-3 uppercase text-blue-600 tracking-wide">
        {title}
      </p>
      {children}
    </div>
  );
};

export default WrapperOptions;
