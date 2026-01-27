'use client';
import { Button } from '@/components/ui';
import { setReducedHeight } from '@/functions/setReducedHeight';
import { useResizeCount } from '@/hooks/useResizeCount';
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
  resizeCount?: number;
}

export function ResizableCardTitle({
  children,
  expand,
  setExpand,
  setDivHeight,
  valueToFixHeight = 10,
  buttonStyles,
  resizeCount,
}: Props) {
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
      className={`max-h-max flex justify-between gap-4 sm:justify-start`}
      onClick={() => {
        setExpand((prev) => !prev);
      }}>
      {children}

      <Button
        size={'icon'}
        onClick={(e) => {
          e.stopPropagation();
          setExpand((prev) => !prev);
        }}
        className={`-mr-2 pt-px sm:mt-1 sm:mr-0 ${buttonStyles && buttonStyles} ${
          expand ? 'rotate-180 pt-1 pl-0 pr-px' : 'rotate-0 pl-px'
        }`}>
        <ChevronDown />
      </Button>
    </div>
  );
}
