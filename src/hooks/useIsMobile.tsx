'use client';

import { useEffect, useState } from 'react';
import { useResizeCount } from './useResizeCount';

export function useIsMobile() {
  const resizeCount = useResizeCount();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, [resizeCount]);

  return isMobile;
}
