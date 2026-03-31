import React from 'react';

interface Props {
  children: React.ReactNode;
  wrapperCss?: string;
  title?: string;
}

const WrapperOptions = ({ children, wrapperCss, title = 'Selecione' }: Props) => {
  return (
    <div className={wrapperCss}>
      <p className="font-medium mb-2 pt-1 uppercase text-blue-600 tracking-wide">{title}</p>
      {children}
    </div>
  );
};

export { WrapperOptions };
