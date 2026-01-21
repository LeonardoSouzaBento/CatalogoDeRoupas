// ARQUIVO COMENTADO - Substituído pelo Button do shadcn UI em @/components/ui/button
// Este componente não tinha usages ativos no código
// Para criar um botão de fechar: import { Button } from '@/components/ui/button'
// Exemplo: <Button size="icon" variant="ghost" onClick={() => setState(false)}><X /></Button>

/*
import React from 'react';

import { BooleanSetter, StateSetter } from '@/types/types';
import { X } from 'lucide-react';

const css = {
  button: `h-9 min-w-9 p-0 flex justify-center items-center rounded-md 
  transition-colors duration-200`,
  lightStyle: 'bg-gray-50 hover:bg-gray-100 shadow-lg-hover',
  simpleStyle: `bg-gray-100 hover:bg-gray-200 trans`,
  defaultPosition: 'absolute top-[10.5px] right-[10.5px]',
};

interface ButtonCloseProps {
  setState: BooleanSetter;
  positionStyles?: string;
  simpleDesign?: boolean;
  styles?: string;
  iconStyles?: object;
  delay?: number;
  setStateAnimation?: StateSetter<boolean>;
}

const ButtonClose = ({
  setState,
  positionStyles,
  simpleDesign,
  styles,
  iconStyles,
  delay,
  setStateAnimation = () => {},
}: ButtonCloseProps) => {
  return (
    <button
      className={`
       ${css.button} ${simpleDesign ? css.simpleStyle : css.lightStyle}
       ${positionStyles ? positionStyles : css.defaultPosition} 
       ${styles && styles}`}
      onClick={(e) => {
        e.stopPropagation();
        if (delay) {
          setStateAnimation(false);
          setTimeout(() => {
            setState(false);
          }, delay);
        } else {
          setState(false);
        }
      }}>
      <X  strokeWidth={1.9} {...iconStyles} />
    </button>
  );
};

export default ButtonClose;
*/
