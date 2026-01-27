'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import { BooleanSetter } from '@/types/types';

const css = {
  container: `fixed top-0 right-0 w-full h-screen bg-black/16 z-6`,
  wrapper: `h-[calc(100vh-52px)] w-8/10 max-w-120 pb-6 min-h-screen z-6 
  bg-light-bg rounded-none [box-shadow:_-8px_0_20px_rgba(0,0,0,0.05)] 
  overflow-y-scroll transition-300 absolute top-0 right-0
`,
};

interface Props {
  setSeeState: BooleanSetter;
  children: ReactNode;
  wrapperStyles: string;
}

export const SideArea = ({ setSeeState, children, wrapperStyles }: Props) => {
  const [canClick, setCanClick] = useState<boolean>(false);
  const [view, setView] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setView(true);
      setCanClick(true);
    }, 200);

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div
      className={css.container}
      onClick={() => {
        if (canClick) {
          setSeeState(false);
        }
      }}>
      <div
        className={`${css.wrapper} ${wrapperStyles} ${view ? 'translate-x-0' : 'translate-x-120'}`}>
        {children}
      </div>
    </div>
  );
};
