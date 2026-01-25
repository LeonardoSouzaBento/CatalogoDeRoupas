'use client';
import { StateSetter } from '@/types/types';
import { useEffect } from 'react';

export function useIsMobile(resizeCount: number, setIsMobile: StateSetter<boolean>) {
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, [resizeCount]);
}
