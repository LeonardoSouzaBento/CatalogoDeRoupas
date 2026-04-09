"use client";

import { useEffect, useState } from "react";
import { useMatchMedia } from "./useMatchMedia";

export function useIsMobile() {
  const resizeCount = useMatchMedia();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(resizeCount <= 768);
  }, [resizeCount]);

  return isMobile;
}
