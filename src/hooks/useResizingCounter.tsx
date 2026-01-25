'use client';
import { StateSetter } from '@/types/types';
import { useEffect, useRef } from 'react';

export function useResizingCounter(
  setResizingCounter: StateSetter<number>,
) {
  const lastWidthRef = useRef<number>(0);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    lastWidthRef.current = window.innerWidth;

    const handleResize = () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }

      debounceRef.current = setTimeout(() => {
        const currentWidth = window.innerWidth;

        if (currentWidth !== lastWidthRef.current) {
          setResizingCounter((prev) => prev + 1);
          lastWidthRef.current = currentWidth;
        }
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);
}
