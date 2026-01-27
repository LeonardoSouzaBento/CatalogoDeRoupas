"use client"
import { useEffect, useState } from 'react';

interface Params {
  parentRef: React.RefObject<HTMLElement | null>;
  containerRef: React.RefObject<HTMLElement | null>;
  resizeCount?: number;
  calcThumbWidth?: boolean;
}

export function useScrollGetVars({
  parentRef,
  containerRef,
  resizeCount,
  calcThumbWidth = true,
}: Params) {
  const [parentWidth, setParentWidth] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(0);

  function calculate() {
    if (!parentRef.current || !containerRef.current) return;

    const parent = parentRef.current.offsetWidth;
    const scroll = containerRef.current.scrollWidth;

    setParentWidth(parent);
    setScrollWidth(scroll);

    if (calcThumbWidth && scroll > 0) {
      setThumbWidth((parent / scroll) * 100);
    }
  }

  useEffect(() => {
    calculate();
  }, []);

  useEffect(() => {
    if (resizeCount !== undefined) {
      calculate();
    }
  }, [resizeCount]);

  return {
    parentWidth,
    scrollWidth,
    thumbWidth,
  };
}
