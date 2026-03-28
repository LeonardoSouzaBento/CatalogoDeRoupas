"use client";
import { useIsMobile, useResizeCount } from "@/hooks";
import React, { useState } from "react";
import { BottomNavBar } from "./bottom-nav-bar";

interface StoreLayoutProps {
  children: React.ReactNode;
}

export const StoreLayout = ({ children }: StoreLayoutProps) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [resizeCount, setResizeCount] = useState<number>(0);

  useResizeCount(setResizeCount);
  useIsMobile(resizeCount, setIsMobile);

  return (
    <div className="flex flex-col min-h-screen relative">
      {children}
      <BottomNavBar isMobile={isMobile} />
    </div>
  );
};