'use client';
import { Button } from '@/components/ui';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  cardRef: React.RefObject<HTMLDivElement | null>;
  resizeCount: number;
  pb?: number;
  cssButton?: string;
}

export function ResizableCardTitle({ children, cardRef, cssButton, resizeCount, pb = 0 }: Props) {
  const [expand, setExpand] = useState(false);
  const wrapperTitleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current && wrapperTitleRef.current) {
      if (expand) {
        cardRef.current.style.height = 'auto';
      } else {
        const height = wrapperTitleRef.current.offsetHeight;
        cardRef.current.style.height = (pb + height) / 16 + 'rem';
      }
    }
  }, [expand, resizeCount, cardRef]);

  return (
    <div
      ref={wrapperTitleRef}
      className={`w-full flex justify-between gap-4 sm:justify-start`}
      onClick={() => {
        setExpand((prev) => !prev);
      }}>
      {children}

      <Button
        size={'icon-sm'}
        variant={'secondary'}
        onClick={(e) => {
          e.stopPropagation();
          setExpand((prev) => !prev);
        }}
        className={`rounded-full -mr-2 pt-px sm:mt-1 sm:mr-0 ${cssButton} ${
          expand ? 'rotate-180 pt-1 pl-0 pr-px' : 'rotate-0 pl-px'
        }`}>
        <ChevronDown />
      </Button>
    </div>
  );
}
