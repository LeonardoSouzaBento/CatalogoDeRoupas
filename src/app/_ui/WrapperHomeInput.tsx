import React from 'react';
import { BooleanSetter } from '@/types/types';
import ButtonClose from './button-close';

const css = {
  wrapper: 'w-full bg-white',
  wrapperTitle:
    'min-h-13 min-w-full mb-5 flex justify-between items-center gap-2 border-b border-gray-200 rounded-none',
  h3: ``,
};

interface WrapperFormProps {
  title: string;
  setState: BooleanSetter;
  children: React.ReactElement;
}

const WrapperHome = ({ title, children, setState }: WrapperFormProps): React.ReactElement => {
  return (
    <div className={`${css.wrapper}`}>
      <div className={`${css.wrapperTitle}`}>
        <p className={`${css.h3}`}>{title}</p>
        <ButtonClose setState={setState} />
      </div>
      {children}
    </div>
  );
};

export default WrapperHome;
