"use client";
import { useIsMobile } from "@/hooks";
import React from "react";
import { BottomNavBar } from "./bottom-nav-bar";
// import { LinesOverlay } from "lines-overlay";

interface StoreLayoutProps {
  children: React.ReactNode;
}

export const StoreLayout = ({ children }: StoreLayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col min-h-screen relative">
      {children}
      <BottomNavBar isMobile={isMobile} />
      {/* <LinesOverlay /> */}
    </div>
  );
};