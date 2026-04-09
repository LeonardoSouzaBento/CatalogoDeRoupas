import { useState, useEffect, useMemo } from 'react';

/**
 * Hook que retorna a largura da janela toda vez que ela atravessa breakpoints específicos.
 * Por padrão, utiliza os breakpoints do Tailwind CSS (640, 768, 1024, 1280, 1536).
 * 
 * @param customBreakpoints - Array de números com breakpoints adicionais.
 * @returns A largura atual da janela (window.innerWidth).
 */
export const useMatchMedia = (customBreakpoints: number[] = []) => {
  const tailwindBreakpoints = [640, 768, 1024, 1280, 1536];

  const breakpoints = useMemo(() => {
    return Array.from(new Set([...tailwindBreakpoints, ...customBreakpoints])).sort((a, b) => a - b);
  }, [customBreakpoints]);

  const [windowWidth, setWindowWidth] = useState<number>(() => 
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  const addListener = (mql: MediaQueryList, handler: (e: MediaQueryListEvent | MediaQueryList) => void) => {
    if (mql.addEventListener) {
      mql.addEventListener('change', handler as EventListener);
    } else {
      mql.addListener(handler as (e: MediaQueryListEvent) => void);
    }
  };

  const removeListener = (mql: MediaQueryList, handler: (e: MediaQueryListEvent | MediaQueryList) => void) => {
    if (mql.removeEventListener) {
      mql.removeEventListener('change', handler as EventListener);
    } else {
      mql.removeListener(handler as (e: MediaQueryListEvent) => void);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMatch = () => {
      setWindowWidth(window.innerWidth);
    };

    const mediaQueryLists = breakpoints.map(bp => window.matchMedia(`(min-width: ${bp}px)`));

    mediaQueryLists.forEach(mql => addListener(mql, handleMatch));

    handleMatch();

    return () => {
      mediaQueryLists.forEach(mql => removeListener(mql, handleMatch));
    };
  }, [breakpoints]);

  return windowWidth;
};
