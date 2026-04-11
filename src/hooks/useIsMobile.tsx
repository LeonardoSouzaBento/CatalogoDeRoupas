"use client";

import { useEffect, useState } from "react";
import { useMatchMedia } from "./useMatchMedia";

export function useIsMobile() {
  const viewportWidth = useMatchMedia();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, [viewportWidth]);

  return isMobile;
}
