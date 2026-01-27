'use client';
import type { StateSetter } from '@/types/types';
import { useEffect } from 'react';

export function useIsMobile(resizeCount: number, setIsMobile: StateSetter<boolean>) {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    setIsMobile(isMobile);
  }, [resizeCount]);
}
