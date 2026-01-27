'use client';
import { StateSetter } from '@/types/types';
import { useEffect, useRef } from 'react';

export function useResizeCount(setResizingCounter: StateSetter<number>) {
  const lastWidthRef = useRef<number | null>(null);
  const tickingRef = useRef(false);
  const resizeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    lastWidthRef.current = window.innerWidth;
    let timeout: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      document.documentElement.classList.add('is-resizing');

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        document.documentElement.classList.remove('is-resizing');
      }, 200);

      if (!tickingRef.current) {
        tickingRef.current = true;

        requestAnimationFrame(() => {
          tickingRef.current = false;
          lastWidthRef.current = window.innerWidth;
        });
      }

      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(() => {
        setResizingCounter((prev) => prev + 1);
      }, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      clearTimeout(timeout);
    };
  }, [setResizingCounter]);
}
