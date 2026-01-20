'use client';
import { iconLg } from '@/css/lucideIconStyles';
import { setReducedHeight } from '@/functions/setReducedHeight';
import { useResizingCounter } from '@/hooks/useResizingCounter';
import { BooleanSetter, StateSetter } from '@/types/types';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  expand: boolean;
  setExpand: BooleanSetter;
  setDivHeight: StateSetter<string | null>;
  valueToFixHeight?: number;
  buttonStyles?: string;
}

const css = {
  wrapperTitle: `max-h-max flex justify-between gap-4 sm:justify-start`,
  button: `size-9 min-w-9 -mr-2 px-0 pt-px flex-center
  br-50 box-border trans  sm:mt-1 sm:mr-0`,
};

export function ResizableDivTitle({
  children,
  expand,
  setExpand,
  setDivHeight,
  valueToFixHeight = 10,
  buttonStyles,
}: Props) {
  const [resizeCount, setResizeCount] = useState<number>(0);
  useResizingCounter(setResizeCount);

  const wrapperTitleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setReducedHeight(wrapperTitleRef, setDivHeight, valueToFixHeight);
  }, []);

  useEffect(() => {
    setReducedHeight(wrapperTitleRef, setDivHeight, valueToFixHeight);
  }, [resizeCount]);

  return (
    <div
      ref={wrapperTitleRef}
      className={`${css.wrapperTitle}`}
      onClick={() => {
        setExpand((prev) => !prev);
      }}>
      {children}

      <button
        onClick={(e) => {
          e.stopPropagation();
          setExpand((prev) => !prev);
        }}
        className={`${css.button} ${buttonStyles && buttonStyles} ${
          expand ? 'rotate-180 pt-1 pl-0 pr-px' : 'rotate-0 pl-px'
        }`}>
        <ChevronDown  />
      </button>
    </div>
  );
}
